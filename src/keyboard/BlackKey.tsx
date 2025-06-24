import React from 'react';
import {
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  StyleSheet,
  ViewStyle,
  View,
} from 'react-native';

type BlackKeyProps = {
  label?: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  selected?: boolean;
  isRoot?: boolean;
};

export default function BlackKey({
  label,
  onPress,
  style,
  selected,
  isRoot = false,
}: BlackKeyProps) {
  return (
    <View style={[styles.background, isRoot && styles.rootBackground]}>
      <TouchableOpacity
        style={[
          styles.blackKey,
          selected && styles.selectedKey,
          isRoot && styles.rootNote,
          style,
        ]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        {label ? <Text style={styles.label}>{label}</Text> : null}
      </TouchableOpacity>
    </View>
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
  },
  label: {
    color: '#FFF',
    fontSize: 14,
    marginBottom: 8,
  },
  selectedKey: {
    backgroundColor: '#BBBBBB',
    borderWidth: 2,
  },
  rootNote: {
    backgroundColor: '#FBBF24',
    borderColor: '#F59E0B',
    borderWidth: 2,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000',
    borderRadius: 8,
    height: 80,
    width: 28,
  },
  rootBackground: {
    backgroundColor: '#F59E0B',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 8,
    height: 80,
    width: 28,
  },
});
