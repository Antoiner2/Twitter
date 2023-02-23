
import { useState } from "react";
import React from "react";
import {
  ImageBackground,
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";



export default function HomeScreen({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState("");

 

  const handleSubmit = () => {
    navigation.navigate("TabNavigator");
  };

  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={styles.imagecamera}
            source={require("../assets/camera.png")}
          />
          <Text style={styles.title}>FaceUp</Text>
          <View style={styles.whiteboard}>
          <TextInput
            placeholder="email"
            onChangeText={(value) => setEmail(value)}
            value={email}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() => handleSubmit()}
            style={styles.button}
            activeOpacity={0.8}>
          

            <Text style={styles.textButton}>Go to gallery</Text>
        
          </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 170, 11, 0.4)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  imagecamera: {
    width: "100%",
    height: "50%",
  },
  title: {
    width: "80%",
    fontSize: 38,
    fontWeight: "600",
    alignItems: 'center',
  },
  input: {
    width: "80%",
    marginTop: 25,
    borderBottomColor: "#F9DC8F",
    borderBottomWidth: 1,
    fontSize: 18,
  },
  button: {
    alignItems: "center",
    paddingTop: 8,
    width: "80%",
    marginTop: 30,
    backgroundColor: "#F9DC8F",
    borderRadius: 10,
    marginBottom: 80,
    alignContent: "center",
  },
  textButton: {
    color: "#ffffff",
    height: 30,
    fontWeight: "600",
    fontSize: 16,
  },
  whiteboard:{
    backgroundColor: 'white',
   width : '80%',
   height: '20%',
   alignItems: "center"

  }
});

