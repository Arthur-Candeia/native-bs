import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { homeScreen as styles } from "@styles"
import { useState } from "react"
import { useMainContext } from "@src/contexts/MainContext"

export function HomeScreen() {
  const navigation = useNavigation<any>()
  const {setName} = useMainContext()
  const [inputName, setInputName] = useState('')

  function goApp() {
    if (inputName.trim().length < 3) return Alert.alert('Campo Inválido', 'Preencha seu nome para continuar!')
    setName(inputName)
    navigation.reset({index: 0, routes: [{name: 'app'}]})
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.titleGreen]}>Native Best Social</Text>
      <Text style={styles.label}>Como podemos te chamar?</Text>
      <TextInput
        value={inputName}
        onChangeText={setInputName}
        style={styles.input}
        selectionColor="#00ff80"
      />
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={styles.button} onPress={goApp}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  )
}