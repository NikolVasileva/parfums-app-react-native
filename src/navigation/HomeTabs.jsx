import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";

const Tabs = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={HomeNavigator}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
}
