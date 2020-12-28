import React, {Component} from "react";
import {
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import Carousel, {Pagination} from "react-native-snap-carousel";
import HotelItem from "../Components/HotelItem";


let {width, height} = Dimensions.get("window");
export class Hotels extends Component {
  state = {
    isLiked: [],
    active: 0,
    activeIndex: 0,
  };

  _isLiked = (item, index) => {
    let {isLiked} = this.state;
    if (!item.isLiked) {
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
    let itemWidth = width * 0.9;
    let itemHeight = height * 0.3;
    let sliderWidth = width * 0.95;

    let {isLiked, activeIndex} = this.state;
    let {item} = this.props;

    return (
      <View style={{alignItems: "center", justifyContent: "center"}}>
        <Carousel
          showsHorizontalScrollIndicator={false}
          data={item.images}
          onSnapToItem={(index) => this.setState({activeIndex: index})}
          renderItem={({item, index}) => {
            return <HotelItem item={item} />;
          }}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          layout={"default"}
          itemHeight={itemHeight}
          horizontal={true}
        />

        <View style={{flex: 1, position: "absolute", top: height * 0.18}}>
          <Pagination
            dotsLength={item.images.length}
            activeDotIndex={activeIndex}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              top: 0,
              backgroundColor: "#a1a1a1",
            }}
            // activeOpacity={0.1}
            inactiveDotStyle={{
              backgroundColor: "#e6e3e3",
            }}
            inactiveDotOpacity={0.6}
            inactiveDotScale={0.8}
          />
        </View>

        <View style={styles.titleView}>
          <Text style={styles.title}>{item.title}</Text>
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
  dotView: {
    position: "absolute",
    width: width * 0.9,
    top: height * 0.22,
    justifyContent: "center",
    flexDirection: "row",
  },
  titleView: {
    paddingVertical: 10,
    width: width * 0.85,
    alignSelf: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "gray",
  },
});

export default Hotels;
