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
import { Searchbar } from "react-native-paper";

import colors from "../../theme/colors";
import images from "../../theme/images";

import categoriesData from "../../assets/data/categories.json";
import productsData from "../../assets/data/products.json";

const ProductsMain = (props) => {
  const renderCat = (item, index) => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 40,
          backgroundColor: colors.white,
          marginLeft: index == 0 ? 0 : 15,
          borderRadius: 15,
          borderWidth: 1,
          borderColor: colors.veryLightGrey,
        }}
      >
        <Text
          style={{
            //fontFamily
            fontSize: 20,
            //fontWeight: "bold",
            color: colors.thickGrey,
            marginHorizontal: 10,
            marginVertical: 5,
            //fontFamily: 'open-sans-bold'
          }}
        >
          {item.name}
        </Text>
      </View>
    );
  };
  const renderProduct = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() =>
          //console.log(item)
          props.navigation.navigate("ProductDetails", { item: item })
        }
        style={{
          marginLeft: index == 0 ? 0 : 15,
          width: 250,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.white,
            marginVertical: 5,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: colors.veryLightGrey,
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
          <View style={{ margin: 10, width: "90%" }}>
            <Text
              style={{
                fontSize: 22,
                //fontfamily
                color: colors.thickGrey,
                fontWeight: "bold",
              }}
            >
              {item.name}
            </Text>
            <View
              style={{
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  //fontfamily
                  color: colors.thickGrey,
                  margin: 5,
                  textDecorationLine: "line-through",
                }}
              >
                {item.price}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  //fontfamily
                  color: colors.mainColor,
                  margin: 5,
                  fontWeight: "600",
                }}
              >
                {`${item.price} KWD`}
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 25,
              width: 60,
              backgroundColor: colors.black,
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
              top: 25,
              right: 0,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                //fontfamily
                color: colors.white,
              }}
            >
              Sale
            </Text>
          </View>
          <View
            style={{
              height: 25,
              width: 60,
              backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: 60,
              right: 0,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                //fontfamily
                color: colors.gold,
              }}
            >
              New
            </Text>
          </View>
          <TouchableOpacity
          onPress={() => {alert("Add to cart")}}
          style={{
            height: 45,
            width: 45,
            //backgroundColor: colors.grey,
            //borderRadius: 90,
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            bottom: 20,
            right: 20,
          }}
          >
            <View
              style={{
                height: 45,
                width: 45,
                backgroundColor: colors.grey,
                borderRadius: 90,
                //position: "absolute",
                alignItems: "center",
                justifyContent: "center",
                //bottom: 20,
                //right: 20,
              }}
            >
              <IconFontAwesome
                name="shopping-cart"
                style={{ position: "relative" }}
                color={colors.white}
                size={25}
              />
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            width: width * 0.95,
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <View style={styles.searchbarContainer}>
            <Searchbar
              placeholder="Search"
              style={styles.searchbar}
              //onChangeText={onChangeSearch}
              //value={searchQuery}
            />
          </View>
          <View style={styles.catContainer}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categoriesData}
              renderItem={({ item, index }) => renderCat(item, index)}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={styles.productContainer}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={productsData}
              renderItem={({ item, index }) => renderProduct(item, index)}
              keyExtractor={(item, index) => index.toString()}
            />
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
    backgroundColor: colors.homeBackground,
    //margin: 20,
    //borderRadius: 15,
    //borderWidth: 1,
    //borderColor: colors.grey,
    //paddingVertical: 15,
  },
  scrollViewContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.95,
    paddingVertical: 5,
  },

  search: {
    height: 30,
    width: 30,
  },

  catContainer: {
    width: "100%",
    height: 40,
    margin: 10,
  },
  productContainer: {
    width: "100%",
    margin: 10,
  },
  popularHeader: {
    marginTop: 20,
    marginLeft: 15,
    fontWeight: "bold",
    fontSize: 16,
  },

  searchbarContainer: {
    width: "100%",
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.veryLightGrey,
  },
  searchbar: {
    borderRadius: 10,
  },
  imageProductContainer: {
    //flex:1,
    //height: '60%',
    height: height * 0.3,
    width: "100%",
    resizeMode: "cover",
    marginTop: 0,
    margin: 10,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  imageProduct: {
    //flex:1,
    height: "100%",
    width: "100%",
    resizeMode: "stretch",
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});

export default ProductsMain;
