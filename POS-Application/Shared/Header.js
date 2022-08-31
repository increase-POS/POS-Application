import React from "react";
import { StyleSheet, Image, SafeAreaView, View, Text, StatusBar } from "react-native";
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconFeather from 'react-native-vector-icons/Feather'
import colors from "../theme/colors";
const Header = () => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
             <StatusBar
        animated={true}
        backgroundColor="#FFFFFF"
        />
            <View style={styles.header}>
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <Image 
                        source={require("../assets/images/LogoColors.png")}
                        resizeMode='contain'
                        style={styles.logoImage}
                        />  
                    <Text style={styles.mainText}>POS-Increase</Text>
                </View>
                <IconFeather 
                            name="menu"
                            style={{position: "relative", margin:5}}
                            color = {colors.thickGrey}
                            size={35}
                            />
            </View>
        </SafeAreaView>
    )
        }
        

const styles = StyleSheet.create({
    safeAreaView: {
        width: "100%",
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent:"center",
        padding: 5,
    },
    header: {
        width: '100%',
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems:'center',
        paddingLeft: '1%',
        paddingRight: '1%',

    },
    logoImage:{
        height: 50,
         width:50,
         margin:5,

    },
    mainText: {
        color: colors.thickGrey,
        //fontFamily
        fontSize: 22,
        fontWeight: 'bold',
        margin:5,
    }
})

 

export default Header;