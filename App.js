import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { getCity } from './api/api';
import 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import Stack from './navigation/Stack';
import { Provider } from 'react-redux';
import store from './src/utils/redux/store';

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack/>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
