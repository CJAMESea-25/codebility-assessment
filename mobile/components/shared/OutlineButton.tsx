import React from 'react';
import { Pressable, Text, View, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons as _Ionicons } from '@expo/vector-icons';

const Ionicons = _Ionicons as any;

interface OutlineButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
}

export function OutlineButton({ label, onPress, style }: OutlineButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed, style]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
    >
      <View style={styles.content}>
        <Ionicons name="logo-facebook" size={22} color="#1877F2" />
        <Text style={styles.text}>{label}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DBDBDB',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  pressed: {
    opacity: 0.7,
    backgroundColor: '#F8F8F8',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    color: '#E1306C',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});
