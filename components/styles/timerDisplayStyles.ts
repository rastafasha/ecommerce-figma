

import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 40) / 2;

const timerDisplayStyles = StyleSheet.create({
  curvedBackground: {
    height: 120,
    backgroundColor: '#0066FF',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    marginBottom: -40,
    paddingTop: 10,
    paddingRight: 20,
    alignItems: 'flex-end',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timerBox: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
  },
  timerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});





export default timerDisplayStyles;
