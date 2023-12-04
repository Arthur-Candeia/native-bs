import { StyleSheet } from 'react-native';
import { mixins } from './common';

export const search = StyleSheet.create({
  container: {
    ...mixins.container,
    marginTop: 20,
  },
  input: {
    width: '100%',
    height: 40,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  persons: {
    width: '100%',
  },
  person: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  iconContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15
  },
});
