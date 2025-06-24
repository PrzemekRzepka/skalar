import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import KeyboardScreen from './src/keyboard/KeyboardScreen';
import { View, Text } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function FavoritesScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Favorites</Text>
    </View>
  );
}

function KeyboardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Keyboard"
        component={KeyboardScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Scales" component={KeyboardStack} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
