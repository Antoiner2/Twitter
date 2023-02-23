import { View } from "react-native";
import { Image, StyleSheet } from "react-native";
export default function MapScreen({ navigation }) {
  return (
    <View>
      <Image style={styles.Image} source={require("../assets/map.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  Image: {
    width: 450,
    height: 850,
  },
});
