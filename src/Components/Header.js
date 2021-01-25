import React, {Component} from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";
import {Images} from "../Config";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

//Screens
import {Tout, Logement, NosLogements, Profile} from "../Screens";

let {width, height} = Dimensions.get("window");

const TopTab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <TopTab.Navigator
      tabBarOptions={{labelStyle: {fontSize: 10, textTransform: "uppercase"}}}
    >
      <TopTab.Screen name="Tout" component={Tout} />
      <TopTab.Screen name="Logement " component={Logement} />
      <TopTab.Screen name="Skis" component={Tout} />
      <TopTab.Screen name="Pass" component={Tout} />
    </TopTab.Navigator>
  );
};

export const Header = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={Images.logement}
        style={styles.ImageBackgroundView}
      >
        <View
          style={{flex: 1, justifyContent: "flex-end", alignItems: "flex-end"}}
        >
          <Text style={{padding: 20, fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Favoris</Text>
        </View>
      </ImageBackground>

      <TopTabs />
    </View>
  );
};

const styles = StyleSheet.create({
  ImageBackgroundView: {
    width: width,
    height: height * 0.45,
    justifyContent: "center",
  },
  searchView: {
    width: width * 0.9,
    height: height * 0.06,
    backgroundColor: "#fff",
    flexDirection: "row",
    borderRadius: 30,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  titleView: {
    width: width * 0.45,
  },
  title: {
    fontSize: 26,
    padding: 15,
    fontWeight: "bold",
    color: "#fff",
  },
});
