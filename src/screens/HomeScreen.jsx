import { Image, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import BlackButton from "../components/BlackButton";
import { parfums } from "../data/parfums";
import ParfumCard from "../components/ParfumCard";

export default function HomeScreen({ navigation }) {
    const bestSellers = parfums.filter(item => item.isBestSeller).slice(0, 2);
    const latestItems = parfums.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 2);

    const bestSellerHandler = () => {
        navigation.navigate('BestSellersScreen');
    };

    const justArrivedHandler = () => {
        navigation.navigate('JustArrivedScreen');
    }

    const parfumCardPressedHandler = (parfumId) => {
        navigation.navigate('DetailsScreen', { parfumId })
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ backgroundColor: "#FBFBFB", flex: 1 }} >
                {/* Header Section */}
                <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                    <Image source={require("../../assets/menu.png")}
                        style={{
                            width: 25,
                            height: 25,
                            margin: 25,
                        }}
                    />
                    <Image source={require("../../assets/logo-icon.png")}
                        style={{
                            width: 33,
                            height: 35,
                            margin: 25,
                        }}
                    />
                    <Image source={require("../../assets/search.png")}
                        style={{
                            width: 33,
                            height: 35,
                            margin: 25,
                        }}
                    />
                </View>

                <ScrollView style={{ paddingHorizontal: 10, }}>
                    {/* Best Sellerts Section */}
                    <View style={{ gap: 15, padding: 10, marginBottom: 20, }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                            <View style={{ gap: 10 }}>
                                <Text style={{ fontSize: 24, color: "#262825", fontWeight: "medium" }}>Best Sellers</Text>
                                <Text style={{ fontSize: 16, color: "#808080" }}>The Best Parfume Ever</Text>
                            </View>
                            <View style={{ width: 100 }}>
                                <BlackButton title="see all >" style={{ paddingHorizontal: 12, paddingVertical: 6 }} onPress={bestSellerHandler} />
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            {bestSellers.map((item) => (
                                <View style={{ width: "48%" }} key={item.id}>
                                    <ParfumCard {...item} onPress={parfumCardPressedHandler} />
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Just Arrived Section */}
                    <View style={{ gap: 15, padding: 10, }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                            <View style={{ gap: 10 }}>
                                <Text style={{ fontSize: 24, color: "#262825", fontWeight: "medium" }}>Just Arrived</Text>
                                <Text style={{ fontSize: 16, color: "#808080" }}>Recently Arrived Parfums</Text>
                            </View>
                            <View style={{ width: 100 }}>
                                <BlackButton title="see all >" style={{ paddingHorizontal: 12, paddingVertical: 6 }} onPress={justArrivedHandler} />
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            {latestItems.map((item) => (
                                <View style={{ width: "48%" }} key={item.id}>
                                    <ParfumCard {...item} onPress={parfumCardPressedHandler} />
                                </View>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
