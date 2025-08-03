import { UserStats } from "@/data/FocusStats";
import { StyleSheet, Text, View } from "react-native";
  
  export const SuggestionBoard = ({userStats}:{userStats: UserStats}) => {
    console.log(userStats == null);
    if (userStats == null) return <View></View>;
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

  const styles = StyleSheet.create({
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
});