import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import React, { useEffect, useState } from 'react'
import { UserStats } from '../../../data/FocusStats'
import { CalendarDisplay } from './CalendarDisplay';
import { BarChartDisplay } from './BarChartDisplay';
import { useIsFocused } from '@react-navigation/native';
import { IconButton } from '../../../components/IconButton';
import { uploadSampleData } from './Testing';

// REFER TO USERSTATS for backend implementation



const Screen = () => {

  const [isCalendar, setIsCalendar] = useState(false);
  const [userStats, setUserStats] = useState(null);
  const isFocused = useIsFocused();

  async function initialise() {

    const stats = await UserStats.createUserStats();
    console.log("User Stats: ", stats.toString());
    setUserStats(stats);
  }


  useEffect(() => {
    initialise();
  }, [isFocused])
  // Refreshed each time the screen gains focus

  const ButtonPanels = () => {
    return (
      <View style={styles.buttonRow}>
        <IconButton iconName="BarChart" action={() => {
          setIsCalendar(false);
        }} />
        <IconButton iconName="Calendar" action={() => {
          setIsCalendar(true);
        }} />
      </View>
    );
  };

  const SuggestionBoard = () => {
    if (!userStats) return null;
    const suggestions = userStats.getSuggestionMessage();
    return (
      <View style={styles.board}>
        <Text style={styles.title}>Tips from cat:</Text>
        {suggestions.map((suggestion, index) => (
          <Text key={index} style={styles.suggestionText}>🐾{suggestion}</Text>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>User Statistics</Text>
      <ButtonPanels />
      {userStats !== null &&
        <View>
          {isCalendar ? <CalendarDisplay userStats={userStats} /> : <BarChartDisplay userStats={userStats} />}
          <SuggestionBoard />
        </View>
      }
    </SafeAreaView>

  )
}

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
  buttonRow: {

    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
    marginTop: 8,
  },
  board: {
    marginTop: 16,
    borderRadius: 8,
    backgroundColor: '#fef3c7',
    borderColor: '#facc15',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 16,
    marginTop: 16,
    marginHorizontal: 20,
    width: '80%',
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
  },
  suggestionText: {
    fontSize: 14,
    color: 'black',
    flexWrap: 'wrap',
  },


})