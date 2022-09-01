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

const Dashboard = () => {
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
                  {"branches"}
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
                    <Picker.Item label="Branch-001" value="java" />
                    <Picker.Item label="Branch-002" value="js" />
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
          
          <DashboardRectangleCard 
          color={colors.dashboardColors2}
          title={"Purchases"}
          value={"6"}
          icon={"Sales"}
          />
          <DashboardRectangleCard 
          color={colors.dashboardColors3}
          title={"Sales"}
          value={"11"}
          icon={"shopping_cart"}
          />
          <DashboardRectangleCard 
          color={colors.dashboardColors4}
          title={"Vendors"}
          value={"18"}
          icon={"Supplier"}
          />
          <DashboardRectangleCard 
          color={colors.dashboardColors5}
          title={"Customers"}
          value={"36"}
          icon={"Customer"}
          />
          <DashboardRectangleCard 
          color={colors.dashboardColors6}
          title={"Online user"}
          value={"3"}
          icon={"user"}
          />
          <DashboardRectangleCard 
          color={colors.dashboardColors1}
          title={"Cash"}
          value={"189"}
          icon={"cash"}
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
    paddingVertical:10
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
  viewRowContainer: {
    flexDirection: "row",
    width: "100%",
    margin: 10,
    borderRadius: 10,
    backgroundColor: colors.white,
    height: 100,
  },
  viewBorderLeft: {
    width: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 1,
  },
  viewBorderRight: {
    flexDirection: "row",
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.veryLightGrey,
    alignItems:'center',
  },
 
});

export default Dashboard;
