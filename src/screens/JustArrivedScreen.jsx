import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { parfums } from "../data/parfums";
import ParfumCard from "../components/ParfumCard";


export default function JustArrivedScreen({navigation}) {
    const latestItems = parfums.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const arrowPressHandler = () => {
        navigation.navigate("HomeScreen")
    }

    return (
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
                    <View style={{ gap: 10, padding: 20 }}>
                        <Text style={{ fontSize: 24, color: "#262825", fontWeight: "medium", alignItems: "center", textAlign: "center" }}>Best Sellers</Text>
                        <Text style={{ fontSize: 16, color: "#808080", alignItems: "center", textAlign: "center" }}>The Best Parfume Ever</Text>
                    </View>

                    {/* Just Arrived Section */}
                    <View style={{ gap: 15, padding: 10, marginBottom: 20, }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
                            {latestItems.map((item) => (
                                <View style={{ width: "48%", marginBottom: 20 }} key={item.id}>
                                    <ParfumCard {...item} />
                                </View>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}