import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  AsyncStorage,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { connect } from "react-redux";

import { yourAdsVariable } from "../utils/common";

import CommanElement from "../Components/Wrapper/CommanElement";

import { getUserAd, getAdById } from "../../redux/actions/AdActions";

const YourAds = (props) => {
  const [showComponent, setComponent] = useState(false);

  useEffect(() => {
    const { getAdById, getUserAd } = props;
    async function Data() {
      const token = await AsyncStorage.getItem("token");
      console.log(token);
      const userdata = await getUserAd(token);
      console.log(userdata, "tokentoken");
    }
    Data();
  }, []);

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

// const mapStateToPropes = {

// };

const mapDispatchToProps = {
  getAdById,
  getUserAd,
};

export default connect(null, mapDispatchToProps)(YourAds);

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
