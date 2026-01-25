import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-web";

export default function HomeScreen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <ScrollView >
                    <View style={{alignItems: "center"}}>
                    <Image source={require("../../assets/logo-icon.png")}
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
    );
}
