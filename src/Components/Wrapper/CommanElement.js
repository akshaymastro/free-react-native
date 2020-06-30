import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import {
  Ionicons,
  SimpleLineIcons,
  FontAwesome,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import ToggleSwitch from "toggle-switch-react-native";

const CommanElement = (props) => {
  const navigation = useNavigation();
  console.log(props, "props");
  return (
    <View style={styles.topContainer}>
      {props.dataArray?.map((item) => (
        <TouchableOpacity
          style={styles.container}
          onPress={() => navigation.navigate(item.path)}
        >
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Image
              source={require("../../../assets/yourad.png")}
              style={styles.imageStyle}
            />
            <Text style={styles.textLable}>{item.name}</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.textLable1}>04:43 PM</Text>
            <AntDesign name="rightcircle" size={35} color="#81afe5" />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CommanElement;

const styles = StyleSheet.create({
  topContainer: {
    padding: 10,
    flex: 1,
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
    marginTop: 10,
    height: responsiveHeight(12),
    width: responsiveWidth(95),
    backgroundColor: "#fff",
  },
  textLable: {
    color: "#090909",
    fontWeight: "bold",
    paddingBottom: 10,
  },
  textLable1: {
    color: "#9c9c9c",
    paddingBottom: 10,
  },
  imageStyle: {
    width: responsiveWidth(15),
    height: responsiveHeight(8),
    resizeMode: "contain",
  },
});
