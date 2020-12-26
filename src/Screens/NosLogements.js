import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { ImageSearchBar } from "../Components/ImageSearchBar";
import { Images } from "../Config";

// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


let { width, height } = Dimensions.get("window");

export class NosLogements extends Component {
  state = {
    hotels: [
      {
        title: "Chalet-Hotel, les Aigles verts",
        images: [{ image: Images.snowHouse2 }, { image: Images.snowHouse }, { image: Images.room }, { image: Images.room3 }],
      },
      {
        title: "Chalet-Hotel, les Aigles verts",
        images: [{ image: Images.room2 }, { image: Images.snowHouse }],
      },
    ],

    isLiked: false,
    active: 0
  };

  _isLiked = () => {

    if (!this.state.isLiked) {
      this.setState({
        isLiked: true
      })
    } else {
      this.setState({
        isLiked: false
      })
    }

  }

  change = (nativeEvent) => {
    let { active } = this.state;

    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide !== active) {
        this.setState({
          active: slide
        })
      }
    }
  }

  renderHotels = ({ item, index }) => {
    let isLiked = this.state.isLiked;

    let itemWidth = width * 0.9;
    let itemHeight = height * 0.3;
    let sliderWidth = width * 0.95;

    return (

      <View style={{ alignItems: 'center', justifyContent: 'center', }}>

        <Carousel
          showsHorizontalScrollIndicator={false}
          onScroll={({ nativeEvent }) => this.change(nativeEvent)}
          data={item.images}
          renderItem={({ item, index }) => {

            return (
              <View style={{ alignItems: 'flex-end', }}>
                <View style={{ flex: 1, justifyContent: 'center', }}>
                  <Image
                    // key={index}
                    source={item.image}
                    style={styles.images}
                  />
                </View>

                <View style={{ position: 'absolute', padding: 10, }}>
                  <TouchableOpacity onPress={this._isLiked}>
                    <AntDesign name={!isLiked ? "hearto" : "heart"} size={24} color={!isLiked ? "gray" : "#fff"} />
                  </TouchableOpacity>
                </View>

              </View>
            )
          }}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          layout={'default'}
          itemHeight={itemHeight}
          horizontal={true}
        />

        <View style={styles.dotView}>
          {item.images.map((e, index) => {
            return (
              <MaterialCommunityIcons key={index} name="circle-medium" size={22} color={this.state.active === index ? '#a1a1a1' : '#e6e3e3'} />
            )
          })}
        </View>

        <View style={styles.titleView}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: height * 0.45 }}>
          <ImageSearchBar
            placeholder="Où souhaitez-vous aller ?"
            image={Images.logement}
            title={true}
          />
        </View>

        <View style={{ flex: 1, marginTop: 20 }}>
          <FlatList

            data={this.state.hotels}
            renderItem={this.renderHotels}
            keyExtractor={((item, index) => index.toString())} />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  images: {
    width: width * 0.9,
    height: height * 0.25,
    borderRadius: 10
  },
  dotView: {
    position: 'absolute',
    width: width * 0.9,
    top: height * 0.22,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  titleView: {
    paddingVertical: 10,
    width: width * 0.85,
    alignSelf: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray'
  }
})

export default NosLogements;
