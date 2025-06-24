import React from 'react';
import { View, StyleSheet } from 'react-native';
import WhiteKey from '@keyboard/WhiteKey';
import BlackKey from '@keyboard/BlackKey';

const NOTES = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const SHARP_NOTES = ['C#', 'D#', 'F#', 'G#', 'A#'];

type KeyboardProps = {
  scaleNotes: string[];
  rootNote?: string;
};

export default function Keyboard({ scaleNotes, rootNote }: KeyboardProps) {
  return (
    <View style={styles.keyboardContainer}>
      <View style={styles.whiteKeysRow}>
        {NOTES.map(note => (
          <WhiteKey
            key={note}
            label={note}
            selected={scaleNotes.includes(note)}
            isRoot={rootNote === note}
          />
        ))}
      </View>
      <View style={styles.blackKeysRow} pointerEvents="box-none">
        {SHARP_NOTES.map((note, i) => (
          <View
            key={i}
            style={[
              styles.blackKeyWrapper,
              { left: (i + (i < 2 ? 0 : 1) + 1) * 40 - 15 },
            ]}
          >
            <BlackKey
              label={note}
              selected={scaleNotes.includes(note)}
              isRoot={rootNote === note}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
    position: 'relative',
    width: NOTES.length * 40,
    height: 160,
  },
  whiteKeysRow: {
    flexDirection: 'row',
    zIndex: 1,
  },
  blackKeysRow: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 100,
    width: '100%',
    flexDirection: 'row',
    zIndex: 2,
  },
  blackKeyWrapper: {
    position: 'absolute',
    width: 30,
    height: 100,
  },
});
