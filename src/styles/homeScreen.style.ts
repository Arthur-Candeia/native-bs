import { StyleSheet } from 'react-native';
import { coolors, mixins } from './common';

export const homeScreen = StyleSheet.create({
  container: {
    ...mixins.container,
    paddingTop: 40,
  },
  title: {
    width: '100%',
    fontSize: 20,
    fontFamily: 'OpenSans_600SemiBold',
    textAlign: 'left',
  },
  titleGreen: {
    fontSize: 28,
    fontFamily: 'OpenSans_800ExtraBold',
    color: coolors.mediumGreen,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1
  },
  label: {
    width: '100%',
    marginTop: 10,
    fontSize: 12,
    fontFamily: 'OpenSans_600SemiBold',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    height: 40,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: 'white',
    backgroundColor: coolors.darkGreen,
    borderRadius: 5
  }
});
