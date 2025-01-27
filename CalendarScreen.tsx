import React from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarScreen() {
  return (
    <View>
      <Calendar
        onDayPress={(day: { dateString: any; }) => console.log('Selected date:', day.dateString)}
        markedDates={{
          '2025-01-25': { selected: true, marked: true, selectedColor: 'red' },
        }}
      />
    </View>
  );
}
