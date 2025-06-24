import React from 'react';
import {
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  StyleSheet,
  ViewStyle,
} from 'react-native';

type BlackKeyProps = {
  label?: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  selected?: boolean;
  isRoot?: boolean; // Optional prop to indicate if this key is the root note
};

export default function BlackKey({
  label,
  onPress,
  style,
  selected,
}: BlackKeyProps) {
  return (
    <TouchableOpacity
      style={[styles.blackKey, selected && styles.selectedKey, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {label ? <Text style={styles.label}>{label}</Text> : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  blackKey: {
    backgroundColor: '#111',
    borderColor: '#222',
    borderWidth: 1,
    borderRadius: 8,
    height: 80,
    width: 28,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: 2,
    position: 'absolute',
    zIndex: 2,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  label: {
    color: '#FFF',
    fontSize: 14,
    marginBottom: 8,
  },
  selectedKey: {
    backgroundColor: '#BBBBBB',
    borderWidth: 2,
    shadowColor: '#2563eb',
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
