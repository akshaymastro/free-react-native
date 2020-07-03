import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

import { yourAdsVariable } from "../utils/common";

import CommanElement from "../Components/Wrapper/CommanElement";

const YourAds = (props) => {
  const [showComponent, setComponent] = useState(false);

  return (
    <View style={styles.TopContainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setComponent(false)}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>ALL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setComponent(true)}
          style={{ paddingHorizontal: 40 }}
        >
          <Text style={{ fontSize: 20 }}>TODAY</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {!showComponent ? (
          <CommanElement dataArray={yourAdsVariable} {...props} />
        ) : (
          <CommanElement dataArray={yourAdsVariable} {...props} />
        )}
      </ScrollView>
    </View>
  );
};

export default YourAds;

const styles = StyleSheet.create({
  TopContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  container: {
    flexDirection: "row",
    padding: 20,
    width: responsiveWidth(95),
    height: responsiveHeight(8),
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#d2d2d2",
    alignItems: "center",
  },
});
