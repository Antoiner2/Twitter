import { getDefaultNormalizer } from "@testing-library/react-native";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.container}>
        <Image
          style={styles.Image}
          source={require("../assets/home-image.jpg")}
        />
        <Text style={styles.title}>Welcome to Locapic</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("TabNavigator")}
        >
          <TextInput style={styles.input} placeholder="Nickname" />
        </TouchableOpacity>

        <Text style={styles.textButton}> </Text>
        <Button
          style={styles.btn}
          title="Go to Map"
          onPress={() => navigation.navigate("TabNavigator")}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,170,11,04)",
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    width: 450,
    height: 450,
  },
  title: {
    width: "80%",
    fontSize: 38,
    fontWeight: "600",
  },
  input: {
    width: "80%",
    marginTop: 25,
    borderBottomColor: "#EC6E5B",
    borderBottomWidth: 1,
    fontSize: 20,
  },
  btn: {
    width: "80%",
    marginTop: 25,
    fontSize: 20,
    backgroundColor: "orange",
    borderRadius: 10,
  },
  textButton: {
    color: "#ffffff",
    height: 30,
    fontWeight: "600",
    fontSize: 16,
  },
});
