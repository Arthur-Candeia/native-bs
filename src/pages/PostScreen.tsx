import {View, Text, TouchableOpacity, Image, Dimensions, ScrollView} from 'react-native'
import { useRoute } from '@react-navigation/native'
import {Ionicons} from '@expo/vector-icons'
import { useMainContext } from '@src/contexts/MainContext'
import { useNavigation } from '@react-navigation/native'
import { user as styles } from '@styles'

export function PostScreen() {
  const router = useRoute<any>()
  const {photo: photoPost, likes, description} = router.params
  const {name, photo} = useMainContext()
  const navigation = useNavigation()
  const {width} = Dimensions.get('screen')

  return (
    <View>
      <View style={styles.postHeader}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
          <Ionicons size={25} name='arrow-back-outline' />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.postUserInfo}>
          <Image source={{width: 40, height: 40, uri: photo}} style={styles.postUserInfoImg}/>
          <Text style={styles.postUserInfoName}>@{name.toLocaleLowerCase().replace(/ /g, '_')}</Text>
        </View>
        <Image source={{width, height: width, uri: photoPost}} />
        <View style={styles.likesContainer}>
          <Text style={{paddingTop: 3}}>{likes} curtidas</Text>
          <Ionicons size={20} color="black" name='send-outline' style={{transform: [{rotate: "-40deg"}]}}/>
        </View>
        <Text style={styles.description}>
          {description}
        </Text>
      </ScrollView>
    </View>
  )
}