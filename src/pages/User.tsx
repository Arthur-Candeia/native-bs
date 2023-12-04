import { useMainContext } from '@src/contexts/MainContext';
import {View, Text} from 'react-native';

export function User() {
  const {name} = useMainContext()

  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}