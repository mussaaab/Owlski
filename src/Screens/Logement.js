import React, {Component} from "react";
import {Text, View, Image, Dimensions, StyleSheet} from "react-native";

let {width, height} = Dimensions.get("window");

export class Logement extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Image
          source={require("../Assets/icon_favorite.png")}
          style={styles.image}
        />

        <View style={{width: width * 0.5, paddingVertical: 10}}>
          <Text style={{textAlign: "center"}}>
            Vous n'avez pas encore sauvegardé de logements
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});

export default Logement;
