import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { FeedHeader } from '@/components/feed/FeedHeader';
import { StoriesRow } from '@/components/feed/StoriesRow';
import { PostCard } from '@/components/feed/PostCard';
import { BottomTabBar } from '@/components/feed/BottomTabBar';

export function FeedScreen() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Top Header */}
      <FeedHeader />

      {/* Scrollable feed content */}
      <ScrollView
        style={styles.feed}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.feedContent}
      >
        {/* Stories row */}
        <StoriesRow />

        {/* Post 1 — Terrance Mertz */}
        <PostCard
          authorName="Terrance Mertz"
          authorInitials="TM"
          authorAvatarColor="#5C6BC0"
          isVerified
          flagEmoji="🇬🇧"
          timeAgo="8 min"
          bodyText="Absorbeo alias adnuo cogito tergum decipio creptio curo molestias minus. Acer aduro sol sulum tergiversatio vehemens tribuo tabesco minima tot. Templum casus volo odit conservo cultellus soleo crudelis quis ex."
          commentsCount={60}
          likesCount={720}
        />

        {/* Post 2 — Anabel Stracke (partial, just like in the mockup) */}
        <PostCard
          authorName="Anabel Stracke"
          authorInitials="AS"
          authorAvatarColor="#EC407A"
          flagEmoji="🇬🇧"
          timeAgo="3 hrs"
          bodyText="Veritas crux theologus sol praesentium blanditiis antiquus sopor totidem aer est. Volo tutis conspergo altus ager."
          commentsCount={14}
          likesCount={312}
        />
      </ScrollView>

      {/* Bottom Tab Bar */}
      <BottomTabBar activeTab={activeTab} onTabPress={setActiveTab} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  feed: {
    flex: 1,
  },
  feedContent: {
    paddingBottom: 8,
  },
});
