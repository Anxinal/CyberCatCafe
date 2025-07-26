import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Calendar } from 'react-native-calendars';
import { UserStats } from '@/data/FocusStats';

// Initialise the userStats in Screen.jsx
export function CalendarDisplay({userStats}: Readonly<{userStats: UserStats}>) {

  const [selectedDate, setSelectedDate] = useState(0);
  const markedDayObject = userStats.days[selectedDate];
  const markedDates = userStats.getCalendarHighlightData();
  console.log(markedDates);
  useEffect(() => {
    
  },[]);
 
  return (
    <View>
      <Text>Summary </Text>
      <Calendar
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={userStats.startDate}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={userStats.currentDate}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={day => {
           setSelectedDate(Math.floor((Date.now() - new Date(day.timestamp).getTime()) / (1000 * 60 * 60 * 24)));
           
        }}
          markedDates={markedDates}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={day => {
            console.log('selected day', day);
        }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
         monthFormat={'yyyy - MM'}
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
  // Disable all touch events for disabled days. can be override with disableTouchEvent in selectedDates
  disableAllTouchEventsForDisabledDays={true}

  // Enable the option to swipe between months. Default = false
  enableSwipeMonths={true}
/>
<View style = {styles.container}>
  <Text style = {styles.summaryText}>{markedDayObject.print()} </Text>

</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(116, 3, 3, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    marginHorizontal: 'auto',
    elevation: 3,
    height: 55,
    borderRadius:5,
    paddingHorizontal: 5,
  },
  calendar: {
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 14,
    marginBottom: 10,
    color: 'white',
  }
})
