import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Tout extends Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 20,  color: 'gray'}}> Coming Soon... </Text>
            </View>
        )
    }
}

export default Tout
