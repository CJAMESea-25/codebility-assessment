import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';
import { Ionicons as _Ionicons } from '@expo/vector-icons';

const Ionicons = _Ionicons as any;

interface PostCardProps {
  authorName: string;
  authorInitials: string;
  authorAvatarColor: string;
  isVerified?: boolean;
  flagEmoji?: string;
  timeAgo: string;
  bodyText: string;
  commentsCount: number;
  likesCount: number;
}

export function PostCard({
  authorName,
  authorInitials,
  authorAvatarColor,
  isVerified = false,
  flagEmoji,
  timeAgo,
  bodyText,
  commentsCount,
  likesCount,
}: PostCardProps) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
  };

  const handleComment = () => Alert.alert('Comment pressed');
  const handleShare = () => Alert.alert('Share pressed');
  const handleSend = () => Alert.alert('Send pressed');
  const handleMenu = () => Alert.alert('Options pressed');

  return (
    <View style={styles.card}>
      {/* Post Header */}
      <View style={styles.postHeader}>
        {/* Author avatar */}
        <View style={[styles.avatar, { backgroundColor: authorAvatarColor }]}>
          <Text style={styles.avatarInitials}>{authorInitials}</Text>
        </View>

        {/* Author info */}
        <View style={styles.authorInfo}>
          <View style={styles.authorNameRow}>
            <Text style={styles.authorName}>{authorName}</Text>

            {isVerified && (
              <Ionicons
                name="checkmark-circle"
                size={15}
                color="#3897F0"
                style={styles.verifiedIcon}
              />
            )}

            {flagEmoji && (
              <Text style={styles.flagEmoji}>{flagEmoji}</Text>
            )}
          </View>
          <Text style={styles.timeAgo}>{timeAgo}</Text>
        </View>

        {/* Menu icon */}
        <Pressable
          style={({ pressed }) => [styles.menuButton, pressed && styles.pressed]}
          onPress={handleMenu}
          accessibilityLabel="Post options"
        >
          <Text style={styles.menuDots}>···</Text>
        </Pressable>
      </View>

      {/* Post Body */}
      <Text style={styles.bodyText}>{bodyText}</Text>

      {/* Action Bar */}
      <View style={styles.actionBar}>
        <View style={styles.leftActions}>
          {/* Like */}
          <Pressable
            style={({ pressed }) => [styles.actionButton, pressed && styles.pressed]}
            onPress={handleLike}
            accessibilityLabel={liked ? 'Unlike post' : 'Like post'}
          >
            <Ionicons
              name={liked ? 'heart' : 'heart-outline'}
              size={26}
              color={liked ? '#E1306C' : '#262626'}
            />
          </Pressable>

          {/* Comment */}
          <Pressable
            style={({ pressed }) => [styles.actionButton, pressed && styles.pressed]}
            onPress={handleComment}
            accessibilityLabel="Comment on post"
          >
            <Ionicons name="chatbubble-outline" size={24} color="#262626" />
          </Pressable>

          {/* Share / Repost */}
          <Pressable
            style={({ pressed }) => [styles.actionButton, pressed && styles.pressed]}
            onPress={handleShare}
            accessibilityLabel="Share post"
          >
            <Ionicons name="repeat-outline" size={26} color="#262626" />
          </Pressable>

          {/* Send / DM */}
          <Pressable
            style={({ pressed }) => [styles.actionButton, pressed && styles.pressed]}
            onPress={handleSend}
            accessibilityLabel="Send post"
          >
            <Ionicons name="paper-plane-outline" size={24} color="#262626" />
          </Pressable>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <Text style={styles.statsText}>
          {commentsCount} comments · {likesCount.toLocaleString()} likes
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#EFEFEF',
  },

  // Header
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  avatarInitials: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  authorInfo: {
    flex: 1,
  },
  authorNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    flexWrap: 'wrap',
  },
  authorName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#262626',
  },
  verifiedIcon: {
    marginTop: 1,
  },
  flagEmoji: {
    fontSize: 14,
  },
  timeAgo: {
    fontSize: 12,
    color: '#8E8E8E',
    marginTop: 1,
  },
  menuButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  menuDots: {
    fontSize: 18,
    color: '#262626',
    letterSpacing: 1,
  },
  pressed: {
    opacity: 0.5,
  },

  // Body
  bodyText: {
    fontSize: 14,
    color: '#262626',
    lineHeight: 20,
    paddingHorizontal: 14,
    marginBottom: 12,
  },

  // Actions
  actionBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  leftActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  actionButton: {
    padding: 6,
  },

  // Stats
  statsRow: {
    paddingHorizontal: 14,
  },
  statsText: {
    fontSize: 13,
    color: '#8E8E8E',
  },
});
