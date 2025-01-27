import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { supabase } from '../supabase';

import { NavigationProp } from '@react-navigation/native';

interface HomeScreenProps {
  navigation: NavigationProp<any>;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigation.reset({
        index: 0,
        routes: [{ name: 'AuthScreen' }],
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error signing out:', error.message);
      } else {
        console.error('Error signing out:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Flo Tracker!</Text>
      <Button
        title="View Period Calendar"
        onPress={() => navigation.navigate('PeriodCalendar')}
      />
      <Button
        title="Add Period Log"
        onPress={() => navigation.navigate('AddPeriodLog')}
        color="green"
      />
      <Button title="Log Out" onPress={handleSignOut} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});