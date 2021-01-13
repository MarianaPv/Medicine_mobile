import React, { useState, useEffect } from "react";
import { Actions } from "react-native-router-flux";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Animated, { Easing } from "react-native-reanimated";
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
import { AppLoading } from "expo";

function HomePage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [token, setToken] = useState("");

  const [fontsLoaded] = useFonts({
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
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const loginRes = await Axios.post(
        "http://192.168.1.29:3001/userapps/login",
        loginUser,
        config
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
      alert("El correo o contraseña digitados son incorrectos");
    }
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "Jost_600SemiBold",
          fontSize: 24,
          color: "#0a4c66",
          alignSelf: "center",
        }}
      >
        BIENVENIDO
      </Text>
      <View style={styles.container2}>
        <Text htmlFor="email" style={styles.textLabel}>
          Correo Electrónico
        </Text>
        <TextInput
          id="email"
          name="email"
          autoFocus
          style={styles.textInput}
        ></TextInput>
        <Text style={styles.textLabel}>Contraseña</Text>
        <TextInput
          name="password"
          type="password"
          id="password"
          textContentType="password"
          secureTextEntry={true}
          style={styles.textInput}
        ></TextInput>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.register3}>INGRESAR</Text>
        </TouchableOpacity>
        <Text htmlFor="email" style={styles.register}>
          ¿No eres miembro?
          <TouchableOpacity
            style={styles.button}
            onPress={() => Actions.register()}
          >
            <Text style={styles.register2}>Registrate Aquí</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6a9fb4",
    color: "whitesmoke",
    justifyContent: "center",
    fontFamily: "Jost_400Regular",
  },

  container2: {
    width: 300,
    alignSelf: "center",
    backgroundColor: "#6a9fb4",
    color: "whitesmoke",
    justifyContent: "center",
    fontFamily: "Jost_400Regular",
  },

  textLabel: {
    fontFamily: "Jost_400Regular",
    fontSize: 15,
    color: "whitesmoke",
    textAlign: "left",
    marginTop: 30,

    opacity: 0.7,
  },

  textInput: {
    height: 40,
    width: 300,
    borderRadius: 7,
    borderBottomColor: "whitesmoke",
    borderBottomWidth: 1.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    fontFamily: "Jost_400Regular",
    fontSize: 17,
    opacity: 0.7,
    alignItems: "center",
    alignSelf: "center",
  },

  register: {
    fontFamily: "Jost_400Regular",
    fontSize: 14,
    marginTop: 20,
    justifyContent: "center",
  },

  register2: {
    fontFamily: "Jost_600SemiBold",
    fontSize: 14,
    padding: 0,
    marginLeft: 10,
    color: "#044863",
    alignContent: "flex-end",
  },

  register3: {
    fontFamily: "Jost_600SemiBold",
    fontSize: 18,
    padding: 0,
    color: "whitesmoke",
    alignContent: "flex-end",
    alignSelf: "center",
  },

  button2: {
    backgroundColor: "#0a4c66",
    padding: 10,
    alignSelf: "flex-end",
    width: 300,
    marginTop: 30,
    alignSelf: "center",
  },

  button: {
    backgroundColor: "#6a9fb4",
    padding: 0,
    alignSelf: "flex-end",
  },
});
