import React, {Component} from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";

// Icons
import AntDesign from "react-native-vector-icons/AntDesign";
import {Images} from "../Config";

const {width, height} = Dimensions.get("window");

export class DisplayStation extends Component {
  state = {
    adulte: [
      {title: "Demie - journee", price: 44},
      {title: "journee", price: 56},
      {title: "Dexus jours", price: 112},
      {title: "Semaine", price: 224},
    ],
  };

  renderAdulte = ({item}) => {
    return (
      <View style={{flexDirection: "row"}}>
        <View
          style={{
            flex: 1,
            borderRightWidth: 1,
            borderRightColor: "#7E55F3",
            paddingVertical: 8,
          }}
        >
          <Text style={{color: "#5c5c5c", fontWeight: "bold"}}>
            {item.title}
          </Text>
        </View>

        <View
          style={{
            flex: 1.5,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            paddingVertical: 8,
          }}
        >
          <View style={{flex: 0.5}}>
            <Text
              style={{
                fontWeight: "bold",
                color: "#5c5c5c",
              }}
            >
              {item.price}.00 €
            </Text>
          </View>

          <View style={{flexDirection: "row"}}>
            <TouchableOpacity
              style={{
                width: height * 0.03,
                height: height * 0.03,
                borderWidth: 1,
                borderColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 100,
              }}
            >
              <AntDesign name="minus" size={18} color="#fff" />
            </TouchableOpacity>

            <Text
              style={{
                paddingHorizontal: 10,
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              1
            </Text>

            <TouchableOpacity
              style={{
                width: height * 0.03,
                height: height * 0.03,
                borderWidth: 1,
                borderColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 100,
              }}
            >
              <AntDesign name="plus" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  render() {
    let {item} = this.props.route.params;

    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View
            style={{
              width: width,
              height: height * 0.35,
            }}
          >
            <Image source={item.image} style={{flex: 1}} />

            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={{
                position: "absolute",
                width: height * 0.06,
                height: height * 0.06,
                backgroundColor: "#fff",
                marginVertical: 15,
                marginHorizontal: 20,
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name="arrowleft" size={32} color="#6bdbd6" />
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: width * 0.9,
              alignSelf: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#7E55F3",
            }}
          >
            <View
              style={{
                width: width * 0.9,
                alignSelf: "center",
                marginVertical: 15,
              }}
            >
              <Text
                style={{paddingVertical: 5, fontWeight: "bold", fontSize: 18}}
              >
                {item.text} - Alpes
              </Text>
              <Text style={{paddingHorizontal: 5}}>
                {item.text}La Plagne est plurielle, s’étalant de la vallée, sa
                rivière et ses pommiers, aux sommets enneigés dominant les Alpes
                françaises. Onze villages constellent la station, chacun avec sa
                personnalité propre. L’un se plie en quatre pour accueillir les
                familles, l’autre s’éveille une fois la nuit tombée, l’autre
                encore puise son énergie dans son patrimoine historique. Vous
                l’avez compris, la station village des alpes a forcément une
                Plagne qui vous
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: width * 0.8,
                alignSelf: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={Images.icon_ice_mountain}
                style={{
                  width: height * 0.05,
                  height: height * 0.05,
                  resizeMode: "contain",
                }}
              />
              <Text style={{paddingHorizontal: 10}}>1250 à 3250 m.</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: width * 0.8,
                alignSelf: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Image
                source={Images.icon_open_sign}
                style={{
                  width: height * 0.05,
                  height: height * 0.05,
                  resizeMode: "contain",
                }}
              />
              <Text style={{paddingHorizontal: 10}}>
                12 décembre 2020 au 30 avril 2021
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: width * 0.8,
                alignSelf: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Image
                source={Images.icon_chair_lift}
                style={{
                  width: height * 0.05,
                  height: height * 0.05,
                  resizeMode: "contain",
                }}
              />
              <Text style={{paddingHorizontal: 10}}>38 télésièges</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: width * 0.8,
                alignSelf: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Image
                source={Images.icon_snowmobile}
                style={{
                  width: height * 0.05,
                  height: height * 0.05,
                  resizeMode: "contain",
                }}
              />
              <Text style={{paddingHorizontal: 10}}>52 km</Text>
            </View>

            <TouchableOpacity
              style={{
                width: width * 0.3,
                backgroundColor: "#2699FB",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                borderRadius: 100,
                margin: 15,
              }}
            >
              <Text
                style={{paddingVertical: 10, color: "#fff", fontWeight: "bold"}}
              >
                Partir ici
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: width * 0.9,
              alignSelf: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <Text
                style={{color: "#47525E", fontSize: 20, fontWeight: "bold"}}
              >
                Les forfaits
              </Text>

              <View style={{alignItems: "flex-end"}}>
                <View
                  style={{
                    width: height * 0.08,
                    height: height * 0.08,
                    backgroundColor: "#FFC82C",
                    borderRadius: 100,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={Images.icon_bag}
                    style={{
                      width: height * 0.05,
                      height: height * 0.05,
                      resizeMode: "contain",
                    }}
                  />
                </View>

                <View style={{position: "absolute"}}>
                  <Text style={{color: "#47525E", fontWeight: "bold"}}>1</Text>
                </View>
              </View>
            </View>

            <View style={{padding: 10}}>
              <Text
                style={{fontSize: 16, fontWeight: "bold", color: "#47525E"}}
              >
                Adulte
              </Text>
            </View>

            <View
              style={{
                padding: 10,
                backgroundColor: "#c4c4c4",
                marginVertical: 15,
                borderRadius: 10,
              }}
            >
              <FlatList
                data={this.state.adulte}
                renderItem={this.renderAdulte}
                contentContainerStyle={{}}
              />
            </View>

            <View style={{padding: 10}}>
              <Text
                style={{fontSize: 16, fontWeight: "bold", color: "#47525E"}}
              >
                Enfant
              </Text>
            </View>

            <View
              style={{
                padding: 10,
                backgroundColor: "#c4c4c4",
                marginVertical: 15,
                borderRadius: 10,
              }}
            >
              <FlatList
                data={this.state.adulte}
                renderItem={this.renderAdulte}
                contentContainerStyle={{}}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default DisplayStation;
