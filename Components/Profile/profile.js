import React from "react";
import { Actions } from "react-native-router-flux";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  BottomNavigation,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";

function Profile() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#0a4c66",
          fontSize: 30,
          fontFamily: "Roboto_700Bold",
          borderBottomColor: "lightgray",
          borderBottomWidth: 1.3,
          marginTop: 50,
          padding: 10,
          paddingLeft: 20,
        }}
      >
        Mi Perfil
      </Text>

      <ImageBackground
        imageStyle={{ borderRadius: 10 }}
        source={require("./teal.png")}
        style={{
          width: 390,
          height: 165,
          opacity: 0.85,
          borderRadius: 6,
          marginTop: 10,
          marginRight: 5,
          overflow: "hidden",
          marginLeft: 10,
        }}
      ></ImageBackground>

      <TouchableOpacity style={{ position: "absolute" }}>
        <ImageBackground
          imageStyle={{ borderRadius: 0.5 }}
          source={require("./camera2.png")}
          style={{
            width: 80,
            height: 80,
            marginTop: 250,
            marginLeft: 30,
            overflow: "hidden",
            position: "absolute",
          }}
        ></ImageBackground>
      </TouchableOpacity>

      <TextInput style={styles.textInput}></TextInput>

      <Text style={styles.normalText}>Información de usuario</Text>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
  textInput: {
    height: 30,
    width: 270,
    marginLeft: 20,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1.5,
    paddingLeft: 10,
    marginVertical: 5,
    backgroundColor: "transparent",
    fontFamily: "Jost_400Regular",
    fontSize: 17,
    marginBottom: 30,
    marginTop: 50,
  },

  normalText: {
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    marginBottom: 30,
    marginLeft: 20,
    color: "#0a4c66",
  },
});
