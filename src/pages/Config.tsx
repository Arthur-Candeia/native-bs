import {View, Text, ScrollView} from 'react-native';
import { config as styles } from '@styles';
import { Configs } from '@src/components/Config/Configs';

export function Config() {
  return (
    <View style={styles.container}>
      <ScrollView
      showsVerticalScrollIndicator={false}
      style={{width: '100%'}}
      contentContainerStyle={{paddingVertical: 20}}
      >
        <Text style={styles.title}>Configurações</Text>
        <Configs />
      </ScrollView>
    </View>
  )
}