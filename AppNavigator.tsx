import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../screens/AuthScreen';
import HomeScreen from '../screens/HomeScreen';
import PeriodCalendar from '../screens/PeriodCalendar';
import AddPeriodLog from '../screens/AddPeriodLog';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthScreen">
        <Stack.Screen name="AuthScreen" component={AuthScreen} options={{ title: 'Login / Sign Up' }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="PeriodCalendar" component={PeriodCalendar} options={{ title: 'Period Calendar' }} />
        <Stack.Screen name="AddPeriodLog" component={AddPeriodLog} options={{ title: 'Add Period Log' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
``