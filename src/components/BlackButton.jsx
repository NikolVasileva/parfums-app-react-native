import { Pressable, Text, View } from "react-native"
import { StyleSheet } from "react-native"

export default function BlackButton({
    title,
    onPress,
    style
}) {
    return (
        <Pressable onPress={onPress} style={[styles.blackButton, style]}>
            <View>
                <Text style={{ color: "#fff", textAlign: "center" }}>{title}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    startContainer: {
        alignItems: "center",
    },
    blackButton: {
        backgroundColor: "#262825",
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.45,
        shadowRadius: 4.5,
        elevation: 5,
    }
})
