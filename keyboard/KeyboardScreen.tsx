import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Keyboard from './Keyboard';

// Note names for each semitone in an octave
const NOTES = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];

// Scales definition
const SCALES = {
  Major: [0, 2, 4, 5, 7, 9, 11],
  Minor: [0, 2, 3, 5, 7, 8, 10],
  // Add other scales as needed
};

export default function KeyboardScreen() {
  const [selectedScale, setSelectedScale] =
    useState<keyof typeof SCALES>('Major');
  const [selectedRoot, setSelectedRoot] = useState(0);
  const [octaves, setOctaves] = useState(2);

  const screenWidth = Dimensions.get('window').width - 32; // padding

  return (
    <Keyboard scaleNotes={['C', 'D', 'E', 'F#', 'G', 'A', 'B']} rootNote="C" />
  );
}
