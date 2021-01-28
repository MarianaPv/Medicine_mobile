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
import { ScrollView } from "react-native-gesture-handler";

function State() {
  return (
    <View styles={styles.container}>
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
        Mi Estado
      </Text>

      <Text
        style={{
          fontFamily: "Roboto_400Regular",
          fontSize: 15,
          marginBottom: 30,
          marginTop: 20,
          marginLeft: 20,
          width: 380,
          color: "gray",
        }}
      >
        Ayúdanos a mejorar tu experiencia, actualizando los siguientes datos.
      </Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={styles.normalText}>Tu Peso:</Text>
        <TextInput
          id="peso"
          name="peso"
          autoFocus
          style={styles.textInput}
        ></TextInput>
      </View>

      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={styles.normalText}>Presión arterial:</Text>
        <TextInput
          id="pression"
          name="pression"
          autoFocus
          style={styles.textInput}
        ></TextInput>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Text style={styles.normalText}>Nivel de Azúcar:</Text>
        <TextInput
          id="sat"
          name="sat"
          autoFocus
          style={styles.textInput}
        ></TextInput>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Text style={styles.normalText}>Temperatura:</Text>
        <TextInput
          id="sat"
          name="sat"
          autoFocus
          style={styles.textInput}
        ></TextInput>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          borderBottomColor: "lightgray",
          borderBottomWidth: 0.57,
        }}
      >
        <Text style={styles.normalText}>Saturación de oxígeno:</Text>
        <TextInput
          id="sat"
          name="sat"
          autoFocus
          style={styles.textInput}
        ></TextInput>
      </View>

      <Text style={styles.normalText2}>Síntomas</Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ display: "flex", flexDirection: "row" }}
      >
        <TouchableOpacity
          style={{ marginLeft: 20, marginRight: 15, width: 70 }}
        >
          <ImageBackground
            source={require("./icon1-1.png")}
            style={styles.icon}
          ></ImageBackground>

          <Text style={styles.iconText}>Estoy bien</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable}>
          <ImageBackground
            source={require("./icon2-1.png")}
            style={styles.icon}
          ></ImageBackground>

          <Text style={styles.iconText}>Dolor de cabeza</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable}>
          <ImageBackground
            source={require("./icon3-1.png")}
            style={styles.icon}
          ></ImageBackground>

          <Text style={styles.iconText}>
            Cambios en la visión (borrosa/doble)
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable}>
          <ImageBackground
            source={require("./icon4-1.png")}
            style={styles.icon}
          ></ImageBackground>

          <Text style={styles.iconText}>Cambios repentinos de peso</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable}>
          <ImageBackground
            source={require("./icon5-1.png")}
            style={styles.icon}
          ></ImageBackground>

          <Text style={styles.iconText}>Náuseas o vómitos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable}>
          <ImageBackground
            source={require("./icon6-2.png")}
            style={styles.icon}
          ></ImageBackground>

          <Text style={styles.iconText}>Dolor de estómago</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable}>
          <ImageBackground
            source={require("./icon7-1.png")}
            style={styles.icon}
          ></ImageBackground>

          <Text style={styles.iconText}>Poca orina por vez</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default State;

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

  normalText: {
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    marginBottom: 30,
    marginLeft: 20,
    color: "#0a4c66",
  },

  normalText2: {
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    marginBottom: 30,
    marginTop: 20,
    marginLeft: 20,
    color: "#0a4c66",
  },

  textInput: {
    width: 90,
    marginLeft: 20,
    borderColor: "lightgray",
    borderWidth: 1.5,
    borderRadius: 8,
    paddingLeft: 10,
    fontFamily: "Jost_400Regular",
    fontSize: 15,
    marginBottom: 20,
  },

  icon: {
    width: 70,
    height: 70,
    marginRight: 5,
    overflow: "hidden",
  },

  iconText: {
    fontFamily: "Roboto_400Regular",
    color: "gray",
    fontSize: 12,
    width: 70,
    textAlign: "center",
  },

  touchable: { marginRight: 15, width: 70 },
});
