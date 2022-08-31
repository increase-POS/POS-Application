import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";

const Icon = createIconSetFromIcoMoon(
  require("../assets/icomoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

const CustomIcon = (props) => {
  const [fontsLoaded] = useFonts({
    IcoMoon: require("../assets/icomoon/icomoon.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{width:props.size , height: props.size, }}>
      <Icon
        name={props.name}
        size={props.size}
        color={props.color}
      />
    </View>
  );
};

export default CustomIcon;
