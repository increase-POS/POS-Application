import React from "react";
import {Button, Image, StyleSheet, View, Text, Touchable} from "react-native"
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import { getHeaderTitle } from '@react-navigation/elements';

import { createDrawerNavigator } from "@react-navigation/drawer";


import colors from "../theme/colors";
import Header  from '../Shared/Header';
import CustomIcon from '../components/CustomIcon';


//import { ContactStackNavigator } from "./StackNavigator";
import MainTab from "./MainTab";
import DashboardTab from "./DashboardTab";
import InfoScreen from "../screens/InfoScreen";


import { TouchableOpacity } from "react-native-gesture-handler";

const Drawer = createDrawerNavigator();

function LogoTitle() {
    return (
      // <Image
      //   style={{ width: 50, height: 50 }}
      //   source={require('../assets/icon.png')}
      // />
      <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <Image 
                        source={require("../assets/images/LogoColors.png")}
                        resizeMode='contain'
                        style={styles.logoImage}
                        />  
                    <Text style={styles.mainText}>POS-Increase</Text>
                </View>
    );
  }

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator useLegacyImplementation={true}>
      <Drawer.Screen name="Home" component={MainTab} 
      options={{
        // drawerIcon: () => (
        //       <IconFontAwesome 
        //       name="home"
        //       style= {{position: "relative", margin: 5, marginRight: 15}}
        //       color = {colors.thickGrey}
        //       size={30}
        //       />
        // ),
        // header: ({ navigation, route, options }) => {
        //   const title = getHeaderTitle(options, route.name);
        
        //   return <Header title={title} navigation={navigation} />;
        // },
        drawerIcon:({ focused,color, size }) => 
          (
            // <IconFontAwesome color={color} size={size} name={focused ? 'heart' : 'heart-o'} />
            // <IconFontAwesome color={color} size={size} name={'shopping-cart'} />
            <CustomIcon 
                          name={"shopping_cart"}
                          color={color}
                          size={size}
                        />
          ),
        headerTitle: (props) => <LogoTitle {...props} />,
        headerRight: () => (
          <TouchableOpacity>
              <IconFontAwesome 
              name="shopping-cart"
              style= {{position: "relative", margin: 5, marginRight: 15}}
              color = {colors.thickGrey}
              size={30}
              />
          </TouchableOpacity>
        ),
        headerTintColor: colors.thickGrey, 
        // headerTitleStyle: {
        //     fontWeight: 'bold', //Set Header text style
        // },
      }}
      />
      <Drawer.Screen name="Dashboard" component={DashboardTab}
      options={{
        drawerIcon:({ focused,color, size }) => 
          (
            // <IconFontAwesome color={color} size={size} name={'pie-chart'} />
            <CustomIcon 
                          name={"dashboard"}
                          color={color}
                          size={size}
                        />
          ),
        headerTitle: (props) => <LogoTitle {...props} />,
        // headerRight: () => (
        //   <TouchableOpacity>
        //       <IconFontAwesome 
        //       name="shopping-cart"
        //       style= {{position: "relative", margin: 5, marginRight: 15}}
        //       color = {colors.thickGrey}
        //       size={30}
        //       />
        //   </TouchableOpacity>
        // ),
        headerTintColor: colors.thickGrey, 
       
      }}
      />
      <Drawer.Screen name="Info" component={InfoScreen}
      options={{
        drawerIcon:({ focused,color, size }) => 
          (
            <CustomIcon 
                          name={"error"}
                          color={color}
                          size={size}
                        />
          ),
        headerTitle: (props) => <LogoTitle {...props} />,
        headerTintColor: colors.thickGrey, 
       
      }}
      />
    </Drawer.Navigator>
  );
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
       marginLeft: -15

  },
  mainText: {
      color: colors.thickGrey,
      //fontFamily
      fontSize: 20,
      fontWeight: 'bold',
      margin:5,
  }
})

export default DrawerNavigator;