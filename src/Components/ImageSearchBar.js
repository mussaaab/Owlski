import React, {Component} from "react";
import {Text, View, ImageBackground, TextInput, Dimensions} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
// import {Images} from "../Config";

export const ImageSearchBar = ({placeholder, image}) => {
  let {width, height} = Dimensions.get("window");
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={image}
        style={{width: width, height: height * 0.45, justifyContent: "center"}}
      >
        <View
          style={{
            width: width * 0.9,
            height: height * 0.06,
            backgroundColor: "#fff",
            flexDirection: "row",
            borderRadius: 30,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="search1" color="#50b5b1" size={22} />

          <TextInput
            style={{width: width * 0.52, textAlign: "center"}}
            placeholderTextColor="#000"
            placeholder={placeholder}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
