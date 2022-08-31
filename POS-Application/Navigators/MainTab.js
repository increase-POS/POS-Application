import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import { SvgUri } from 'react-native-svg';
//import CustomIcon from '../assets/fonts/CustomIcon.js'
import { createDrawerNavigator } from '@react-navigation/drawer';

import colors from "../theme/colors";
import CustomIcon from '../components/CustomIcon';

// Stacks
import HomeNavigator from "./HomeNavigator";
import ProductsNavigator from "./ProductsNavigator";
import UserNavigator from "./UserNavigator";
import DashboardNavigator from "./DashboardNavigator";

const Tab = createBottomTabNavigator();
const MainNavigator = createDrawerNavigator();

const Main = () => {
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
    <Tab.Screen name="Home" component={HomeNavigator} 
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
        {/* <Tab.Screen name="Dashboard" component={DashboardNavigator} 
                  options={{
                    tabBarStyle: { display: false ? "none" : "flex" },
                    tabBarIcon: ({ color }) => (
                      <IconFontAwesome 
                      name="pie-chart"
                      style= {{position: "relative"}}
                      color = {color}
                      size={30}
                      />

                        //     <SvgUri
                        //   width={35}
                        //   height={35}
                        //   color='red'
                        //   uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
                        // />
                        
                        //<SvgUri width="35" height="35" source={require('../assets/SVG/items.svg')} />

                        //<CustomIcon name='addFile' size={25} />

                  ) 
                }}
        /> */}
      <Tab.Screen name="Products" component={ProductsNavigator} 
            options={{
              tabBarStyle: { display: false ? "none" : "flex" },
              tabBarIcon: ({ color }) => (
                  // <IconFontAwesome 
                  //     name="sitemap"
                  //     style= {{position: "relative"}}
                  //     color = {color}
                  //     size={30}
                  //     />
                  <CustomIcon 
                          name={"items"}
                          color={color}
                          size={30}
                        />
                      )
          }}
      /> 
      <Tab.Screen name="User" component={UserNavigator} 
            options={{
              tabBarIcon: ({ color }) => (
                      <CustomIcon 
                      name={"user"}
                      color={color}
                      size={30}
                    />
                      )
          }}
      /> 
    </Tab.Navigator>
  );
}
export default Main;