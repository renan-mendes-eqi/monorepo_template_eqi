import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigation from './src/routes';

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <NativeBaseProvider>
            <MainNavigation />
          </NativeBaseProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
