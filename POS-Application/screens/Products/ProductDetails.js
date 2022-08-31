import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ImageEditor,
  TextInput,
  Button,
  ScrollView
} from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

//import Input from '../../Shared/Form/Input'
import colors from "../../theme/colors";

const ProductDetails = (props) => {
  const item = props.route.params.item;

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
      
      
      <View style={styles.imageProductContainer}>
          <Image
            source={{
              uri: item.image
                ? item.image
                : "https://images.assetsdelivery.com/compings_v2/koblizeek/koblizeek1902/koblizeek190200055.jpg",
            }}
            style={styles.imageProduct}
          />
      </View>

        <Text
          style={{
            fontSize: 22,
            alignSelf:"flex-start",
            //fontfamily
            color: colors.thickGrey,
            fontWeight: "bold",
            marginHorizontal: 10,
            marginVertical:5
          }}
        >
          {item.name}
        </Text>
        <Text
            style={{
                fontSize: 18,
            alignSelf:"flex-start",
            //fontfamily
                color: colors.thickGrey,
                marginHorizontal: 10,
                marginVertical:5
              }}
            >
            {item.description}
        </Text>
        <View style={{ 
          width: width * 0.9,
            borderTopWidth: 1, 
            borderColor: colors.lightGrey,
            marginHorizontal: 10,
            marginVertical:5,
            }} />
        <View 
                style={{
                        justifyContent: "flex-start",
                        flexDirection: 'row',
                        alignItems:'center',
            alignSelf:"flex-start",
          }}
         >
            <Text
            style={{
                fontSize: 22,
                //fontfamily
                color: colors.thickGrey,
                fontWeight: "bold",
                marginHorizontal: 10,
                marginVertical:5
            }}
            >
            Price:
            </Text>
            <Text
                style={{
                    fontSize: 18,
                    //fontfamily
                    color: colors.thickGrey,
                    marginHorizontal: 10,
                marginVertical:5
                }}
                >
                {item.price} KWD
            </Text>
        </View>

        <View 
                style={{
                        justifyContent: "flex-start",
                        flexDirection: 'row',
                        alignItems:'center',
            alignSelf:"flex-start",
          }}
         >
            <TouchableOpacity>
                <View
                    style={[styles.buttonBox, {backgroundColor: colors.thickGrey, marginLeft: 10}]}
                >
                    <IconFontAwesome 
                        name="minus"
                        style= {{position: "relative"}}
                        color = {colors.white}
                        size={20}
                        />
                </View>
            </TouchableOpacity>
            <View
                    style={[styles.buttonBox, {backgroundColor: colors.white, alignItems:'center'}]}
                >
                    <TextInput 
                placeholder={"0"}
                //name={"email"}
                keyboardType="numeric"
                //id={"email"}
                //value={email}
                //onChangeText={(text) => setEmail(text.toLowerCase())}
                 />
                </View>
            <TouchableOpacity>
                <View
                    style={[styles.buttonBox, {backgroundColor: colors.thickGrey}]}
                >
                    <IconFontAwesome 
                        name="plus"
                        style= {{position: "relative"}}
                        color = {colors.white}
                        size={20}
                        />
                </View>
            </TouchableOpacity>
         </View>

        <View 
                style={{
                        justifyContent: "flex-start",
                        flexDirection: 'row',
                        alignItems:'center',
                    alignSelf:"flex-start",
                  }}
         >
            <Text
            style={{
                fontSize: 22,
                //fontfamily
                color: colors.thickGrey,
                fontWeight: "bold",
                marginHorizontal: 10,
                marginVertical:5
            }}
            >
            Total:
            </Text>
            <Text 
            style={{
                    fontSize: 20,
                    //fontfamily
                    color: colors.mainColor,
                    margin: 5,
                    fontWeight: '600'
                }}
            >
            {`${item.price} KWD`}
        </Text>
        </View>

        <TouchableOpacity>
                <View style={styles.buttonContainer}>
                   <Text style={styles.buttonText}>View Cart</Text>
                </View>
        </TouchableOpacity>

        <TouchableOpacity>
                <View style={styles.buttonContainer}>
                   <Text style={styles.buttonText}>Checkout</Text>
                </View>
        </TouchableOpacity>
        
        
        
       
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
    borderColor: colors.veryLightGrey,
    paddingVertical: 15,
  },
  scrollViewContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.85,
    paddingVertical: 5,
  },
  imageProductContainer: {
    //flex:1,
    alignSelf: 'center',
    // width: width < height ? width * 0.4 : height * 0.2,
    // height: width < height ?  width * 0.4  : height * 0.2,
    height: height * 0.25,
    width: "90%",
    //resizeMode: "cover",
    resizeMode: 'stretch',
    marginVertical: 20,
    borderRadius: 10,
  },
  imageProduct: {
    //flex:1,
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  buttonBox: {
    width: 35,
    height: 35,
    borderWidth: 1,
    borderColor: colors.thickGrey,
    marginHorizontal: 5,
    marginVertical:5,
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  buttonContainer: {
    //marginHorizontal: 10,
    marginVertical:5,
    backgroundColor: colors.thickGrey,
    width: width * 0.9,
    height: 35,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    
  },
  buttonText: {
    color: colors.white,
    fontSize: 18
    
  }
});

export default ProductDetails;
