import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CountdownTimer from "../components/CountdownTimer";
import { useEffect, useState } from "react";
import ParfumCard from "../components/ParfumCard";
import { fetchPromoParfums } from "../api/parfumsApi";

export default function PromoScreen({ navigation }) {
    
    const arrowPressHandler = () => {
        navigation.goBack()
    };

    const [promoParfums, setPromoParfums] = useState([]);

    useEffect(() => {
        fetchPromoParfums()
            .then(result => {
                setPromoParfums(result.data)
            })
            .catch(err => {
                alert("Cannot fetch promo parfums")
            })
    }, []);

    // const parfumCardPressedHandler = (parfumId) => {
    //     navigation.navigate('DetailsScreen', { parfumId })
    // };

    const parfumCardPressedHandler = (parfumId) => {
        navigation.navigate("Home", {
            screen: "DetailsScreen",
            params: { parfumId },
        });
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
                <View style={{ gap: 15, padding: 5, }}>
                    <Text style={{ fontSize: 24, color: "#262825", fontWeight: "medium", alignItems: "center", textAlign: "center" }}>Promo Deals</Text>
                    <Text style={{ fontSize: 16, color: "#808080", alignItems: "center", textAlign: "center" }}>The Best Promo Deals</Text>
                    <CountdownTimer endDate={new Date(2026, 5, 10, 23, 59, 59)} />
                </View>

                {/* Promo Section */}
                <ScrollView style={{ gap: 15, padding: 10, marginBottom: 20, }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
                        {promoParfums.map((item) => (
                            <View style={{ width: "48%", marginBottom: 20 }} key={item.id}>
                                <ParfumCard {...item} onPress={parfumCardPressedHandler} />
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}