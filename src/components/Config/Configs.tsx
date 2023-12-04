import {View, Text} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { dataConfigs } from '@src/utilities/dataConfigs'
import { config as styles } from '@styles'


export function Configs() {
  return (
    <View style={styles.configs}>
      {dataConfigs.map((element: {name: string, icon: any}, index) => (
        <View key={index} style={styles.config}>

          <View style={styles.iconContainer}>
            <Ionicons size={18} name={element.icon} />
          </View>

          <Text style={styles.configName}>{element.name}</Text>
        </View>
      ))}
    </View>
  )
}