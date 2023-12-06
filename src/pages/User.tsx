import { useMainContext } from '@src/contexts/MainContext';
import {View, Text, ScrollView, Image, Dimensions, TouchableOpacity} from 'react-native';
import { userPosts } from '@src/utilities/dataPosts';
import { useNavigation } from '@react-navigation/native';
import { user as styles } from '@styles';

export function User() {
  const {name, photo} = useMainContext()
  const {width} = Dimensions.get('screen')
  const {navigate} = useNavigation<any>()
  const userData = [{qtd: 10, title: 'Publicações'}, {qtd: 395, title: 'Seguidores'}, {qtd: 0, title: 'Seguindo'}]

  function handleNavigate() {
    navigate('post', {teste: 'abcd'})
  }

  return (
    <View style={styles.container}>
      <View style={styles.userInfosContainer}>
        <Image source={{width: 100, height: 100, uri: photo}} style={{borderRadius: 50}}/>
        <View>
          <Text>@{name.toLocaleLowerCase().replace(/ /g, '_')}</Text>
          {userData.map((element, index) => (
            <View key={index} style={styles.info}>
                <Text style={styles.strongInfo}>{element.qtd}</Text>
                <Text>{element.title}</Text>
            </View>
          ))}
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.photosContainer} showsVerticalScrollIndicator={false}>
        {userPosts.map((element, index) => (
          <TouchableOpacity key={index} activeOpacity={0.8} onPress={handleNavigate}>
            <Image source={{width: width / 3.5, height: width / 3.5, uri: element.photo}} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}