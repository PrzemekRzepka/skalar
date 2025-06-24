import React from 'react';
import { View, StyleSheet } from 'react-native';
import WhiteKey from '@keyboard/WhiteKey';
import BlackKey from '@keyboard/BlackKey';

const ALL_NOTES = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B',
];

const WHITE_NOTES = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

// Rotates an array so that it starts with the given note
function rotateArray<T>(arr: T[], start: string): T[] {
  const idx = arr.findIndex(n => n === start);
  if (idx === -1) return arr;
  return [...arr.slice(idx), ...arr.slice(0, idx)];
}

type KeyboardProps = {
  scaleNotes: string[];
  rootNote?: string;
  rotate?: boolean;
};

export default function Keyboard({
  scaleNotes,
  rootNote,
  rotate = true,
}: KeyboardProps) {
  // rotate the notes if needed
  const rotatedNotes =
    rotate && rootNote ? rotateArray(ALL_NOTES, rootNote) : ALL_NOTES;
  const rotatedWhiteNotes = rotatedNotes.filter(n => !n.includes('#'));

  // Prepare black keys with their positions relative to white keys
  const rotatedBlackKeys: { note: string; pos: number }[] = [];
  for (let i = 0; i < rotatedWhiteNotes.length; i++) {
    const currentWhite = rotatedWhiteNotes[i];
    const idx = rotatedNotes.findIndex(n => n === currentWhite);
    const maybeBlack = rotatedNotes[idx + 1];
    // If the next note is a black key, add it with its position
    if (maybeBlack && maybeBlack.includes('#')) {
      rotatedBlackKeys.push({
        note: maybeBlack,
        pos: i,
      });
    }
  }

  // Handle edge case: black key before the first white key
  const firstWhiteIdx = rotatedNotes.findIndex(n => n === rotatedWhiteNotes[0]);
  if (firstWhiteIdx > 0 && rotatedNotes[firstWhiteIdx - 1].includes('#')) {
    rotatedBlackKeys.unshift({
      note: rotatedNotes[firstWhiteIdx - 1],
      pos: -1,
    });
  }

  return (
    <View style={styles.keyboardContainer}>
      <View style={styles.whiteKeysRow}>
        {rotatedWhiteNotes.map(note => (
          <WhiteKey
            key={note}
            label={note}
            selected={scaleNotes.includes(note)}
            isRoot={rootNote === note}
          />
        ))}
      </View>
      <View style={styles.blackKeysRow} pointerEvents="box-none">
        {rotatedBlackKeys.map(({ note, pos }) => (
          <View
            key={note}
            style={[
              styles.blackKeyWrapper,
              { left: pos * 40 + 20 },
              // Make sure the black key is positioned correctly
              (pos < 0 || pos >= rotatedWhiteNotes.length - 1) && {
                opacity: 1,
              },
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
    width: WHITE_NOTES.length * 40,
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
    zIndex: 2,
  },
  blackKeyWrapper: {
    position: 'absolute',
    width: 30,
    height: 100,
  },
});
