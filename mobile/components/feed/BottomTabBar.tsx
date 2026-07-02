import React from 'react';
import { View, Pressable, StyleSheet, Platform } from 'react-native';
import { Ionicons as _Ionicons } from '@expo/vector-icons';

const Ionicons = _Ionicons as any;

interface TabItem {
  name: string;
  icon: keyof typeof _Ionicons.glyphMap;
  activeIcon: keyof typeof _Ionicons.glyphMap;
  label: string;
}

const TABS: TabItem[] = [
  { name: 'home', icon: 'home-outline', activeIcon: 'home', label: 'Home' },
  { name: 'search', icon: 'search-outline', activeIcon: 'search', label: 'Search' },
  { name: 'add', icon: 'add-circle-outline', activeIcon: 'add-circle', label: 'Create' },
  { name: 'heart', icon: 'heart-outline', activeIcon: 'heart', label: 'Activity' },
  { name: 'profile', icon: 'person-circle-outline', activeIcon: 'person-circle', label: 'Profile' },
];

interface BottomTabBarProps {
  activeTab?: string;
  onTabPress?: (tabName: string) => void;
}

export function BottomTabBar({ activeTab = 'home', onTabPress }: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {TABS.map((tab) => {
        const isActive = activeTab === tab.name;
        return (
          <Pressable
            key={tab.name}
            style={({ pressed }) => [styles.tab, pressed && styles.tabPressed]}
            onPress={() => onTabPress?.(tab.name)}
            accessibilityRole="tab"
            accessibilityLabel={tab.label}
            accessibilityState={{ selected: isActive }}
          >
            <Ionicons
              name={isActive ? tab.activeIcon : tab.icon}
              size={tab.name === 'add' ? 32 : 27}
              color={isActive ? '#262626' : '#262626'}
            />
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0.5,
    borderTopColor: '#DBDBDB',
    paddingBottom: Platform.OS === 'ios' ? 20 : 8,
    paddingTop: 10,
    paddingHorizontal: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  tabPressed: {
    opacity: 0.4,
  },
});
