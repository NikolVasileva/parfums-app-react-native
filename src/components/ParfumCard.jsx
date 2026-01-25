import { Image, View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

export default function ParfumCard({
    id,
    brand,
    title,
    image,
    price
}) {
    return (
        <TouchableOpacity>
            <View style={[styles.card]}>
                <Text style={[styles.brand]}>{brand}</Text>
                <Text style={[styles.title]}>{title}</Text>
                <Image
                    source={{ uri: image }}
                    style={styles.image}
                    resizeMode="contain"
                />
                <Text style={[styles.price]}>${price}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        // overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        padding: 10,
        width: "100%",
        height: 270,
    },
    brand: {
        fontSize: 16,
        color: '#262825',
        marginBottom: 5,
    },
    title: {
        fontSize: 16,
        color: '#262825',
        marginBottom: 15,
    },
    price: {
        fontSize: 14,
        color: '#7C7C7C',
        textAlign: "center",
        padding: 10,
    },
    image: {
        width: "100%",
        height: 150,
    },
}
)