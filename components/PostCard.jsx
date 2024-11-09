import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Pressable, Alert } from 'react-native';
import { CalendarIcon, ClockIcon, BookmarkIcon as SolidBookmarkIcon } from 'react-native-heroicons/solid';
import { BookmarkIcon as OutlineBookmarkIcon } from 'react-native-heroicons/outline';
import styles from './stlye';
import { formatDate, formatTime } from './dates';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to get bookmarks
const getBookmarks = async () => {
  try {
    const bookmarksJson = await AsyncStorage.getItem('bookmarks');
    if (!bookmarksJson) {
      await AsyncStorage.setItem('bookmarks', JSON.stringify([]));
      return [];
    }
    return JSON.parse(bookmarksJson);
  } catch (error) {
    console.error('Error getting bookmarks:', error);
    return [];
  }
};

// Function to store bookmarks
const storeBookmark = async (post) => {
  try {
    const currentBookmarks = await getBookmarks() || [];
    
    if (!Array.isArray(currentBookmarks)) {
      await AsyncStorage.setItem('bookmarks', JSON.stringify([]));
      return storeBookmark(post);
    }
    
    const isBookmarked = currentBookmarks.some(bookmark => bookmark.id === post.id);
    let updatedBookmarks;

    if (isBookmarked) {
      updatedBookmarks = currentBookmarks.filter(bookmark => bookmark.id !== post.id);
    } else {
      updatedBookmarks = [...currentBookmarks, post];
    }
    
    await AsyncStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    return !isBookmarked; // Return new status
  } catch (error) {
    console.error('Error storing bookmark:', error);
    Alert.alert('Hata', 'Bookmark eklenirken bir hata oluştu.');
    return null;
  }
};

export const PostCard = ({ post, onPress, onBookmarkChange }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const checkBookmarkStatus = async () => {
      try {
        const bookmarks = await getBookmarks();
        setIsBookmarked(bookmarks.some(bookmark => bookmark.id === post.id));
      } catch (error) {
        console.error('Error checking bookmark status:', error);
      }
    };
    
    checkBookmarkStatus();
  }, [post.id]);

  const handleBookmark = async () => {
    try {
      const newStatus = await storeBookmark(post);
      if (newStatus !== null) {
        setIsBookmarked(newStatus);
        Alert.alert(
          'Başarılı',
          newStatus ? 'Bookmark eklendi' : 'Bookmark kaldırıldı'
        );
        if (onBookmarkChange) {
          onBookmarkChange(); // Trigger refresh
        }
      }
    } catch (error) {
      console.error('Error handling bookmark:', error);
      Alert.alert('Hata', 'İşlem sırasında bir hata oluştu');
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {post.title}
          </Text>
          <Text style={styles.excerpt} numberOfLines={3} ellipsizeMode="tail">
            {post.excerpt}
          </Text>
          <View style={styles.dateContainer}>
            <CalendarIcon style={styles.icon} />
            <Text style={styles.dateText}>{formatDate(post.date)}</Text>
            <ClockIcon style={[styles.icon, styles.clockIcon]} />
            <Text style={styles.dateText}>{formatTime(post.date)}</Text>
           
            <Pressable style={styles.bookmarkButton} onPress={handleBookmark}>
              {isBookmarked ? (
                <SolidBookmarkIcon style={[styles.icon, styles.bookmarkIcon]} />
              ) : (
                <OutlineBookmarkIcon style={[styles.icon, styles.bookmarkIcon]} />
              )}
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
