import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'cairo',
    color: Colors.titleColor,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.titleColor,
    padding: 12,
  },
});

export default Title;
