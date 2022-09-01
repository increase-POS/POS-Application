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

import CustomIcon from "./CustomIcon"
import colors from "../theme/colors";

const DashboardRectangleCard = (props) => {
    return (
<View style={styles.viewRowContainer}>
            <View
              style={[
                styles.viewBorderLeft,
                {
                  backgroundColor: props.color,
                  borderColor: props.color,
                },
              ]}
            />
            <View style={styles.viewBorderRight}>
              <View style={{marginHorizontal: 20}}>
                <CustomIcon 
                name={props.icon}
                color={props.color}
                size={40}
                />
              </View>
             
              <View style={{
                borderWidth:1, borderColor:props.color,
                 marginHorizontal: 10,   
                height: '50%'
            }} />
              <View style={{flex:1, alignSelf: 'center',alignItems:'center',justifyContent:'center', margin: 10 }}>
                <Text
                  style={{
                    fontSize: 20,
                    //fontfamily
                    color: colors.thickGrey,
                    fontWeight: "bold",
                    margin:5
                  }}
                >
                  {props.title}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    //fontfamily
                    color: colors.thickGrey,
                    margin:5
                  }}
                >
                  {props.value}
                </Text>
              </View>
            </View>
          </View>
    )
}

var { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.homeBackground,
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
    height: 30,
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

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0,
    shadowRadius: 4.65,
    elevation: 3,
  },
  viewBorderLeft: {
    width: 15,
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

export default DashboardRectangleCard;