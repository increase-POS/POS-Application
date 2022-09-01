import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";

import colors from "../theme/colors";
import images from "../theme/images";

const InfoScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            width: width * 0.95,
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <View style={styles.viewContainer}>
            <View style={styles.imageProductContainer}>
              <Image source={images.logo} style={styles.imageProduct} />
            </View>
            <View
              style={{ flexDirection: "row", margin: 10, alignItems: "center" }}
            >
                <View style={{backgroundColor: colors.mainColor,
                borderRadius:10,
                marginRight: 10
                }}>
              <Text style={[styles.mainText, {color: colors.white}]}>Program:</Text>
              </View>
              <Text style={[styles.normalText, {flex:1}]}>Increase POS - Version: 1.1.1.0</Text>
            </View>

           
            
            <View
              style={{ flexDirection: "row", margin: 10, alignItems: "center" }}
            >
                <View style={{backgroundColor: colors.mainColor,
                borderRadius:10,
                marginRight: 10
                }}>
                    <Text style={[styles.mainText, {color: colors.white}]}>Developement</Text>
                </View>
              <Text style={[styles.normalText, {flex:1}]}>شركة انكريس للتجارة العامة ذ.م.م</Text>
            </View>

            <View style={{ 
          width: width * 0.85,
            borderTopWidth: 1, 
            borderColor: colors.veryLightGrey,
            marginHorizontal: 10,
            marginVertical:5,
            alignSelf:'center'
            }} />

            <View
              style={{ flexDirection: "row", margin: 10, alignItems: "center" }}
            >
              <Text style={[styles.mainText]}>Address:</Text>
              <Text style={[styles.normalText, {flex:1}]}>دولة الكويت - حولي - شارع ابن خلدون - برج زينة - مكتب 13</Text>
            </View>
            <View style={{ 
          width: width * 0.85,
            borderTopWidth: 1, 
            borderColor: colors.veryLightGrey,
            marginHorizontal: 10,
            marginVertical:5,
            alignSelf:'center'
            }} />
            <View
              style={{ flexDirection: "row", margin: 10, alignItems: "center" }}
            >
              <Text style={styles.mainText}>Sales:</Text>
              <Text style={[styles.normalText, {flex:1}]}>Sales@in.com.kw - +965-92255222</Text>
            </View>
            <View
              style={{ flexDirection: "row", margin: 10, alignItems: "center" }}
            >
              <Text style={[styles.mainText]}>Support:</Text>
              <Text style={[styles.normalText, {flex:1}]}>Support@in.com.kw - +965-94131113</Text>
            </View>

          </View>
        </View>
      </ScrollView>
    </View>
  );
};

var { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.homeBackground,
    paddingVertical: 10,
  },
  scrollViewContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.95,
    paddingVertical: 5,
  },
  viewContainer: {
    width: "100%",
    height: height * 0.8,
    margin: 5,
    borderRadius: 10,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.veryLightGrey,


    shadowColor: "#000",
			shadowOffset: {
			  width: 0,
			  height: 4,
			},
			shadowOpacity: 0,
			shadowRadius: 4.65,
			elevation: 3,
  },
  imageProductContainer: {
    //flex:1,
    alignSelf: "center",
    // width: width < height ? width * 0.4 : height * 0.2,
    // height: width < height ?  width * 0.4  : height * 0.2,
    height: height * 0.15,
    width: height * 0.25,
    //resizeMode: "cover",
    //resizeMode: 'stretch',
    marginVertical: 20,
    borderRadius: 10,
  },
  imageProduct: {
    //flex:1,
    height: "100%",
    width: "100%",
    resizeMode: "stretch",
    //borderRadius: 10,
  },
  mainText: {
    color: colors.mainColor,
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
  },
  normalText: {
    color: colors.thickGrey,
    fontSize: 16,
    //fontWeight:'bold',
    margin: 5,
    
    
  },
});

export default InfoScreen;
