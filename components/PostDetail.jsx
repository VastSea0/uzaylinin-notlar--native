// components/PostCard.js
import React, { useState , useEffect } from 'react';
import { Text, View, TouchableOpacity  } from 'react-native';
import { CalendarIcon, ClockIcon } from 'react-native-heroicons/solid';
import {    ScrollView} from 'react-native';
import Markdown from 'react-native-markdown-display';
import styles from './stlye';
import { formatDate, formatTime } from './dates';

 


const markdownStyles = {
  text: {
    color: '#fff', 
  }
};

export const PostDetail = ({ post, onBack }) => (
  <ScrollView style={styles.blogContainer}>
    <Text style={styles.detailTitle}>{post.title}</Text>
    <View style={styles.blogContent}>
      <Markdown style={markdownStyles}>{post.content}</Markdown>
    </View>
    <Text style={styles.excerpt}>{post.excerpt}</Text>
    <View style={styles.dateContainer}>
      <CalendarIcon style={styles.icon} />
      <Text style={styles.dateText}>{formatDate(post.date)}</Text>
      <ClockIcon style={[styles.icon, styles.clockIcon]} />
      <Text style={styles.dateText}>{formatTime(post.date)}</Text>
    </View>
    <TouchableOpacity onPress={onBack} style={styles.backButton}>
      <Text style={styles.backButtonText}>Geri dön</Text>
    </TouchableOpacity>
  </ScrollView>
);
