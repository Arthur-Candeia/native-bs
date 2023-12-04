import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "@src/pages/HomeScreen";
import { TabProvider } from "./TabProvider";
import { MainContextProvider } from "@src/contexts/MainContext";
import { useFonts, OpenSans_500Medium, OpenSans_600SemiBold, OpenSans_800ExtraBold } from "@expo-google-fonts/open-sans";


const Stack = createStackNavigator()

export function StackProvider() {

  const [fontsLoaded] = useFonts({
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_800ExtraBold
  })

  if (!fontsLoaded) return null

  return (
    <NavigationContainer>
      <MainContextProvider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeScreen" component={HomeScreen}/>
          <Stack.Screen name="app" component={TabProvider}/>
        </Stack.Navigator>
      </MainContextProvider>
    </NavigationContainer>
  )
}