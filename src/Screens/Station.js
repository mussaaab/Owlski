import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { ImageSearchBar } from "../Components/ImageSearchBar";
import { Images } from "../Config";

let { width, height } = Dimensions.get("window");

export class Station extends Component {

  state = {
    station: [
      {
        title: "La Plagne",
        image: Images.snowmountain,
      },
      {
        title: "Chamonix-Mont-Blanc",
        image: Images.icemountain,
      },
      {
        title: "Val Thorens",
        image: Images.mountain,
      },
      {
        title: "La Plagne",
        image: Images.icemountain,
      },
    ],
  };

  renderStation = ({ item }) => {
    return (
      <View style={{ marginVertical: 10 }}>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("StationPass", { item })}
          style={styles.station_btn}
        >
          <Image
            source={item.image}
            style={styles.station_image}
          />

          <View style={{ position: "absolute" }}>

            <View
              style={styles.station_text_view}
            >
              <Text style={{ fontSize: 10 }}>Forfait 1 jour / 62€</Text>
            </View>

          </View>
        </TouchableOpacity>

        <View
          style={styles.titleView}
        >
          <Text
            style={{}}
          >
            {item.title}
          </Text>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <ImageSearchBar
            placeholder="Où souhaitez-vous aller ?"
            image={Images.station_image}
          />

          <View style={{ flex: 1 }}>
            <Text
              style={styles.stations_heading}
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

          <View style={{ flex: 1 }}>
            <Text
              style={styles.stations_heading}
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

const styles = StyleSheet.create({
  station_btn: {
    width: width * 0.4,
    height: height * 0.15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginHorizontal: 10,
    borderRadius: 12,
  },
  station_image: {
    width: "100%",
    height: height * 0.15,
    borderRadius: 12
  },
  station_text_view: {
    margin: 10,
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 12,
  },
  titleView: {
    marginHorizontal: 10,
    width: width * 0.4,
    padding: 5
  },
  title: {
    fontWeight: "bold",
    fontSize: 12,
  },
  stations_heading: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontWeight: "bold",
    fontSize: 20,
  }
})

export default Station;
