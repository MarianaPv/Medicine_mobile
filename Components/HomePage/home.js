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
  Jost_100Thin,
  Jost_200ExtraLight,
  Jost_300Light,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
  Jost_700Bold,
  Jost_800ExtraBold,
  Jost_900Black,
  Jost_100Thin_Italic,
  Jost_200ExtraLight_Italic,
  Jost_300Light_Italic,
  Jost_400Regular_Italic,
  Jost_500Medium_Italic,
  Jost_600SemiBold_Italic,
  Jost_700Bold_Italic,
  Jost_800ExtraBold_Italic,
  Jost_900Black_Italic,
} from "@expo-google-fonts/jost";

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
            fontSize: 20,
            fontFamily: "Jost_500Medium",
          }}
        >
          BIENVENIDO USUARIO
        </Text>
      </ImageBackground>

      <TouchableOpacity style={styles.button3} onPress={() => Actions.estado()}>
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
    fontFamily: "Jost_400Regular",
    fontSize: 18,
  },
});
