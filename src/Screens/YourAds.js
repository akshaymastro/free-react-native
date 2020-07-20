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

import CommanElement from "../Components/Wrapper/CommanElement";

import { getUserAd, getAdById } from "../redux/actions/AdActions";
import MainHeader from "../Components/Wrapper/MainHeader";

const YourAds = (props) => {
  let title = props.route.params.title;
  console.log(title, "props.route.params");
  const [showComponent, setComponent] = useState(false);

  useEffect(() => {
    const { getAdById, getUserAd } = props;
    async function Data() {
      const token = await AsyncStorage.getItem("token");
      await getUserAd(token);
    }
    Data();
  }, []);
  const data = props.adList?.data;
  return (
    <View style={styles.TopContainer}>
      <MainHeader title={title} />
      <View style={{ paddingTop: 25 }}>
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
      </View>
      <ScrollView>
        {!showComponent ? (
          <CommanElement dataArray={data} {...props} />
        ) : (
          <CommanElement dataArray={data} {...props} />
        )}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  adList: state.Ad.getUserAd,
});

const mapDispatchToProps = {
  getAdById,
  getUserAd,
};

export default connect(mapStateToProps, mapDispatchToProps)(YourAds);

const styles = StyleSheet.create({
  TopContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: 20,
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
