import React, {Component} from "react";
import {
  // Text,
  View,
  // ScrollView,
  FlatList,
  // Image,
  Dimensions,
  // TouchableOpacity,
  StyleSheet,
} from "react-native";
// import Carousel, {Pagination} from "react-native-snap-carousel";
import {ImageSearchBar} from "../Components/ImageSearchBar";
import {Hotels} from "../Components/Hotels";
import {Images} from "../Config";

let {width, height} = Dimensions.get("window");

export class NosLogements extends Component {
  state = {
    hotels: [
      {
        title: "Chalet-Hotel, les Aigles verts",
        images: [
          {image: Images.snowHouse2, isLiked: false},
          {image: Images.snowHouse, isLiked: false},
          {image: Images.room, isLiked: false},
          {image: Images.room3, isLiked: false},
        ],
      },
      {
        title: "Chalet-Hotel",
        images: [
          {image: Images.snowHouse2, isLiked: false},
          {image: Images.snowHouse, isLiked: false},
          {image: Images.room, isLiked: false},
          {image: Images.room3, isLiked: false},
        ],
      },
    ],
  };

  renderHotels = ({item, index}) => {

    return <Hotels item={item} />;
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: height * 0.45}}>
          <ImageSearchBar
            placeholder="Où souhaitez-vous aller ?"
            image={Images.logement}
            title={true}
          />
        </View>

        <View style={{flex: 1, marginTop: 20}}>
          <FlatList
            data={this.state.hotels}
            renderItem={this.renderHotels}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

export default NosLogements;
