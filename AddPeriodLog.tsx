import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AddPeriodLog() {
  return (
    <View style={styles.container}>
      <Text>Add Period Log</Text>
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
