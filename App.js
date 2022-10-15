import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './screens/Welcome'
import Nav from './components/Nav'

import Home from './pages/Home';

import Start from './screens/Start.jsx'
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="yes" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

