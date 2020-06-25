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

const initialLayout = { width: Dimensions.get("window").width };

export default function GridTemplate(props) {
  return (
    <View style={styles.gridItem}>
      {props.category ? (
        <TouchableOpacity style={styles.containerTab}>
          <Text>{props.name}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => props.navigation.navigate(props.path)}>
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
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap",
    overflow: "hidden",
  },
  item: {
    width: responsiveWidth(30),
    height: responsiveHeight(20),
  },
  containerTab: {
    flex: 1,
    width: responsiveWidth(30),
    height: responsiveHeight(15),
  },
});
