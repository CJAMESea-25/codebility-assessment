import React from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';

interface Story {
  id: string;
  username: string;
  avatarColor: string;
  initials: string;
  isLive?: boolean;
  ringColor?: string;
}

const STORIES: Story[] = [
  {
    id: '1',
    username: 'Jeanne',
    avatarColor: '#7B4F9E',
    initials: 'J',
    ringColor: '#D300C5',
  },
  {
    id: '2',
    username: 'Julia',
    avatarColor: '#2C2C2C',
    initials: 'Ju',
    isLive: true,
    ringColor: '#E1306C',
  },
  {
    id: '3',
    username: 'Brinda',
    avatarColor: '#1A1A2E',
    initials: 'B',
    ringColor: '#F77737',
  },
  {
    id: '4',
    username: 'John',
    avatarColor: '#5C4033',
    initials: 'Jo',
    ringColor: '#FCAF45',
  },
  {
    id: '5',
    username: 'Shui',
    avatarColor: '#B5453D',
    initials: 'S',
    ringColor: '#D300C5',
  },
  {
    id: '6',
    username: 'Marcus',
    avatarColor: '#1B4332',
    initials: 'M',
    ringColor: '#F77737',
  },
  {
    id: '7',
    username: 'Rosa',
    avatarColor: '#9D174D',
    initials: 'R',
    ringColor: '#FCAF45',
  },
];

function StoryItem({ story }: { story: Story }) {
  return (
    <Pressable
      style={styles.storyItem}
      accessibilityLabel={`${story.username}'s story${story.isLive ? ', live' : ''}`}
    >
      {/* Gradient ring */}
      <View style={[styles.ring, { borderColor: story.ringColor ?? '#E1306C' }]}>
        {/* Avatar circle */}
        <View style={[styles.avatar, { backgroundColor: story.avatarColor }]}>
          <Text style={styles.initials}>{story.initials}</Text>
        </View>
      </View>

      {/* LIVE badge */}
      {story.isLive && (
        <View style={styles.liveBadge}>
          <Text style={styles.liveText}>LIVE</Text>
        </View>
      )}

      {/* Username */}
      <Text style={styles.username} numberOfLines={1}>
        {story.username}
      </Text>
    </Pressable>
  );
}

export function StoriesRow() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {STORIES.map((story) => (
          <StoryItem key={story.id} story={story} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 0.5,
    borderBottomColor: '#EFEFEF',
  },
  scrollContent: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 14,
  },
  storyItem: {
    alignItems: 'center',
    width: 68,
    position: 'relative',
  },
  ring: {
    width: 66,
    height: 66,
    borderRadius: 33,
    borderWidth: 2.5,
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  initials: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  liveBadge: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#E1306C',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  liveText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  username: {
    fontSize: 11,
    color: '#262626',
    marginTop: 5,
    textAlign: 'center',
    width: '100%',
  },
});
