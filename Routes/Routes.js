import React from "react";
import { Router, Scene, Drawer } from "react-native-router-flux";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  BottomNavigation,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import SignIn from "../Components/SignIn/index";
import Register from "../Components/Register/register";
import Splash from "../assets/Splash";
import HomePage from "../Components/HomePage/home";
import Profile from "../Components/Profile/profile";
import State from "../Components/State/state";
import Stats from "../Components/Stats/stats";
import Food from "../Components/Food/food";

function Routes() {
  const HomeIcon = (props) => {
    let textColor = props.focused ? "#0a4c66" : "#999999";
    const settingImageUnfocused = require("./home.png");
    const settingImageFocused = require("./home2.png");
    let settingImage = props.focused
      ? settingImageFocused
      : settingImageUnfocused;
    let borderColor = props.focused ? "#0a4c66" : "#FFFFFF";
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderTopColor: borderColor,
          borderTopWidth: 3,
          padding: 15,
          width: 70,
        }}
      >
        <Image
          source={settingImage}
          style={{ width: 20, height: 20, marginTop: 7 }}
        />
        <Text
          style={{
            color: "#0a4c66",
            fontSize: 11,
            fontFamily: "Jost_400Regular",
            marginTop: 3,
            marginBottom: 4,
            width: 100,
            textAlign: "center",
          }}
        >
          Inicio
        </Text>
      </View>
    );
  };

  const HealthIcon = (props) => {
    let textColor = props.focused ? "#0a4c66" : "#999999";
    const settingImageUnfocused = require("./cardiogram.png");
    const settingImageFocused = require("./cardiogram2.png");
    let settingImage = props.focused
      ? settingImageFocused
      : settingImageUnfocused;
    let borderColor = props.focused ? "#0a4c66" : "#FFFFFF";
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderTopColor: borderColor,
          borderTopWidth: 3,
          padding: 15,
          width: 70,
        }}
      >
        <Image
          source={settingImage}
          style={{ width: 20, height: 20, marginTop: 7 }}
        />
        <Text
          style={{
            color: "#0a4c66",
            fontSize: 11,
            fontFamily: "Jost_400Regular",
            marginTop: 3,
            marginBottom: 4,
            width: 100,
            textAlign: "center",
          }}
        >
          Mi Estado
        </Text>
      </View>
    );
  };

  const StatsIcon = (props) => {
    let textColor = props.focused ? "#0a4c66" : "#999999";
    const settingImageUnfocused = require("./stats.png");
    const settingImageFocused = require("./stats2.png");
    let settingImage = props.focused
      ? settingImageFocused
      : settingImageUnfocused;
    let borderColor = props.focused ? "#0a4c66" : "#FFFFFF";
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderTopColor: borderColor,
          borderTopWidth: 3,
          padding: 15,
          width: 70,
        }}
      >
        <Image
          source={settingImage}
          style={{ width: 20, height: 20, marginTop: 7 }}
        />
        <Text
          style={{
            color: "#0a4c66",
            fontSize: 11,
            fontFamily: "Jost_400Regular",
            marginTop: 3,
            marginBottom: 4,
            width: 100,
            textAlign: "center",
          }}
        >
          Estadísticas
        </Text>
      </View>
    );
  };

  const FoodIcon = (props) => {
    let textColor = props.focused ? "#0a4c66" : "#999999";
    const settingImageUnfocused = require("./diet.png");
    const settingImageFocused = require("./diet2.png");
    let settingImage = props.focused
      ? settingImageFocused
      : settingImageUnfocused;
    let borderColor = props.focused ? "#0a4c66" : "#FFFFFF";
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderTopColor: borderColor,
          borderTopWidth: 3,
          padding: 15,
          width: 70,
        }}
      >
        <Image
          source={settingImage}
          style={{ width: 20, height: 20, marginTop: 7 }}
        />
        <Text
          style={{
            color: "#0a4c66",
            fontSize: 11,
            fontFamily: "Jost_400Regular",
            marginTop: 3,
            marginBottom: 4,
            width: 100,
            textAlign: "center",
          }}
        >
          Alimentación
        </Text>
      </View>
    );
  };

  const ProfileIcon = (props) => {
    let textColor = props.focused ? "#0a4c66" : "#999999";
    const settingImageUnfocused = require("./user.png");
    const settingImageFocused = require("./user2.png");
    let settingImage = props.focused
      ? settingImageFocused
      : settingImageUnfocused;
    let borderColor = props.focused ? "#0a4c66" : "#FFFFFF";
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderTopColor: borderColor,
          borderTopWidth: 3,
          padding: 15,
          width: 70,
        }}
      >
        <Image
          source={settingImage}
          style={{ width: 20, height: 20, marginTop: 7 }}
        />
        <Text
          style={{
            color: "#0a4c66",
            fontSize: 11,
            fontFamily: "Jost_400Regular",
            marginTop: 3,
            marginBottom: 4,
            width: 100,
            textAlign: "center",
          }}
        >
          Mi Perfil
        </Text>
      </View>
    );
  };

  return (
    <Router initialRouterName="Splash">
      <Scene key="root">
        <Scene
          key="signin"
          name="signin"
          component={SignIn}
          title="SignIn"
          hideNavBar
        />
        <Scene key="home" component={HomePage} title="Home" hideNavBar />
        <Scene
          key="register"
          component={Register}
          title="Register"
          hideNavBar
        />

        <Scene key="estado" component={State} title="State" hideNavBar />

        <Scene key="stats" component={Stats} title="Stats" hideNavBar />

        <Scene key="food" component={Food} title="Food" hideNavBar />

        <Scene
          key="splash"
          component={Splash}
          initial={true}
          title="Splash"
          hideNavBar
        />

        <Scene
          key="main"
          tabs
          hideTabBar={false}
          tabBarStyle={{
            backgroundColor: "white",
            height: 55,
          }}
          showLabel={false}
          hideNavBar
        >
          <Scene
            key="home"
            hideNavBar={true}
            component={HomePage}
            initial
            icon={HomeIcon}
            title="settings"
          />
          <Scene
            key="estado"
            component={State}
            title="State"
            icon={HealthIcon}
            hideNavBar
          />

          <Scene key="stats" component={Stats} hideNavBar icon={StatsIcon} />

          <Scene key="food" component={Food} hideNavBar icon={FoodIcon} />
          <Scene
            key="Mi Perfil"
            component={Profile}
            hideNavBar
            icon={ProfileIcon}
          />
        </Scene>
      </Scene>
    </Router>
  );
}

export default Routes;
