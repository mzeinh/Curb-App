import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import HomeScreen from './screens/HomeScreen.js';
import SearchScreen from './screens/SearchScreen.js';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='SearchScreen'
            component={SearchScreen}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />

    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


