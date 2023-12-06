import { StyleSheet } from 'react-native';
import { coolors, mixins } from './common';

export const user = StyleSheet.create({
  container: {
    ...mixins.container,
    marginTop: 20,
  },
  userInfosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 10,
    paddingRight: 30,
    paddingLeft: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: coolors.gray
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  strongInfo: {
    fontFamily: 'OpenSans_600SemiBold'
  },
  photosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 7,
    columnGap: 5.5,
    width: '100%',
    paddingVertical: 20
  },
  photos: {
    width: 50,
    height: 50,
    borderRadius: 5
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    marginTop: 24,
    paddingVertical: 7,
    paddingHorizontal: 15,
    backgroundColor: 'white'
  },
  postUserInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  postUserInfoImg: {
    borderWidth: 2,
    borderColor: coolors.green,
    borderRadius: 25,
  },
  postUserInfoName: {
    fontFamily: 'OpenSans_600SemiBold'
  },
  likesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 5,
    paddingHorizontal: 10
  },
  description: {
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 5,
    textAlign: 'justify'
  }
});
