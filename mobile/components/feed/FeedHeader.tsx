import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons as _Ionicons } from '@expo/vector-icons';

const Ionicons = _Ionicons as any;

export function FeedHeader() {
  return (
    <View style={styles.header}>
      {/* Left: Camera icon */}
      <Pressable
        style={({ pressed }) => [pressed && styles.iconPressed]}
        accessibilityLabel="Open camera"
      >
        <Ionicons name="camera-outline" size={28} color="#262626" />
      </Pressable>

      {/* Center: Instagram wordmark */}
      <Text style={styles.logo} accessibilityRole="header">
        Instagram
      </Text>

      {/* Right: Reels + DM */}
      <View style={styles.rightIcons}>
        <Pressable
          style={({ pressed }) => [pressed && styles.iconPressed]}
          accessibilityLabel="Watch reels"
        >
          <Ionicons name="play-circle-outline" size={27} color="#262626" />
        </Pressable>

        {/* DM icon with notification dot */}
        <Pressable
          style={({ pressed }) => [styles.dmWrapper, pressed && styles.iconPressed]}
          accessibilityLabel="Open direct messages"
        >
          <Ionicons name="paper-plane-outline" size={26} color="#262626" />
          <View style={styles.notifDot} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 0.5,
    borderBottomColor: '#EFEFEF',
  },
  logo: {
    fontSize: 28,
    color: '#000000',
    fontFamily: 'DancingScript_700Bold',
    letterSpacing: -0.5,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  dmWrapper: {
    position: 'relative',
  },
  notifDot: {
    position: 'absolute',
    top: -1,
    right: -2,
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#FF3040',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  iconPressed: {
    opacity: 0.5,
  },
});
