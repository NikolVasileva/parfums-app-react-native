import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { getParfumById } from "../data/parfums";
import BlackButton from "../components/BlackButton";

export default function DetailsScreen({
    route,
    navigation
}) {

    const { parfumId } = route.params;
    const parfum = getParfumById(parfumId)
    console.log('parfumId:', parfumId);


    const arrowPressHandler = () => {
        navigation.goBack()
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ backgroundColor: "#FBFBFB", flex: 1, }} >
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
                <ScrollView style={{ paddingHorizontal: 15, }}>
                    <View style={{ alignItems: "center", backgroundColor: "#F5F5F5", borderRadius: 20, }}>
                        <Image
                            source={{ uri: parfum.image }}
                            style={{ width: "100%", height: 300, }}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={{ paddingVertical: 15, gap: 10, }}>
                        <Text style={{ fontSize: 22, }}>{parfum.brand} {parfum.title}</Text>
                        <View style={{ flexDirection: "row", gap: 15 }}>
                            <Image source={require("../../assets/stars.png")}
                                style={{
                                    width: 110,
                                    height: 18,
                                }}
                            />
                            <Text style={{ fontSize: 16, }}>{parfum.rating}</Text>
                        </View>
                        <Text style={{ fontSize: 16, color: "#808080" }}>{parfum.description}</Text>
                        <Text style={{ fontSize: 16, color: "#808080", paddingTop: 15, }}>Price:</Text>
                        {parfum?.isPromo 
                        ?
                        <View>
                            <Text style={{ fontSize: 18, color: "#925076" }}>${parfum.promoPrice}</Text>
                            <Text style={{ fontSize: 16, color: "#262825", textDecorationLine: "line-through" }}>${parfum.price}</Text>
                        </View>
                        : 
                        <Text style={{ fontSize: 16, color: "#262825" }}>${parfum.price}</Text>
                        }
                    </View>
                </ScrollView>
                <View
                    style={{
                        width: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 20,
                        position: "static",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: 15,
                    }}
                >
                    <Image source={require("../../assets/favourite-icon.png")}
                        style={{
                            width: 25,
                            height: 25,
                        }}
                    />
                    <BlackButton title="Add to Cart" style={{ paddingHorizontal: 12, paddingVertical: 15, flex: 1, }} />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )

}