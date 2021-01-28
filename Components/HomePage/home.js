import React, { useState, useEffect } from "react";
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

function HomePage() {
  return (
    <View styles={styles.container}>
      <ImageBackground
        source={require("./blue.png")}
        style={{
          width: 415,
          height: 165,
          alignItems: "center",
          justifyContent: "center",
          padding: 30,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontFamily: "Roboto_500Medium",
          }}
        >
          BIENVENIDO
        </Text>
      </ImageBackground>

      <TouchableOpacity
        style={styles.button3}
        onPress={() => Actions.push("estado")}
      >
        <Text style={styles.text}>MI ESTADO / TRATAMIENTO</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button3} onPress={() => Actions.stats()}>
        <Text style={styles.text}>ESTADÍSTICAS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button3} onPress={() => Actions.food()}>
        <Text style={styles.text}>ALIMENTACIÓN</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
    fontFamily: "Jost_400Regular",
  },

  button3: {
    padding: 10,
    alignSelf: "flex-end",
    width: 380,
    height: 70,
    marginTop: 30,
    alignSelf: "center",
    justifyContent: "center",
    borderBottomColor: "lightgray",
    borderBottomWidth: 1.3,
  },

  text: {
    color: "#6a9fb4",
    fontFamily: "Roboto_400Regular",
    fontSize: 20,
  },
});
