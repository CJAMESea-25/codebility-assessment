import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native';

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
}

export function PrimaryButton({ label, onPress, style }: PrimaryButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed, style]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#E1306C',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});
