import {View, Text, ScrollView} from 'react-native';
import { dataPosts } from '@src/utilities/dataPosts';
import {Ionicons} from '@expo/vector-icons';
import { search as styles } from '@styles';

export function Persons({valueToSearch}: {valueToSearch: string}) {

  const personsResult = dataPosts.filter(({name}) => name.toLocaleLowerCase().includes(valueToSearch.toLocaleLowerCase()))

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.persons}
      contentContainerStyle={{paddingTop: 10}}
    >
      {personsResult.map((element, index) => (
        <View key={index} style={styles.person}>

          <View style={styles.iconContainer}>
            <Ionicons size={20} color="black" name='person-outline'/>
          </View>

          <Text>{element.name}</Text>
        </View>
      ))}
    </ScrollView>
  )
}