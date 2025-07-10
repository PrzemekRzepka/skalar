import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Keyboard from '@keyboard/Keyboard';
import { useDispatch } from 'react-redux';
import Scale, { addScale } from '@store/slices/favoritesScalesSlice';
import { darkColors } from '@assets/Colors';

const SELECT_ROOT_TEXT = 'Select Root Note';
const SELECT_SCALE_TEXT = 'Select scale';
const BUTTON_ADD_TEXT = 'Add to favorites';

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
  const [rootOpen, setRootOpen] = useState(false);
  const [scaleOpen, setScaleOpen] = useState(false);

  const [rootItems, setRootItems] = useState(
    NOTES.map((note, i) => ({ label: note, value: i })),
  );
  const [scaleItems, setScaleItems] = useState(
    Object.keys(SCALES).map(scale => ({ label: scale, value: scale })),
  );

  const scaleIntervals = SCALES[selectedScale];
  const rootNote = NOTES[selectedRoot];
  const scaleNotes = scaleIntervals.map(i => NOTES[(selectedRoot + i) % 12]);

  const dispatch = useDispatch();

  return (
    <View
      style={[styles.container, { backgroundColor: darkColors.background }]}
    >
      <Text style={styles.label}>Select Root Note:</Text>
      <DropDownPicker
        open={rootOpen}
        setOpen={setRootOpen}
        value={selectedRoot}
        setValue={val => setSelectedRoot(val)}
        items={rootItems}
        setItems={setRootItems}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
        textStyle={{ color: darkColors.pickerText }}
        placeholder={SELECT_ROOT_TEXT}
        listItemLabelStyle={{ color: darkColors.pickerText }}
        selectedItemLabelStyle={{ color: darkColors.accent }}
        theme="DARK"
        zIndex={3000}
        zIndexInverse={1000}
      />
      <Text style={styles.label}>Select Scale:</Text>
      <DropDownPicker
        open={scaleOpen}
        setOpen={setScaleOpen}
        value={selectedScale}
        setValue={val => setSelectedScale(val)}
        items={scaleItems}
        setItems={setScaleItems}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
        textStyle={{ color: darkColors.pickerText }}
        placeholder={SELECT_SCALE_TEXT}
        listItemLabelStyle={{ color: darkColors.pickerText }}
        selectedItemLabelStyle={{ color: darkColors.accent }}
        theme="DARK"
        zIndex={2000}
        zIndexInverse={2000}
      />
      <View style={styles.switchRow}>
        <Text style={styles.label}>From Root Note:</Text>
        <Switch
          value={rotate}
          onValueChange={value => setRotate(value)}
          trackColor={{
            false: darkColors.switchTrack,
            true: darkColors.accent,
          }}
          thumbColor={rotate ? darkColors.switchThumb : darkColors.pickerBg}
        />
      </View>
      <View style={styles.keyboardContainer}>
        <Keyboard scaleNotes={scaleNotes} rootNote={rootNote} rotate={rotate} />
      </View>
      <TouchableOpacity
        onPress={() => {
          dispatch(
            addScale({
              name: selectedScale,
              rootNote: rootNote,
              scaleNotes: scaleNotes,
            }),
          );
        }}
      >
        <Text style={styles.button}>{BUTTON_ADD_TEXT}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignSelf: 'center',
    width: '100%',
  },
  keyboardContainer: {
    width: '100%',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#F4F4F4',
  },
  dropdown: {
    backgroundColor: '#23262F',
    borderColor: '#2C2F38',
    marginBottom: 16,
  },
  dropdownContainer: {
    backgroundColor: '#23262F',
    borderColor: '#2C2F38',
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  button: {
    color: '#4F8EF7',
    fontSize: 16,
  },
});
