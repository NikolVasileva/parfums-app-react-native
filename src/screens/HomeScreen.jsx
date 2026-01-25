import { Image, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import BlackButton from "../components/BlackButton";

export default function HomeScreen({ style }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <ScrollView style={{ padding: 15 }}>
                    {/* Header Section */}
                    <View style={{ alignItems: "center" }}>
                        <Image source={require("../../assets/logo-icon.png")}
                            style={{
                                width: 33,
                                height: 35,
                                margin: 25,
                            }}
                        />
                    </View>

                    {/* Best Sellerts Section */}
                    <View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ gap: 10 }}>
                                <Text style={{ fontSize: 24, color: "#262825", fontWeight: "medium" }}>Best Sellers</Text>
                                <Text style={{ fontSize: 16, color: "#808080" }}>The Best Parfume Ever</Text>
                            </View>
                            <View style={{ width: 100 }}>
                                <BlackButton title="see all >" style={{ paddingHorizontal: 12, paddingVertical: 6 }} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
