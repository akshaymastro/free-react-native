import React from "react";
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
import { notificationsVariable } from "../utils/common";

const Map = (props) => {
  return (
    <View>
      <View style={styles.topcontainer}>
        <TouchableOpacity>
          <FontAwesome name="bars" size={30} color="#fff" />
        </TouchableOpacity>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            placeholderTextColor="#000"
          />
        </View>
        <TouchableOpacity>
          <FontAwesome name="bell-o" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <Image
        source={require("../../assets/map.png")}
        style={styles.imageStyle}
      />

      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/rightarrow.png")}
            style={styles.imageStyle2}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/leftarrow.png")}
            style={styles.imageStyle2}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  topcontainer: {
    flexDirection: "row",
    backgroundColor: "#3b75df",
    alignItems: "center",
    justifyContent: "space-between",
    width: responsiveWidth(100),
    height: responsiveHeight(11),
    borderWidth: 1,
    borderColor: "#707070",
    paddingHorizontal: 20,
    paddingTop: 30,
    // marginTop: 30,
  },
  textInput: {
    height: responsiveHeight(4),
    width: responsiveWidth(65),
    textAlign: "left",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    borderRadius: 3,
  },
});
