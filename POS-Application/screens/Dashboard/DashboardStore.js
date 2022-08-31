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
import dataStore from "../../assets/data/storeData.json";
const DashboardStore = () => {
  const renderDataGridRow = (item, index) => {
    return (
      <View style={{ flexDirection: "row", height:45 }}>
        <View style={[styles.textDataHeaderContainer, { flex: 1 }]}>
          <Text style={[styles.textDataHeader]}>{item.id}</Text>
        </View>
        <View style={[styles.textDataHeaderContainer, { flex: 3 }]}>
          <Text style={[styles.textDataHeader]}>{item.name}</Text>
        </View>
        <View style={[styles.textDataHeaderContainer, { flex: 2 }]}>
          <Text style={[styles.textDataHeader]}>{item.quantity}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* <ScrollView contentContainerStyle={styles.scrollViewContainer}
      showsVerticalScrollIndicator={false}> */}
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
        <View
          style={[styles.viewContainer, { height: height * 0.51, padding: 5 }]}
        >
          <View
            style={{
              flexDirection: "row",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              backgroundColor: colors.dataGridHeader,
            }}
          >
            <View style={[styles.textDataHeaderContainer, { flex: 1 }]}>
              <Text style={[styles.textDataHeader]}>{"No."}</Text>
            </View>
            <View
              style={{
                borderRightWidth: 1,
                borderColor: colors.white,
                marginHorizontal: 0,
                marginVertical: 5,
              }}
            />
            <View style={[styles.textDataHeaderContainer, { flex: 3 }]}>
              <Text style={[styles.textDataHeader]}>{"Item-unit"}</Text>
            </View>
            <View
              style={{
                borderRightWidth: 1,
                borderColor: colors.white,
                marginHorizontal: 0,
                marginVertical: 5,
              }}
            />
            <View style={[styles.textDataHeaderContainer, { flex: 2 }]}>
              <Text style={[styles.textDataHeader]}>{"quantity"}</Text>
            </View>
          </View>
          <View style={styles.dataGridRowContainer}>
            <FlatList
              //showsHorizontalScrollIndicator={false}
              data={dataStore}
              renderItem={({ item, index }) => renderDataGridRow(item, index)}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
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
  },
  textDataHeader: {
    fontSize: 18,
    //fontfamily
    color: colors.thickGrey,
    fontWeight: "bold",
    margin: 5,
  },
  textDataHeaderContainer: {
    padding: 5,
    //backgroundColor: colors.mainColor,
  },
  textData: {
    fontSize: 16,
    //fontfamily
    color: colors.thickGrey,
  },
  dataGridRowContainer: {
    width: "100%",
    height: height * 0.4,
    margin: 10,
  },
});

export default DashboardStore;
