import React, {Component} from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

// Icons
import AntDesign from "react-native-vector-icons/AntDesign";

let {width, height} = Dimensions.get("window");

export class HotelItem extends Component {
  state = {
    isLiked: false,
  };

  _isLiked = () => {
    let {isLiked} = this.state;

    if (!isLiked) {
      this.setState({
        isLiked: true,
      });
    } else {
      this.setState({
        isLiked: false,
      });
    }
  };

  render() {
    let {isLiked} = this.state;
    let {item} = this.props;

    return (
      <View style={{alignItems: "flex-end"}}>
        <View style={{flex: 1, justifyContent: "center"}}>
          <Image source={item.image} style={styles.images} />
        </View>

        <View style={{position: "absolute", padding: 10}}>
          <TouchableOpacity onPress={() => this._isLiked()}>
            <AntDesign
              name={!isLiked ? "hearto" : "heart"}
              size={24}
              color={!isLiked ? "#cfcfcf" : "#fff"}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  images: {
    width: width * 0.9,
    height: height * 0.25,
    borderRadius: 10,
  },
});

export default HotelItem;
