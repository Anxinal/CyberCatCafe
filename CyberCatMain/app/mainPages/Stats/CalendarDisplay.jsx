import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Calendar } from 'react-native-calendars';
import { UserStats } from '@/data/FocusStats';

// Initialise the userStats in Screen.jsx
export default function CalendarDisplay({userStats}) {


  useEffect(() => {
    
  },[]);

  return (
    <View>
      <Text>CalendarDisplay</Text>
      <Calendar
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={userStats.startDate}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={userStats.currentDate}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={day => {
          console.log('selected day', day);
        }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={day => {
            console.log('selected day', day);
        }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
         monthFormat={'yyyy MM'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={month => {
            console.log('month changed', month);
        }}
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={true}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
  firstDay={1}
  // Hide day names. Default = false
  onPressArrowLeft={subtractMonth => subtractMonth()}
  // Handler which gets executed when press arrow icon right. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}
  // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
  disableAllTouchEventsForDisabledDays={true}
  // Replace default month and year title with custom one. the function receive a date as parameter
  renderHeader={date => {
    /*Return JSX*/
  }}
  // Enable the option to swipe between months. Default = false
  enableSwipeMonths={true}
/>
    </View>
  )
}

const styles = StyleSheet.create({})
