import HomeNavigator from "./HomeInnerNavigator.jsx";
import StartScreen from "../screens/StartScreen.jsx";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function RootNavigator() {
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="HomeTabs" component={HomeNavigator} />
        </Stack.Navigator>
    )
}