import {View, Text} from 'react-native';
import { home as styles } from '@styles';
import { Posts } from '@src/components/Home/Posts';
import { Post } from '@src/components/Home/Post';

export function Home() {
  return (
    <View style={styles.container}>
      <Posts />
    </View>
  )
}