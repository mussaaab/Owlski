import React, {Component} from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {ImageSearchBar} from "../Components/ImageSearchBar";
import {Images} from "../Config";

let {width, height} = Dimensions.get("window");

export class Station extends Component {
  state = {
    station: [
      {
        text: "La Plagne",
        image: Images.snowmountain,
      },
      {
        text: "Chamonix-Mont-Blanc",
        image: Images.icemountain,
      },
      {
        text: "Val Thorens",
        image: Images.mountain,
      },
      {
        text: "La Plagne",
        image: Images.icemountain,
      },
    ],
  };

  renderStation = ({item}) => {
    console.warn(item.image);
    return (
      <View style={{marginVertical: 10}}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("StationPass", {item})}
          style={{
            width: 165,
            height: height * 0.15,
            justifyContent: "flex-end",
            alignItems: "flex-end",
            marginHorizontal: 10,
            borderRadius: 12,
          }}
        >
          <Image
            source={item.image}
            style={{width: "100%", height: height * 0.15, borderRadius: 12}}
          />
          <View style={{position: "absolute"}}>
            <View
              style={{
                margin: 10,
                backgroundColor: "#fff",
                padding: 5,
                borderRadius: 12,
              }}
            >
              <Text style={{fontSize: 10}}>Forfait 1 jour / 62€</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View
          style={{
            marginHorizontal: 10,
            minWidth: "10%",
            maxWidth: "100%",
            flexWrap: "wrap",
          }}
        >
          <Text
            style={{fontWeight: "bold", fontSize: 12, paddingHorizontal: 10}}
          >
            {item.text}
          </Text>
        </View>
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
          />

          <View style={{flex: 1}}>
            <Text
              style={{
                paddingVertical: 15,
                paddingHorizontal: 10,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Alpes du Sud - 36 stations
            </Text>
            <FlatList
              data={this.state.station}
              renderItem={this.renderStation}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>

          <View style={{flex: 1}}>
            <Text
              style={{
                paddingVertical: 15,
                paddingHorizontal: 10,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Alpes du Nord - 24 stations
            </Text>
            <FlatList
              data={this.state.station}
              renderItem={this.renderStation}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Station;
