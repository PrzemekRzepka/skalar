import React from 'react';
import {
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  StyleSheet,
  ViewStyle,
} from 'react-native';

type WhiteKeyProps = {
  label?: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  selected?: boolean;
  isRoot?: boolean; // Optional prop to indicate if this key is the root note
};

export default function WhiteKey({
  label,
  onPress,
  style,
  selected,
  isRoot = false,
}: WhiteKeyProps) {
  return (
    <TouchableOpacity
      style={[
        styles.whiteKey,
        selected && styles.selectedKey,
        isRoot && styles.rootNote,
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  whiteKey: {
    backgroundColor: '#fff',
    borderColor: '#d1d5db',
    borderWidth: 1,
    borderRadius: 8,
    height: 120,
    width: 40,
    justifyContent: 'flex-end',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  label: {
    color: '#1f2937',
    fontSize: 16,
    marginBottom: 8,
  },
  selectedKey: {
    backgroundColor: '#ACACAC',
    borderWidth: 2,
    shadowColor: '#2563eb',
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  rootNote: {
    backgroundColor: '#FBBF24',
    borderColor: '#F59E0B',
    borderWidth: 2,
    shadowColor: '#F59E0B',
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
