import React, { useState , useEffect } from 'react';
import { Text, View, TouchableOpacity, Pressable } from 'react-native';
import { ArrowPathIcon } from 'react-native-heroicons/solid';
import {  FlatList, ActivityIndicator , ScrollView} from 'react-native';
import Markdown from 'react-native-markdown-display';
import { PostCard } from '@/components/PostCard';
import { formatDate, formatTime } from '../../components/dates';
import styles from '../../components/stlye';
import { PostDetail } from '@/components/PostDetail';

 

 
export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://raw.githubusercontent.com/VastSea0/uzaylinin-notlari/main/lib/api/native-posts.json'
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPosts(data.sort((a, b) => new Date(b.date) - new Date(a.date)));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { posts, loading, error, refetch: fetchPosts };
};


export default function MainPage() {
  const [selectedPost, setSelectedPost] = useState(null);
  const { posts, loading, error, refetch } = usePosts();

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
    <View style={styles.container}>
      {selectedPost ? (
        <PostDetail post={selectedPost} onBack={() => setSelectedPost(null)} />
      ) : (
        <>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          
          
        }}>
          <Text style={styles.header}>Blog Yazıları</Text>
          <Pressable onPress={refetch}>
            
          <ArrowPathIcon style={{
            color: '#d3439f',
            width: 50,
            height: 50,
            alignSelf: 'center',
            marginLeft: 10
          }} />
          </Pressable>
        </View>

          <FlatList
            data={posts}
            renderItem={({ item }) => (
            
                <PostCard post={item} onPress={() => setSelectedPost(item)} />
              
            )}
            keyExtractor={item => item.slug}
            showsVerticalScrollIndicator={false}
            initialNumToRender={5}
            maxToRenderPerBatch={5}
            windowSize={5}
          />
        </>
      )}
    </View>
  );
}

