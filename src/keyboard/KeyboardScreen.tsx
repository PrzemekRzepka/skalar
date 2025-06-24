import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Keyboard from '@keyboard/Keyboard';

const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const SCALES = {
  Major: [0, 2, 4, 5, 7, 9, 11],
  Minor: [0, 2, 3, 5, 7, 8, 10],
  Dorian: [0, 2, 3, 5, 7, 9, 10],
  Phrygian: [0, 1, 3, 5, 7, 8, 10],
  Lydian: [0, 2, 4, 6, 7, 9, 11],
  Mixolydian: [0, 2, 4, 5, 7, 9, 10],
  Locrian: [0, 1, 3, 5, 6, 8, 10],
  HarmonicMinor: [0, 2, 3, 5, 7, 8, 11],
  MelodicMinor: [0, 2, 3, 5, 7, 9, 11],
  PentatonicMajor: [0, 2, 4, 7, 9],
  PentatonicMinor: [0, 3, 5, 7, 10],
  Blues: [0, 3, 5, 6, 7, 10],
};

export default function KeyboardScreen() {
  const [selectedScale, setSelectedScale] =
    useState<keyof typeof SCALES>('Major');
  const [selectedRoot, setSelectedRoot] = useState(0);
  const [rotate, setRotate] = useState(false);

  const scaleIntervals = SCALES[selectedScale];
  const rootNote = NOTES[selectedRoot];
  const scaleNotes = scaleIntervals.map(i => NOTES[(selectedRoot + i) % 12]);

  return (
    <View style={{ flex: 1, padding: 16, alignSelf: 'center' }}>
      <Text style={{ fontSize: 18, marginBottom: 8 }}>Select Root Note:</Text>
      <View style={{ marginBottom: 16 }}>
        <Picker
          selectedValue={selectedRoot}
          onValueChange={itemValue => setSelectedRoot(itemValue)}
        >
          {NOTES.map((note, i) => (
            <Picker.Item key={note} label={note} value={i} />
          ))}
        </Picker>
      </View>
      <Text style={{ fontSize: 18, marginBottom: 8 }}>Select Scale:</Text>
      <View style={{ marginBottom: 16 }}>
        <Picker
          selectedValue={selectedScale}
          onValueChange={itemValue =>
            setSelectedScale(itemValue as keyof typeof SCALES)
          }
        >
          {Object.keys(SCALES).map(scale => (
            <Picker.Item key={scale} label={scale} value={scale} />
          ))}
        </Picker>
      </View>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}
      >
        <Text style={{ fontSize: 18, marginRight: 8 }}>From Root Note:</Text>
        <Switch value={rotate} onValueChange={value => setRotate(value)} />
      </View>
      <Keyboard scaleNotes={scaleNotes} rootNote={rootNote} rotate={rotate} />
    </View>
  );
}
