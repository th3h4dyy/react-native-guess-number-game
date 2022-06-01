import { View, Image, Text, StyleSheet, useWindowDimensions } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const {width, height} = useWindowDimensions();
  const widthImageContainer = width < 400 ? 300 : 150;
  const heightImageContainer = height > 400 ? 300 : 150;
  const borderRadiusImageContainer = width < 400 ? 150 : 75
  const marginImageContainer = width < 400 ? 34 : 18;
  const summaryTextDimension = width > 400 ? 18 : 24;
  
  return (
    <View style={styles.rootContainer}>
      <Title>GAME IS OVER!</Title>
      <View style={[styles.imageContainer, {width: widthImageContainer, height: heightImageContainer, borderRadius: borderRadiusImageContainer, margin: marginImageContainer}]}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={[styles.summaryText, {fontSize: summaryTextDimension}]}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
        rounds to guess the number
        <Text style={styles.highlight}> {userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start A New Game</PrimaryButton>
    </View>
  );
}



const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});

export default GameOverScreen;
