import React from 'react';
import {
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  StyleSheet,
  ViewStyle,
  View,
} from 'react-native';

type WhiteKeyProps = {
  label?: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  selected?: boolean;
  isRoot?: boolean;
};

export default function WhiteKey({
  label,
  onPress,
  style,
  selected,
  isRoot = false,
}: WhiteKeyProps) {
  return (
    <View style={[styles.background, isRoot && styles.rootBackground]}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  whiteKey: {
    left: 0.5,
    backgroundColor: '#fff',
    borderColor: '#d1d5db',
    borderWidth: 1,
    borderRadius: 8,
    height: 120,
    width: 40,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  label: {
    color: '#1f2937',
    fontSize: 16,
    marginBottom: 8,
  },
  selectedKey: {
    backgroundColor: '#ACACAC',
    borderWidth: 2,
    borderColor: '#1f2937',
  },
  rootNote: {
    backgroundColor: '#FBBF24',
    borderColor: '#F59E0B',
    borderWidth: 2,
  },
  background: {
    backgroundColor: '#d1d5db',
    borderRadius: 8,
    height: 120,
    width: 40,
  },
  rootBackground: {
    backgroundColor: '#F59E0B',
    borderRadius: 8,
    height: 120,
    width: 40,
  },
});
