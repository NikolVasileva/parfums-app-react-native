import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import { Image } from "react-native";
import { Entypo, MaterialCommunityIcons, FontAwesome, Feather, } from "@expo/vector-icons";
import PromoScreen from "../screens/PromoScreen";

const Tabs = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tabs.Navigator screenOptions={{ tabBarShowLabel: false,}}>
      {/* <Tabs.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          headerShown: false, tabBarIcon: ({focused, size, color}) => (
            <Entypo name={focused ? "home" : "home-outline"} size={size} color={color}/>
          ),
        }}
      /> */}
      <Tabs.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          headerShown: false, tabBarIcon: ({ focused, size }) => (
            focused ? <Entypo name="home" size={size} />
            : <MaterialCommunityIcons name="home-outline" size={30}/>
          ),
        }}
      />
      <Tabs.Screen
        name="Favourite"
        component={() => null}
        options={{
          headerShown: false, tabBarIcon: ({ focused, size }) => (
            <FontAwesome name={focused ? "heart" : "heart-o"} size={size}/>
          ),
        }}
      />
      <Tabs.Screen
        name="Promo"
        component={PromoScreen}
        options={{
          headerShown: false, tabBarIcon: ({ focused, size }) => (
            <MaterialCommunityIcons name={focused ? "label-percent" : "label-percent-outline"} size={30}/>
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
