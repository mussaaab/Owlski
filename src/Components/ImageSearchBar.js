import React, { Component } from "react";
import { Text, View, ImageBackground, TextInput, Dimensions, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

let { width, height } = Dimensions.get("window");

export const ImageSearchBar = ({ placeholder, image }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={image}
        style={styles.ImageBackgroundView}
      >
        <View
          style={styles.searchView}
        >
          <AntDesign name="search1" color="#50b5b1" size={22} />

          <TextInput
            style={{ width: width * 0.52, textAlign: "center" }}
            placeholderTextColor="#000"
            placeholder={placeholder}
          />
        </View>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageBackgroundView: {
    width: width,
    height: height * 0.45,
    justifyContent: "center"
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
  }
})