import { Tabs } from 'expo-router';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#D1B2FF',  // Aktif sekme için açık mor
        tabBarInactiveTintColor: '#94A3B8', // Pasif sekme için gri
        tabBarStyle: {
          backgroundColor: '#1E293B', // Tab bar arka plan rengi
          borderTopWidth: 1,
          borderTopColor: 'rgba(209, 178, 255, 0.1)', // Hafif mor kenar
          height: 60,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          title: 'Bookmarks',
          tabBarIcon: ({ color }) => (
            <Ionicons name="bookmark" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => (
            <Ionicons name="information-circle" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}