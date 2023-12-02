import { StyleSheet } from 'react-native';

export const coolors = {
  white: '#e2e2e2',
  gray: '#2e2e2e',
  black: "#121212",
  red: '#ff0043',
  green: "#00ff80",
}

export const mixins = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 10,
    width: '100%',
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: coolors.white,
  }
})