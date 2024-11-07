import React from 'react';
import { Text, View, TouchableOpacity, Pressable } from 'react-native';
import { CalendarIcon, ClockIcon, BookmarkIcon } from 'react-native-heroicons/solid';
import styles from './stlye';
import { formatDate, formatTime } from './dates';

export const PostCard = ({ post, onPress }) => (
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
        <Text style={{paddingLeft: 20, paddingRight:20, color: '#c4c4c4'}}>|</Text>
        <Pressable style={styles.bookmarkButton}>
          <BookmarkIcon style={[styles.icon, styles.bookmarkIcon]} />
          <Text style={styles.bookmarkText}>Bookmark</Text>
        </Pressable>
      </View>
    </View>
  </View>
</TouchableOpacity>
);
