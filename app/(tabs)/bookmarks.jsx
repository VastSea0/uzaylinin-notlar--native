import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator, FlatList, Pressable } from 'react-native';
import { BookmarkIcon , ArrowPathIcon } from 'react-native-heroicons/solid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PostCard } from '@/components/PostCard';
import { PostDetail } from '@/components/PostDetail';
import styles from '../../components/stlye';

const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBookmarks = async () => {
    try {
      setLoading(true);
      const bookmarksJson = await AsyncStorage.getItem('bookmarks');
      if (bookmarksJson) {
        const parsedBookmarks = JSON.parse(bookmarksJson);
        // Tarihe göre sırala
        setBookmarks(parsedBookmarks.sort((a, b) => new Date(b.date) - new Date(a.date)));
      } else {
        setBookmarks([]);
      }
    } catch (err) {
      setError('Bookmarklar yüklenirken bir hata oluştu');
      console.error('Error fetching bookmarks:', err);
    } finally {
      setLoading(false);
    }
  };

  // Bookmark silme işlemi
  const removeBookmark = async (postId) => {
    try {
      const currentBookmarks = await AsyncStorage.getItem('bookmarks');
      if (currentBookmarks) {
        const bookmarksList = JSON.parse(currentBookmarks);
        const updatedBookmarks = bookmarksList.filter(bookmark => bookmark.id !== postId);
        await AsyncStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
        setBookmarks(updatedBookmarks);
     
        return true;
      }
    } catch (err) {
      console.error('Error removing bookmark:', err);
      return false;
    }
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  return { 
    bookmarks, 
    loading, 
    error, 
    refetch: fetchBookmarks,
    removeBookmark 
  };
};

export default function BookmarksPage() {
  const [selectedPost, setSelectedPost] = useState(null);
  const { bookmarks, loading, error, refetch, removeBookmark } = useBookmarks();

  const handleRemoveBookmark = async (postId) => {
    const success = await removeBookmark(postId);
    if (success) {
      // İsteğe bağlı: Kullanıcıya geri bildirim göster
    }
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#D1B2FF" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
        <TouchableOpacity onPress={refetch} style={styles.retryButton}>
          <Text style={styles.retryText}>Tekrar Dene</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      {selectedPost ? (
        <PostDetail post={selectedPost} onBack={() => setSelectedPost(null)} />
      ) : (
        <View style={styles.container}>
           <Text style={styles.header}>
              Bookmarks <BookmarkIcon style={styles.headerIcon} />
            </Text>
          <View style={styles.headerContainer}>
           
            {bookmarks.length === 0 && (
              <View style={styles.emptyStateContainer}>
                <BookmarkIcon 
                  style={[styles.icon, { width: 48, height: 48, marginBottom: 16 }]} 
                />
                <Text style={styles.emptyStateText}>
                  Henüz bookmark eklenmemiş
                </Text>
                <TouchableOpacity onPress={()=> refetch()} style={{ 
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignItems: 'center',
                 }} >
                   <ArrowPathIcon style={{
                    color: '#d3439f',
                    width: 50,
                    height: 50,
                    alignSelf: 'center',
                    marginLeft: 10
                  }} />
                
                </TouchableOpacity>
                <Text style={styles.emptyStateSubText}>
                  Bloglardan beğendiklerinizi bookmarklayarak buradan ulaşabilirsiniz
                </Text>
              </View>
            )}
          </View>

          <FlatList
            data={bookmarks}
            renderItem={({ item }) => (
              <PostCard 
                post={item} 
                onPress={() => setSelectedPost(item)}
                onRemoveBookmark={() => handleRemoveBookmark(item.id)}
                isBookmarked={true}
                onBookmarkChange={refetch}
              />
            )}

            keyExtractor={item => item.slug}
            showsVerticalScrollIndicator={false}
            initialNumToRender={5}
            maxToRenderPerBatch={5}
            windowSize={5}
            contentContainerStyle={bookmarks.length === 0 ? styles.emptyListContainer : null}
          />
        </View>
      )}
    </>
  );
}