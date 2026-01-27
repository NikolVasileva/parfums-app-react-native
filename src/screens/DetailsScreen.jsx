import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function DetailsScreen({
    route,
    navigation
}) {

    const { parfumId } = route.params;

    const arrowPressHandler = () => {
        navigation.goBack()
    };

    return(
        <SafeAreaProvider>
            <SafeAreaView style={{ backgroundColor: "#FBFBFB" }} >
                <ScrollView style={{ padding: 15, }}>
                    {/* Header Section */}
                    <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                        <Pressable onPress={arrowPressHandler}>
                            <Image source={require("../../assets/arrow.png")}
                                style={{
                                    width: 33,
                                    height: 35,
                                    margin: 25,
                                }}
                            />
                        </Pressable>
                        <Image source={require("../../assets/logo-icon.png")}
                            style={{
                                width: 33,
                                height: 35,
                                margin: 25,
                            }}
                        />
                        <Image source={require("../../assets/share.png")}
                            style={{
                                width: 33,
                                height: 35,
                                margin: 25,
                            }}
                        />
                    </View>

                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}