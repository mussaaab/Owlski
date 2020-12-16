import React, { Component } from 'react'
import { Text, View, Image, Dimensions, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window')

export class DisplayStation extends Component {
    render() {
        let { item } = this.props.route.params;
        console.warn(item.image);
        return (
            <View style={{flex: 1}}>
                {/* <ScrollView>  */}

                <View style={{width: width, height: height * 0.35, backgroundColor: 'red'}}>
                    {item.image}
                </View>
                {/* </ScrollView> */}
            </View>
        )
    }
}

export default DisplayStation
