import { View, Text, TextInput, TouchableOpacity, Alert, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { useMainContext } from "@src/contexts/MainContext"
import { dataPhotos } from "@src/utilities/dataPhotos"
import { homeScreen as styles } from "@styles"

export function HomeScreen() {
  const navigation = useNavigation<any>()
  const {setName, setPhoto} = useMainContext()
  const [inputName, setInputName] = useState('')
  const [photos, setPhotos] = useState(dataPhotos)

  function goApp() {
    if (inputName.trim().length < 3) return Alert.alert('Campo Inválido', 'Preencha seu nome para continuar!')
    if (photos.length !== 1) return Alert.alert('Campo Inválido', 'Escolha uma foto para continuar!')
    setName(inputName)
    setPhoto(() => photos[0])
    navigation.reset({index: 0, routes: [{name: 'app'}]})
  }

  function setImg(element: string) {
    if (photos.length === 1) return setPhotos(dataPhotos)
    setPhotos([element])
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
      <Text style={styles.label}>Escolha uma foto de perfil</Text>
      <View style={styles.photosContainer}>
        {photos.map((element, index) => (
          <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => setImg(element)}>
            <Image source={{width: 50, height: 50, uri: element}} style={styles.photos}/>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={styles.button} onPress={goApp}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  )
}