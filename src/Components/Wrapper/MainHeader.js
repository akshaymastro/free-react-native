import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import {
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";

import { useNavigation } from "@react-navigation/native";

const MainHeader = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>
      <View style={styles.headerTitle}>
        <Text
          style={{
            color: "#fff",
            fontSize: 19,
            fontWeight: "bold",
          }}
        >
          {props.title}
        </Text>
      </View>
      <MaterialIcons name="arrow-back" size={30} color="#3b75df" />
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#3b75df",
    alignItems: "center",
    width: responsiveWidth(100),
    height: responsiveHeight(11),
    borderWidth: 1,
    borderColor: "#707070",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
});
