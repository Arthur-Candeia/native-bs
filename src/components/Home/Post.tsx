import { PostType } from '@src/interfaces/PostType'
import {View, Text, Image} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { useState } from 'react'

export function Post({item, styles, index}: {item: PostType, styles: any, index: number}) {
  
  const [isLiked, setIsLiked] = useState(false)

  function handleLike(state: boolean) {
    !state ? item.likes++ : item.likes--
    return !state
  }

  return (
    <View style={styles.post} key={index}>
      <View style={styles.postName}>
        <View style={styles.iconContainer}>
          <Ionicons size={20} color="black" name='person-outline'/>
        </View>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <Image source={{width: 50, height: 50, uri: item.photo}} style={styles.image}/>
      <View style={styles.likesContainer}>
        <View style={styles.likesContent}>
        <Ionicons size={25} color={isLiked ? "red" : "black"} name={isLiked ? 'heart' : 'heart-outline'} onPress={() => setIsLiked((current) => handleLike(current))}/>
          <Text>{item.likes} Curtidas</Text>
        </View>
        <View>
          <Ionicons size={20} color="black" name='send-outline' style={{transform: [{rotate: "-40deg"}]}}/>
        </View>
      </View>
      <View style={styles.description}>
        <Text style={{textAlign: 'justify'}}>
          {item.description}
        </Text>
      </View>
    </View>
  )
}