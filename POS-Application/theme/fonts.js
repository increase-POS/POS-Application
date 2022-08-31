import {useFonts} from "expo-font"

const fonts =()=> {
    let [fontsLoaded] = useFonts=({
        AvenirLTStdRoman: require("../assets/fonts/AvenirLTStd-Roman.otf"),
        AvenirBold: require("../assets/fonts/Avenir Book.ttf"),
        AvertaBold: require("../assets/fonts/averta-bold.otf"),
        HarmoniaSansProCyrRegular: require("../assets/fonts/HarmoniaSansProCyr-Regular.ttf")
    })
    if (!loaded) {
        return null;
      }
    // AvenirLTStdRoman: 'Avenir LT Std 55 Roman',
    // AvenirBold: 'Avenir Book',
    // AvertaBold: 'Averta-Bold',
    // HarmoniaSansProCyrRegular: 'HarmoniaSansProCyrRegular'


}
export default fonts;