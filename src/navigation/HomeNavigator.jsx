import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import BestSellersScreen from "../screens/BestSellertsScreen";
import JustArrivedScreen from "../screens/JustArrivedScreen";

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="BestSellersScreen" component={BestSellersScreen} />
      <Stack.Screen name="JustArrivedScreen" component={JustArrivedScreen} />
    </Stack.Navigator>
  );
}
