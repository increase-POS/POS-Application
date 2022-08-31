import React,{useEffect, useState, useCallback} from "react";
import { View, Text, StyleSheet, Image, Dimensions, StatusBar} from "react-native";
import * as Animatable from 'react-native-animatable';
import { useFocusEffect } from "@react-navigation/native";

import Logo from '../../assets/images/Logo.png';
import colors from "../../theme/colors";

const LoadingScreen = (props) => {

    // useFocusEffect((
    //     useCallback(
    //       () => {

    //         setTimeout(() => {
    //             props.navigation.navigate('Home', { screen: 'Home' })
    //             //alert('Hello world!!')
    //          }, 4000)
    //         }, 
    //     [], )
    //     ))
    
    return(
            <View style={styles.container}>
                <StatusBar  hidden = {true}  />
                <Animatable.Image 
                            animation="pulse" 
                            easing="ease-out" 
                            iterationCount="infinite"

                            style={styles.logoImage}
                            source={Logo}
                />
                <Text 
                    style={styles.logoText} 
                >Increase-POS</Text>
            </View>
    )
}
var { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.mainColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        height: width * 0.4,
        width:  width * 0.4,
        resizeMode:'contain'
    },
    logoText: {
        color: '#FFFFFF',
        //fontFamily
        fontSize: 30,
        marginTop: 5,
        fontWeight: '400',
    }
})
export default LoadingScreen;