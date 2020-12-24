import React, {Component} from "react";
import {
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import {ImageSearchBar} from "../Components/ImageSearchBar";
import {Images} from "../Config";

let {width, height} = Dimensions.get("window");

export class NosLogements extends Component {
  state = {
    hotels: [
      {
        title: "La Plagne",
        images: [{image: Images.snowmountain}, {image: Images.icemountain}],
      },
    ],
  };

  renderHotels = ({item}) => {
    // console.warn("dsad", item)
    return (
      <View style={{height: height * 0.35, alignItems: 'center', justifyContent: 'center',}}>
        <Carousel
          data={item.images}
          renderItem={({item}) => {
            return (
              <View style={{flex: 1, justifyContent: 'center',}}>
                <Image
                  source={item.image}
                  style={{width: width * 0.9, height: height * 0.3, borderRadius: 10}}
                />
              </View>
            )
          }}
          sliderWidth={400}
          itemWidth={300}
          layout={'default'}
          itemHeight={300}
        //   layout="default"
          horizontal={true}
        //   itemWidth={itemWidth}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <ImageSearchBar
            placeholder="Où souhaitez-vous aller ?"
            image={Images.station_image}
            title={true}
          />

          <FlatList data={this.state.hotels} renderItem={this.renderHotels} />
        </ScrollView>
      </View>
    );
  }
}

export default NosLogements;
