import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PeriodCalendar() {
  return (
    <View style={styles.container}>
      <Text>Period Calendar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
