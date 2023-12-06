import {View, TextInput} from 'react-native';
import { search as styles } from '@styles';
import { useDeferredValue, useState } from 'react';
import { Persons } from '@src/components/Search/Persons';

export function Search() {
  const [searchInput, setSearchInput] = useState('')
  const valueToSearch = useDeferredValue(searchInput)

  return (
    <View style={styles.container}>
      <TextInput 
        value={searchInput}
        onChangeText={setSearchInput}
        style={styles.input}
        selectionColor="#00ff80"
        placeholder='Buscar usuário'
      />
      <Persons valueToSearch={valueToSearch}/>
    </View>
  )
}