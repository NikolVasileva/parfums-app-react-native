import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
// import { parfums } from "../data/parfums";
import ParfumCard from "../components/ParfumCard";
import { useEffect, useState } from "react";
import { fetchBestSellersParfums } from "../api/parfumsApi";


export default function BestSellersScreen({ navigation }) {
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(() => {
        fetchBestSellersParfums()
        .then(result => {
            setBestSellers(result.data)
        })
        .catch(err => {
            alert("Cannot fetch all best sellers parfums")
        })
    }, [])

    // const bestSellers = parfums.filter(item => item.isBestSeller);

    const arrowPressHandler = () => {
        navigation.goBack()
    };

    const parfumCardPressedHandler = (parfumId) => {
        navigation.navigate('DetailsScreen', { parfumId })
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ backgroundColor: "#FBFBFB", flex: 1 }} >
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
                <ScrollView style={{ paddingHorizontal: 10, }}>
                    <View style={{ gap: 15, padding: 5 }}>
                        <Text style={{ fontSize: 24, color: "#262825", fontWeight: "medium", alignItems: "center", textAlign: "center" }}>Best Sellers</Text>
                        <Text style={{ fontSize: 16, color: "#808080", alignItems: "center", textAlign: "center" }}>The Best Parfume Ever</Text>
                    </View>

                    {/* Best Sellerts Section */}
                    <View style={{ gap: 15, padding: 10, marginBottom: 20, }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
                            {bestSellers.map((item) => (
                                <View style={{ width: "48%", marginBottom: 20 }} key={item.id}>
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