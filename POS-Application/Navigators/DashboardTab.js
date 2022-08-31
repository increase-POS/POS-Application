import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5'
import { SvgUri } from 'react-native-svg';
//import CustomIcon from '../assets/fonts/CustomIcon.js'
import { createDrawerNavigator } from '@react-navigation/drawer';

import colors from "../theme/colors";
import CustomIcon from '../components/CustomIcon';

// Stacks
import DashboardNavigator from "./DashboardNavigator";
import DashboardStoreNavigator from "./DashboardStoreNavigator";
import DashboardCustomerNavigator from "./DashboardCustomerNavigator";
import DashboardVendorNavigator from "./DashboardVendorNavigator";

const Tab = createBottomTabNavigator();
const MainNavigator = createDrawerNavigator();

const DashboardTab = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      KeyboardHidesTabBar: true,
      tabBarShowLabel: false,
      tabBarActiveTintColor:'grey',
      headerShown: false,
      tabBarActiveTintColor:  colors.mainColor
  }}
    >
    <Tab.Screen name="DashboardNavigator" component={DashboardNavigator} 
                  options={{
                    tabBarStyle: { display: false ? "none" : "flex" },
                    tabBarIcon: ({ color }) => (
                        // <IconFontAwesome
                        //     name="home"
                        //     style= {{position: "relative",}}
                        //     color = {color}
                        //     size={30}
                        //     />
                        <CustomIcon 
                          name={"Home"}
                          color={color}
                          size={30}
                        />
                      ) 
                }}
        />
      <Tab.Screen name="DashboardStoreNavigator" component={DashboardStoreNavigator} 
            options={{
              tabBarStyle: { display: false ? "none" : "flex" },
              tabBarIcon: ({ color }) => (
                <CustomIcon 
                name={"storage"}
                color={color}
                size={30}
              />
                      )
          }}
      /> 
      <Tab.Screen name="DashboardCustomerNavigator" component={DashboardCustomerNavigator} 
            options={{
              tabBarStyle: { display: false ? "none" : "flex" },
              tabBarIcon: ({ color }) => (
                <CustomIcon 
                name={"Customer"}
                color={color}
                size={30}
              />
                      )
          }}
      /> 
     <Tab.Screen name="DashboardVendorNavigator" component={DashboardVendorNavigator} 
            options={{
              tabBarStyle: { display: false ? "none" : "flex" },
              tabBarIcon: ({ color }) => (
                <CustomIcon 
                name={"Supplier"}
                color={color}
                size={30}
              />
                      )
          }}
      /> 
    </Tab.Navigator>
  );
}
export default DashboardTab;