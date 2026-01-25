import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import { Image } from "react-native";

const Tabs = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tabs.Navigator screenOptions={{ tabBarShowLabel: false, }}>
      <Tabs.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          headerShown: false, tabBarIcon: () => (
            <Image source={require("../../assets/home-icon.png")}
              style={{
                width: 25,
                height: 25,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Favourite"
        component={() => null}
        options={{
          headerShown: false, tabBarIcon: () => (
            <Image source={require("../../assets/favourite-icon.png")}
              style={{
                width: 25,
                height: 25,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        component={() => null}
        options={{
          headerShown: false, tabBarIcon: () => (
            <Image source={require("../../assets/cart-icon.png")}
              style={{
                width: 25,
                height: 25,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={() => null}
        options={{
          headerShown: false, tabBarIcon: () => (
            <Image source={require("../../assets/profile-icon.png")}
              style={{
                width: 25,
                height: 25,
              }}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
