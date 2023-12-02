import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { New } from "./pages/New";
import { Config } from "./pages/Config";
import { User } from "./pages/User";
import {Ionicons} from '@expo/vector-icons'
import { useFonts, OpenSans_500Medium, OpenSans_600SemiBold, OpenSans_800ExtraBold } from "@expo-google-fonts/open-sans";

const Tab = createBottomTabNavigator()

  function getIcon({name, color, size}: {name: any, color: string, size: number}) {
    return <Ionicons name={name} color={color} size={size} />
  }

export function TabProvider() {

  const [fontsLoaded] = useFonts({
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_800ExtraBold
  })

  if (!fontsLoaded) return null

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false, tabBarActiveTintColor: '#00aa80', tabBarStyle: {borderTopColor: 'transparent'}}}>
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarIcon: (props) => getIcon({name: 'home-outline', ...props})
          }}
        />
        <Tab.Screen name="Search" component={Search}
          options={{
            tabBarIcon: (props) => getIcon({name: 'search-outline', ...props})
          }}
        />
        <Tab.Screen name="New" component={New}
          options={{
            tabBarIcon: ({focused}) => getIcon({name: 'add', color: focused ? '#00ff80' : 'white', size: 35}),
            tabBarLabel: () => null,
            tabBarIconStyle: {backgroundColor: 'green', width: 50, borderRadius: 25, transform: [{translateY: -25}]}
          }}
        />
        <Tab.Screen name="Config" component={Config}
          options={{
            tabBarIcon: (props) => getIcon({name: 'settings-outline', ...props})
          }}
        />
        <Tab.Screen name="User" component={User}
          options={{
            tabBarIcon: (props) => getIcon({name: 'person-outline', ...props})
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}