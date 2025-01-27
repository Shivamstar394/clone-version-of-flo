import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './src/screens/AuthScreen.tsx'; // Ensure this path is correct and the file exists
import HomeScreen from './src/screens/HomeScreen.tsx';
import PeriodCalendar from './src/screens/PeriodCalendar.tsx';
import AddPeriodLog from './src/screens/AddPeriodLog.tsx';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthScreen">
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{ title: 'Login / Sign Up' }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="PeriodCalendar"
          component={PeriodCalendar}
          options={{ title: 'Period Calendar' }}
        />
        <Stack.Screen
          name="AddPeriodLog"
          component={AddPeriodLog}
          options={{ title: 'Add Period Log' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
