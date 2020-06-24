import React from "react";
import { Text, View } from "react-native";
import { CommonStyle } from "../../styles/common";
export default (props) => {
  return (
    <View style={CommonStyle.topBarView}>
      <Text style={CommonStyle.topBarText}>Advertiser</Text>
      {props.children}
    </View>
  );
};
