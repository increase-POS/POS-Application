import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import CheckBox from 'expo-checkbox';
import colors from "../../theme/colors";
import Input from "../../Shared/Form/Input";
import FormContainer from "../../Shared/Form/FormContainer";

const UserLogin = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  
  return (
    // <View style={styles.container}>
    //   {/* <ScrollView contentContainerStyle={styles.scrollViewContainer}> */}
    //   <View style={{width: '90%', alignItems: "center",}}>
    <View style={styles.container}>
      <ScrollView  contentContainerStyle={styles.scrollViewContainer}
      showsVerticalScrollIndicator={false}>
      <View style={{width: width * 0.85, alignItems: "center", marginVertical: 5}}>


      <IconFontAwesome
        name="user"
        style={{ position: "relative", margin: 10 }}
        color={colors.mainColor}
        size={150}
      />
      <Text
        style={{
          fontSize: 22,
          //fontfamily
          color: colors.thickGrey,
          fontWeight: "bold",
          marginHorizontal: 10,
          marginVertical: 5,
        }}
      >
        {"Have an account ?"}
      </Text>

        <View style={{width: '100%', alignItems:'center', marginTop: 15}}>
            <Input
                placeholder="Name"
                name="name"
                id="name"
                //value={name}
                //onChangeText={(text) => setName(text)}
            />
            <Input
                placeholder={"Enter Password"}
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
                <Text style={{margin: 5}}>Remember me</Text>
            </View>
            <TouchableOpacity style={{alignSelf:'flex-start'}}>
            <View style={styles.checkboxContainer}>
                <Text style={{
                  color: colors.blue,
                    alignSelf:'flex-start',
               }}
               >Forgot Password</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '100%'}}>
                <View style={styles.buttonContainer}>
                      <Text style={styles.buttonText}>Login</Text>
                    </View>
            </TouchableOpacity>

            <TouchableOpacity style={{width: '100%'}}
                onPress={() => {
                  props.navigation.navigate('Signup')
                }}
            >
                    <View style={styles.buttonContainer}>
                      <Text style={styles.buttonText}>Signup</Text>
                    </View>
            </TouchableOpacity>
        </View>
          {/* </ScrollView>
      </View>
    </View> */}
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
    width: '100%',
    alignItems:"center"

  },
  checkbox: {
    alignSelf: "center",
  },
  buttonContainer: {
    //marginHorizontal: 10,
    marginVertical:5,
    backgroundColor: colors.thickGrey,
    width: '100%',
    height: 35,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    
  },
  buttonText: {
    color: colors.white,
    fontSize: 18
    
  }
   
});

export default UserLogin;
