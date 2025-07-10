import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { selectScales } from '@store/slices/favoritesScalesSlice';
import Keyboard from '@keyboard/Keyboard';
import { darkColors } from '@assets/Colors';

export default function FavoritesScreen() {
  const scales = useSelector(selectScales);

  return (
    <ScrollView style={styles.container}>
      {scales.map((scale, index) => (
        <View key={index} style={styles.scaleContainer}>
          <View style={styles.title}>
            <Text style={styles.text}>{scale.rootNote + ' '}</Text>
            <Text style={styles.text}>{scale.name}</Text>
          </View>
          <Keyboard scaleNotes={scale.scaleNotes} rootNote={scale.rootNote} />
        </View>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignSelf: 'center',
    width: '100%',
    backgroundColor: darkColors.background,
  },
  scaleContainer: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingLeft: '10%',
    paddingVertical: 14,
  },
  text: {
    color: darkColors.text,
    fontSize: 18,
  },
});
