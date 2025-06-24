import React from 'react';
import { View } from 'react-native';
import KeyboardScreen from './keyboard/KeyboardScreen';

function App(): React.JSX.Element {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <KeyboardScreen />
    </View>
  );
}

export default App;