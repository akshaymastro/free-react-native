import * as React from "react";
import { View, StyleSheet, Dimensions,Text } from "react-native";
export default function Message() {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:25,fontWeight:'700'}}>this is message</Text>
    </View>
  );
}