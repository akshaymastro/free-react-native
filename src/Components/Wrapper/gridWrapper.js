import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export default function GridTemplate(props) {
  console.log(props, "propsssss12");
  return (
    <View style={styles.gridItem}>
      {props.category ? (
        <TouchableOpacity
          style={styles.containerTab}
          onPress={() => props.navigation.navigate(props.path)}
        >
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryText}>{props.name}</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => props.navigation.navigate(props.path)}
        >
          <Image
            source={props.image}
            style={styles.item}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap",
    overflow: "hidden",
    margin: 2,
  },
  imageContainer: {
    alignItems: "center",
  },
  item: {
    width: responsiveWidth(30),
    height: responsiveHeight(20),
  },
  containerTab: {
    flex: 1,
    alignItems: "center",
    width: responsiveWidth(30),
    height: responsiveHeight(15),
  },
  categoryText: {
    textAlign: "center",
    color: "white",
  },
  categoryContainer: {
    width: responsiveWidth(30),
    height: responsiveHeight(15),
    backgroundColor: "#3275df",
    justifyContent: "center",
    alignItems: "center",
  },
});
