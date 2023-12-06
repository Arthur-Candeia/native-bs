import {View, Text} from 'react-native'
import { useRoute } from '@react-navigation/native'

export function PostScreen() {
  const router = useRoute<any>()
  const {teste} = router.params

  return (
    <View>
      <Text>{teste}</Text>
      <Text>{teste}</Text>
      <Text>{teste}</Text>
      <Text>{teste}</Text>
      <Text>{teste}</Text>
    </View>
  )
}