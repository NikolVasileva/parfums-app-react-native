import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeInnerNavigator from "./HomeInnerNavigator.jsx";

export default function RootNavigator() {
    const Tabs = createBottomTabNavigator()

    return(
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={HomeInnerNavigator} />
        </Tabs.Navigator>
    )
}