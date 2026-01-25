import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function StartScreen({ navigation }) {

    const { width, height } = Dimensions.get("window");

    const getStartedHandler = () => {
        navigation.navigate('HomeTabs');
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{backgroundColor: "#FFFFFF"}}>
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
                    <View style={{
                        width: width,
                        height: height * 0.60,
                        overflow: "hidden",
                    }}>
                        <Image source={require("../../assets/parfum-mockup.png")}
                            style={{
                                alignItems: "center",
                                width: "100%",
                                height: "100%",
                                resizeMode: "cover",
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

