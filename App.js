import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font";
import { useFonts } from "expo-font";


import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {}


const Stack = createNativeStackNavigator();


export default function App() {


    const [fontsLoaded] = useFonts({
      INtBold: require("./assets/Inter-ExtraBold.ttf"),
      INMedium: require("./assets/Inter-Medium.ttf"),
      INsemi: require("./assets/Inter-SemiBold.ttf"),
    });
  
    if (!fontsLoaded) {
      return null;
    }
  
  
  
    return (
      
      <NavigationContainer>
        <StatusBar translucent={true} />
        <AuthProvider>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={"Home"}/>
        </Stack.Navigator>
        </AuthProvider>
      </NavigationContainer>
  
    );
  }