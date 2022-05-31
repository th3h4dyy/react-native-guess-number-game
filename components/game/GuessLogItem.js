import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}># {roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: Colors.accent500,
    padding: 15,
    marginVertical: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  itemText: {
    fontFamily: 'open-sans',
  },
});

export default GuessLogItem;
