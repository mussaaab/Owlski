import React, { Component } from 'react'
import { Text, View, Image, Dimensions, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window')

export class DisplayStation extends Component {
    render() {
        let { item } = this.props.route.params;
        // console.warn(item.image);
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ width: width, height: height * 0.35, backgroundColor: 'red' }}>
                        {item.image}
                    </View>

                    <View style={{ width: width * 0.9, alignSelf: 'center', marginVertical: 15 }}>
                        <Text style={{ paddingVertical: 5, fontWeight: 'bold', fontSize: 18 }}>{item.text} - Alpes</Text>
                        <Text style={{ paddingHorizontal: 5 }}>{item.text}La Plagne est plurielle, s’étalant de la vallée, sa rivière et ses pommiers, aux sommets enneigés dominant les Alpes françaises. Onze villages constellent la station, chacun avec sa personnalité propre. L’un se plie en quatre pour accueillir les familles, l’autre s’éveille une fois la nuit tombée, l’autre encore puise son énergie dans son patrimoine historique. Vous l’avez compris, la station village des alpes a forcément une Plagne qui vous</Text>
                    </View>

                    <View style={{ flexDirection: 'row', width: width * 0.8, alignSelf: 'center', alignItems: 'center' }}>
                        <Image source={require('../Assets/icon_mountain.png')} style={{ width: width * 0.09, height: height * 0.04, resizeMode: 'contain', backgroundColor: 'greeb' }} />
                        <Text style={{paddingHorizontal: 10}}>1250 à 3250 m.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', width: width * 0.8, alignSelf: 'center', alignItems: 'center', marginTop: 10 }}>
                        <Image source={require('../Assets/icon_open_sign.png')} style={{ width: width * 0.09, height: height * 0.05, resizeMode: 'contain', backgroundColor: 'greeb' }} />
                        <Text style={{paddingHorizontal: 10}}>12 décembre 2020 au 30 avril 2021</Text>
                    </View>

                    <View style={{ flexDirection: 'row', width: width * 0.8, alignSelf: 'center', alignItems: 'center', marginTop: 10 }}>
                        <Image source={require('../Assets/icon_chair_lift.png')} style={{ width: width * 0.09, height: height * 0.05, resizeMode: 'contain', backgroundColor: 'greeb' }} />
                        <Text style={{paddingHorizontal: 10}}>38 télésièges</Text>
                    </View>

                    <View style={{ flexDirection: 'row', width: width * 0.8, alignSelf: 'center', alignItems: 'center', marginTop: 10 }}>
                        <Image source={require('../Assets/icon_snowmobile.png')} style={{ width: width * 0.08, height: height * 0.05, resizeMode: 'contain', backgroundColor: 'greeb' }} />
                        <Text style={{paddingHorizontal: 10}}>52 km</Text>
                    </View>

                    <TouchableOpacity style={{width: width * 0.3, backgroundColor: '#2699FB', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', borderRadius: 100, marginTop: 15}}>
                        <Text style={{paddingVertical: 10, color: "#fff", fontWeight: 'bold'}}>Partir ici</Text>
                    </TouchableOpacity>
              
                </ScrollView>
            </View>
        )
    }
}

export default DisplayStation
