import { FlatList, View } from 'react-native'
import { dataPosts } from '@src/utilities/dataPosts'
import { Post } from './Post'
import { home as styles } from '@styles'

export function Posts() {
  return (
      <FlatList style={{width: '100%', height: '100%'}} contentContainerStyle={{paddingTop: 40, paddingBottom: 30}} showsVerticalScrollIndicator={false} data={dataPosts} renderItem={({item, index}) => <Post item={item} index={index} styles={styles}/> } keyExtractor={(item, index) => `${index}`}/>
  )
}