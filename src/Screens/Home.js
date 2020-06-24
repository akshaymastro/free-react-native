import * as React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity,Text, Image} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { CommonStyle } from "../styles/common";
import {
    responsiveHeight,
    responsiveWidth,
  } from "react-native-responsive-dimensions";

const initialLayout = { width: Dimensions.get("window").width };

export default function Home() {

  return (
      <View style={styles.gridItem}>
          <TouchableOpacity >
          <Image
            source={require("../../assets/sell.png")}
            style={styles.item}
          />
          </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    gridItem: {
      flex: 2,
      justifyContent:"flex-start",
      alignItems:"flex-start",
      margin: 15,
      overflow: 'hidden'
    },
    item: {
        width: responsiveWidth(30),
        height: responsiveHeight(15),
        resizeMode: 'contain'
    },

  });
