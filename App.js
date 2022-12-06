import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ConfigProvider } from './src/contexts/Config'

import Start from './src/views/start';
import Home from './src/views/home';
import Settings from './src/views/settings';

import globalStyles from './src/styles/global';


const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={globalStyles.container}>
      <StatusBar style='light' translucent />
      <ConfigProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            cardStyle: {
              backgroundColor: globalStyles.container.backgroundColor
            }
          }}>
            <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </ConfigProvider>
    </View>
  );
}


