import { View, StyleSheet, useWindowDimensions } from 'react-native';
import Colors from '../../constants/colors';

function Card({ children }) {
  const { width } = useWindowDimensions();

  const marginHorizontalDimension = width > 400 ? 100 : 24;
  return (
    <View
      style={[styles.card, { marginHorizontal: marginHorizontalDimension }]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    padding: 16,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    alignItems: 'center',
  },
});

export default Card;
