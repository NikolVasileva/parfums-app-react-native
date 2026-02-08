import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function PromoScreen() {
    const arrowPressHandler = () => {
        navigation.goBack()
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ backgroundColor: "#FBFBFB", flex: 1 }} >
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
                <View style={{ gap: 15, padding: 5 }}>
                    <Text style={{ fontSize: 24, color: "#262825", fontWeight: "medium", alignItems: "center", textAlign: "center" }}>Promo Deals</Text>
                    <Text style={{ fontSize: 16, color: "#808080", alignItems: "center", textAlign: "center" }}>The Best Parfume Ever</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}