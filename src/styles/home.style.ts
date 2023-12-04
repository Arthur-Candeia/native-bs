import { StyleSheet } from 'react-native';
import { mixins } from './common';

export const home = StyleSheet.create({
  container: {
    ...mixins.container,
    gap: 10
  },
  post: {
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    minHeight: 200,
    marginBottom: 10,
    paddingTop: 5,
    paddingBottom: 20,
    backgroundColor: '#ececec',
    borderRadius: 5,
  },
  postName: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    gap: 7,
    paddingHorizontal: 5,
    paddingBottom: 5
  },
  iconContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15
  },
  name: {
    fontFamily:'OpenSans_600SemiBold',
  },
  image: {
    width: '100%',
    height: 300,
    objectFit: 'cover',
  },
  likesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 10
  },
  likesContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  description: {
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 5,
    textAlign: 'justify'
  }
});
