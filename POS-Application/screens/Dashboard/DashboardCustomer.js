import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
} from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { Picker } from "@react-native-picker/picker";

import colors from "../../theme/colors";
import DashboardRectangleCard from "../../components/DashboardRectangleCard";


const DashboardCustomer = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}
      showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: width * 0.95,
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <View style={styles.viewColumnContainer}>
            <View
              style={[
                styles.viewBorderTop,
                {
                  backgroundColor: colors.dashboardColors1,
                  borderColor: colors.dashboardColors1,
                },
              ]}
            />
            <View style={styles.viewBorderBottom}>
              <View style={{ margin: 10, width: "90%" }}>
                <Text
                  style={{
                    fontSize: 20,
                    //fontfamily
                    color: colors.thickGrey,
                    fontWeight: "bold",
                  }}
                >
                  {"customers"}
                </Text>
                <View
                  style={{
                    width: "100%",
                    height: 50,
                    backgroundColor: "white",
                    marginVertical: 5,
                    borderRadius: 12.5,
                    borderWidth: 1,
                    borderColor: colors.grey,
                  }}
                >
                  <Picker
                    style={{ width: "100%" }}
                    //</View>selectedValue={city}
                    //</View>onValueChange={(itemValue, itemIndex) => {
                    //setCity(itemValue);
                    //}}
                  >
                    <Picker.Item label="Cus-001" value="1" />
                    <Picker.Item label="Cus-002" value="2" />
                    {/* {countries.map((c) => {
                  return (
                    <Picker.Item
                      key={c.code}
                      label={c.name}
                      value={c.name}
                      color={colors.thickGrey}
                    />
                  );
                })} */}
                  </Picker>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.viewContainer}>
              <View style={styles.imageProductContainer}>
                <Image
                  source={{
                    uri: "https://images.assetsdelivery.com/compings_v2/koblizeek/koblizeek1902/koblizeek190200055.jpg",
                  }}
                  style={styles.imageProduct}
                />
              </View>
            <View
              style={{
                borderRightWidth: 1,
                borderColor: colors.lightGrey,
                marginHorizontal: 5,
                marginVertical: 10,
              }}
            />
            <View style={{  margin: 10,alignSelf:'center' }}>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 16, //fontfamily
                    color: colors.mainColor,
                    fontWeight: "bold",
                    margin: 5,
                  }}
                >
                  {"Name:"}
                </Text>
                <Text
                  style={{
                    fontSize: 16, //fontfamily
                    color: colors.thickGrey,
                    margin: 5,
                    marginLeft: 0,
                  }}
                >
                  {"Ahmed Muhammad"}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 16, //fontfamily
                    color: colors.mainColor,
                    fontWeight: "bold",
                    margin: 5,
                  }}
                >
                  {"Company:"}
                </Text>
                <Text
                  style={{
                    fontSize: 16, //fontfamily
                    color: colors.thickGrey,
                    margin: 5,
                    marginLeft: 0,
                  }}
                >
                  {"Increase"}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 16, //fontfamily
                    color: colors.mainColor,
                    fontWeight: "bold",
                    margin: 5,
                  }}
                >
                  {"Mobile:"}
                </Text>
                <Text
                  style={{
                    fontSize: 16, //fontfamily
                    color: colors.thickGrey,
                    margin: 5,
                    marginLeft: 0,
                  }}
                >
                  {"+9639449449445"}
                </Text>
              </View>
            </View>
          </View>
          <DashboardRectangleCard 
          color={colors.dashboardColors2}
          title={"sales invoices"}
          value={"6"}
          icon={"Invoice"}
          />
          <DashboardRectangleCard 
          color={colors.dashboardColors3}
          title={"Orders"}
          value={"11"}
          icon={"shipping_transport_icon-2"}
          />
          <DashboardRectangleCard 
          color={colors.dashboardColors4}
          title={"Quotations"}
          value={"18"}
          icon={"clipboard-price-list"}
          />
          <DashboardRectangleCard 
          color={colors.dashboardColors5}
          title={"Payments"}
          value={"36"}
          icon={"money-bag"}
          />
          <DashboardRectangleCard 
          color={colors.dashboardColors6}
          title={"Account statement"}
          value={"3"}
          icon={"Accounting"}
          />

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
  viewColumnContainer: {
    width: "100%",
    margin: 10,
    borderRadius: 10,
    backgroundColor: colors.white,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0,
    shadowRadius: 4.65,
    elevation: 3,
  },
  viewBorderTop: {
    height: 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
  },
  viewBorderBottom: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.veryLightGrey,
  },
  viewContainer: {
    width: "100%",
    margin: 10,
    borderRadius: 10,
    backgroundColor: colors.white,
    flexDirection: "row",

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
    flex: 1,
    //alignSelf: "center",
    // width: width < height ? width * 0.4 : height * 0.2,
    // height: width < height ?  width * 0.4  : height * 0.2,
    minWidth:width * 0.25,
    height: height * 0.20,
    //width: "90%",
    //resizeMode: "cover",
    //resizeMode: "stretch",
    //marginVertical: 20,
    //borderRadius: 10,
    margin:5
  },
  imageProduct: {
    //flex:1,
    height: "100%",
    width: "100%",
    resizeMode: "center",
    //borderRadius: 10,
  },
});

export default DashboardCustomer;
