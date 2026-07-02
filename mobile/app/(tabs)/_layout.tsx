import { Tabs } from 'expo-router';
import React from 'react';

// The tab bar is hidden because we render a custom BottomTabBar
// inside FeedScreen, and LoginScreen doesn't need a tab bar at all.
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: 'none' },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="explore" options={{ href: null }} />
    </Tabs>
  );
}
