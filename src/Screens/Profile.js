import React, { Component } from 'react'
import { Text, View, Dimensions, ImageBackground, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Images } from "../Config";

// Icon
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


let { width, height } = Dimensions.get("window");

export class Profile extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ImageBackground source={Images.mountain} style={styles.ImageBackgroundView}>
                        <View style={{ height: height * 0.30, justifyContent: 'flex-end', alignItems: 'center' }}>
                            <View style={styles.IconView}>

                                <FontAwesome5 name="user-alt" size={45} color="#fff" />
                            </View>
                        </View>

                        <View style={styles.profileTextView}>
                            <Text style={styles.profileText}>Profil</Text>
                        </View>
                    </ImageBackground>

                    <Text style={styles.title}>Paramètres</Text>

                    <TouchableOpacity style={[styles.textBtn, { marginTop: 0 }]}>
                        <Text style={styles.text}>Mon compte</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.textBtn}>
                        <Text style={styles.text}>Mes commandes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.textBtn}>
                        <Text style={styles.text}>Paiement</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.textBtn}>
                        <Text style={styles.text}>Notifications</Text>
                    </TouchableOpacity>

                    <View style={styles.lineView} />
                    <Text style={styles.title}>Owlski</Text>

                    <TouchableOpacity style={[styles.textBtn, { marginTop: 0 }]}>
                        <Text style={styles.text}>Service client</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.textBtn}>
                        <Text style={styles.text}>À propos de nous</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.textBtn}>
                        <Text style={styles.text}>Confidentialile</Text>
                    </TouchableOpacity>

                    <View style={styles.lineView} />

                    <TouchableOpacity style={styles.textBtn}>
                        <Text style={styles.text}>Se déconnecter </Text>
                    </TouchableOpacity>

                    <View style={[styles.lineView, {marginTop: 10, marginBottom: 10}]} />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ImageBackgroundView: {
        width: width,
        height: height * 0.35,
        justifyContent: "center",
    },
    searchView: {
        width: width * 0.9,
        height: height * 0.06,
        backgroundColor: "#fff",
        flexDirection: "row",
        borderRadius: 30,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    IconView: {
        width: height * 0.12,
        height: height * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#47525E'
    },
    profileTextView: {
        height: height * 0.08,
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    profileText: { 
        fontSize: 22, 
        fontWeight: 'bold', 
        color: "#fff" 
    },
    title: {
        padding: 15,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#006167'
    },
    textBtn: {
        width: width * 0.4,
        paddingVertical: 5,
        marginTop: 15,
    },
    text: {
        paddingHorizontal: 10
    },
    lineView: {
        width: '95%',
        alignSelf: 'center',
        backgroundColor: '#000',
        height: 1,
        marginTop: 25
    }
})

export default Profile
