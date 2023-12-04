import { StyleSheet } from 'react-native';
import { coolors, mixins } from './common';

export const config = StyleSheet.create({
  container: {
    ...mixins.container,
  },
  title: {
    width: '100%',
    fontSize: 28,
    fontFamily: 'OpenSans_800ExtraBold',
    textAlign: 'left',
  },
  configs: {
    width: '100%',
    marginTop: 20
  },
  config: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderBlockColor: coolors.gray,
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderRadius: 4
  },
  iconContainer: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15
  },
  configName: {
    fontSize: 16,
    fontFamily: 'OpenSans_600SemiBold',
  }
});
