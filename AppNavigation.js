import React from "react";
import {View, Text, Image, Dimensions} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";

//Screens
import {Station, DisplayStation, NosLogements, Profile} from "./src/Screens";

const {width, height} = Dimensions.get("screen");

const BottomTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "#ebebeb",
        activeTintColor: "#8190A5",
        keyboardHidesTabBar: true,
      }}
    >
      <BottomTab.Screen
        name="NosStation"
        component={Station}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={require("./src/Assets/icon_mountain.png")}
                style={{width: 30, height: 30, resizeMode: "contain"}}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Ski"
        component={Station}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={require("./src/Assets/icon_snowboard.png")}
                style={{width: 25, height: 25, resizeMode: "contain"}}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="NosLogements"
        component={NosLogements}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={require("./src/Assets/icon_house.png")}
                style={{width: 30, height: 30, resizeMode: "contain"}}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Favoris"
        component={Station}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={require("./src/Assets/icon_favorite.png")}
                style={{width: 30, height: 30, resizeMode: "contain"}}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Profil"
        component={Profile}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={require("./src/Assets/icon_profile.png")}
                style={{width: 30, height: 30, resizeMode: "contain"}}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

const AppStack = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="StationPass"
        component={DisplayStation}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

class AppNavigation extends React.Component {
  render() {
    return <AppStack />;
  }
}

export default AppNavigation;
