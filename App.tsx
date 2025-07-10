import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import KeyboardScreen from './src/scales/KeyboardScreen';
import FavoriteScreen from './src/favoriteScales/FavoriteScalesScreen';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '@store/store';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            title: 'Skalar',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 24,
              color: '#fff',
            },
            tabBarStyle: {
              backgroundColor: '#16171c',
              borderTopWidth: 0,
              height: '10%',
            },
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#aaa',
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: '600',
            },
            headerStyle: { backgroundColor: '#16171c' },
            headerTintColor: '#fff',
          }}
        >
          <Tab.Screen name="Scales" component={KeyboardStack} />
          <Tab.Screen name="Favorites" component={FavoriteScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
