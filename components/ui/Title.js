import { Text, StyleSheet, Platform } from 'react-native';
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
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: Colors.titleColor,
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});

export default Title;
