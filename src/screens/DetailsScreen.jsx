import { Text, View } from "react-native";

export default function DetailsScreen({route}) {

    const { parfumId } = route.params;

    return(
        <View>
            <Text>Test {parfumId}</Text>
        </View>
    )
}