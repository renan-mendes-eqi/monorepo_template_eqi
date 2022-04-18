import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import Routes from './src/routes';

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
});

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safe}>
          <NativeBaseProvider>
            <Routes />
          </NativeBaseProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
