import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function StartScreen({ navigation }) {
    const getStartedHandler = () => {
        navigation.replace('HomeTabs');
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.startContainer}>
                    <View>
                        <Image source={require("../../assets/parfum-logo.png")}
                            style={{
                                width: 123,
                                height: 82,
                                margin: 25,
                            }}
                        />
                    </View>
                    <View>
                        <Image source={require("../../assets/parfum-mockup.png")}
                            style={{
                                alignItems: "center",
                                width: 390,
                                height: 500,
                                resizeMode: "stretch",
                            }}
                        />
                    </View>
                    <View>
                        <Text style={{ width: 200, textAlign: "center" }}>Experience the Essence of Luxury Perfumes</Text>
                    </View>
                    <View>
                        <Pressable onPress={getStartedHandler}>
                            <View style={styles.blackButton}>
                                <Text style={{ color: "#fff", textAlign: "center" }}>Get Stared</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}

const styles = StyleSheet.create({
    startContainer: {
        alignItems: "center",
    },
    blackButton: {
        backgroundColor: "#262825",
        paddingHorizontal: 35,
        paddingVertical: 20,
        margin: 25,
        width: 300,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.45,
        shadowRadius: 4.5,
        elevation: 5,
    }
})