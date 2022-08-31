import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import CheckBox from "expo-checkbox";
import { Picker } from "@react-native-picker/picker";

import colors from "../../theme/colors";
import Input from "../../Shared/Form/Input";

import FormContainer from "../../Shared/Form/FormContainer";

const countries = require("../../assets/data/countries.json");

const UserSignup = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [city, setCity] = useState();
  const [selectedCity, setSelectedCity] = useState();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}
      showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: width * 0.85,
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              //fontfamily
              color: colors.thickGrey,
              fontWeight: "bold",
              marginHorizontal: 10,
              marginVertical: 10,
            }}
          >
            {"Registeration"}
          </Text>

          <Text
            style={{
              fontSize: 18,
              //fontfamily
              color: colors.thickGrey,
              //fontWeight: "bold",
              marginHorizontal: 5,
              marginVertical: 10,
              alignSelf: "flex-start",
            }}
          >
            {"Personal Information"}
          </Text>
          <View style={{ width: "100%", alignItems: "center" }}>
            <Input
              placeholder="First Name"
              name="firstName"
              id="firstName"
              //value={name}
              //onChangeText={(text) => setName(text)}
            />
            <Input
              placeholder="Last Name"
              name="lastName"
              id="lastName"
              //value={name}
              //onChangeText={(text) => setName(text)}
            />
            <Input
              placeholder="Company"
              name="company"
              id="company"
              //value={name}
              //onChangeText={(text) => setName(text)}
            />
            <View
              style={{
                width: "100%",
                height: 50,
                backgroundColor: "white",
                margin: 5,
                borderRadius: 12.5,
                borderWidth: 1,
                borderColor: colors.grey,
              }}
            >
              <Picker
                style={{ width: "100%" }}
                selectedValue={city}
                onValueChange={(itemValue, itemIndex) => {
                  setCity(itemValue);
                }}
              >
                {/* <Picker.Item label="Java" value="java" />
                  <Picker.Item label="JavaScript" value="js" /> */}
                {countries.map((c) => {
                  return (
                    <Picker.Item
                      key={c.code}
                      label={c.name}
                      value={c.name}
                      color={colors.thickGrey}
                    />
                  );
                })}
              </Picker>
            </View>

            <Input
              placeholder="Address"
              name="address"
              id="address"
              //value={name}
              //onChangeText={(text) => setName(text)}
            />

            <View
              style={{ flexDirection: "row", width: "100%", display: "flex" }}
            >
              <View
                style={{
                  width: "auto",
                  width: 115,
                  //flexGrow:1,
                  height: 50,
                  backgroundColor: "white",
                  margin: 5,
                  marginLeft: 0,
                  borderRadius: 12.5,
                  borderWidth: 1,
                  borderColor: colors.grey,
                }}
              >
                <Picker
                  style={{ width: "auto" }}
                  selectedValue={city}
                  onValueChange={(itemValue, itemIndex) => {
                    setCity(itemValue);
                  }}
                >
                  <Picker.Item label="+963" value="+963" />
                  <Picker.Item label="+966" value="+966" />
                  <Picker.Item label="+952" value="+952" />
                  <Picker.Item label="+858" value="+858" />
                  <Picker.Item label="+511" value="+511" />
                  <Picker.Item label="+225" value="+225" />
                  {/* {countries.map((c) => {
                                  return <Picker.Item
                                          key={c.code}
                                          label={c.name}
                                          value={c.name}
                                          color={colors.thickGrey}
                                          />
                        })} */}
                </Picker>
              </View>
              <View style={{ flex: 1, marginRight: 5 }}>
                <Input
                  placeholder="Phone"
                  name="phone"
                  id="phone"
                  keyboardType="numeric"
                  //value={name}
                  //onChangeText={(text) => setName(text)}
                />
              </View>
            </View>
            <Input
              placeholder="Mobile"
              name="mobile"
              id="mobile"
              //value={name}
              //onChangeText={(text) => setName(text)}
              keyboardType="numeric"
            />
            <Input
              placeholder="Email"
              name="email"
              id="email"
              //value={name}
              //onChangeText={(text) => setName(text)}
            />
          </View>
          <Text
            style={{
              fontSize: 18,
              //fontfamily
              color: colors.thickGrey,
              //fontWeight: "bold",
              marginHorizontal: 5,
              marginVertical: 10,
              alignSelf: "flex-start",
            }}
          >
            {"Login Information"}
          </Text>
          <View style={{ width: "100%", alignItems: "center" }}>
            <Input
              placeholder="User Name"
              name="userName"
              id="userName"
              //value={name}
              //onChangeText={(text) => setName(text)}
            />
            <Input
              placeholder={"Password"}
              name={"password"}
              id={"password"}
              secureTextEntry={true}
              //value={password}
              //onChangeText={(text) => setPassword(text)}
            />
            <View style={styles.checkboxContainer}>
              <CheckBox
                color={toggleCheckBox ? colors.blue : undefined}
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />
              <Text style={{ margin: 5 }}>Remember me</Text>
            </View>

            <TouchableOpacity
              style={{ width: "100%" }}
              //onPress={() => {alert(city)}}
            >
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Signup</Text>
              </View>
            </TouchableOpacity>
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
    backgroundColor: colors.white,
    margin: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.grey,
    paddingVertical: 15,
  },
  scrollViewContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.85,
    paddingVertical: 5,
  },
  checkboxContainer: {
    flexDirection: "row",
    margin: 5,
    width: "100%",
    alignItems: "center",
  },
  checkbox: {
    alignSelf: "center",
  },
  buttonContainer: {
    //marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: colors.thickGrey,
    width: "100%",
    height: 35,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
  },
});

export default UserSignup;
