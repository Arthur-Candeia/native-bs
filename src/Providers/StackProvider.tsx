import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "@src/pages/HomeScreen";
import { TabProvider } from "./TabProvider";
import { MainContextProvider } from "@src/contexts/MainContext";
import { useFonts, OpenSans_500Medium, OpenSans_600SemiBold, OpenSans_800ExtraBold } from "@expo-google-fonts/open-sans";
import { PostScreen } from "@src/pages/PostScreen";


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
        <Stack.Navigator initialRouteName="homeScreen" screenOptions={{headerShown: false}}>
          <Stack.Screen name="homeScreen" component={HomeScreen}/>
          <Stack.Screen name="app" component={TabProvider}/>
          <Stack.Screen name="post" component={PostScreen}/>
        </Stack.Navigator>
      </MainContextProvider>
    </NavigationContainer>
  )
}