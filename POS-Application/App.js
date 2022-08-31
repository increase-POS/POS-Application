import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import Toast from "react-native-toast-message";
// import * as SplashScreen from 'expo-splash-screen';
// import * as Font from 'expo-font';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Navigators
//import Main from './Navigators/Main'
import MainDrawer from './Navigators/MainDrawer'

// Screens
import LoadingScreen from './screens/Loading/LoadingScreen';
import Header  from './Shared/Header';


// const fetchFonts = () => {
// return Font.loadAsync({
//   'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
//   'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
// });
// }




export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000)
   }, [])

  //  const [fontLoaded , setFontLoaded] = useState(false);
  //   if(!fontLoaded){
  //     return(
  //         <SplashScreen 
  //           startAsync={fetchFonts} 
  //           onFinish={() => setFontLoaded(true)}
  //           onError={(error)=> console.warn(error)}
  //         />
  //       );
  //   }

  return (
    <NavigationContainer independent={true}>
      {loading? 
        <LoadingScreen />
        :
        <View style={{flex:1}}>
          {/* <Header/>
          <Main/> */}
          <MainDrawer/>
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
      }
    </NavigationContainer>
  );
}
