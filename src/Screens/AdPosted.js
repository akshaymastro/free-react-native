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

import CommanElement from "../Components/Wrapper/CommanElement";

const AdPosted = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.topContainer}>
      <View style={styles.container}>
        <View style={styles.container2}>
          <AntDesign name="checkcircle" size={80} color="#306aaa" />
          <Text style={styles.textStyle}>Congralatutions</Text>
          <Text style={styles.textStyle}>
            Your New Ad is posted successfully
          </Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("YourAds")}
          >
            <Text style={styles.textStyle}>OK</Text>
          </TouchableOpacity>
          <Text style={styles.textStyle}>Share</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/whatsapp.png")}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../assets/wechat.png")}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AdPosted;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#3d86e1",
    borderRadius: 5,
    width: responsiveWidth(80),
    height: responsiveHeight(80),
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 3,
  },
  container2: {
    flex: 0.9,
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 3,
    height: responsiveHeight(8),
    width: responsiveWidth(40),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    backgroundColor: "#3d86e1",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  imageStyle: {
    width: responsiveWidth(15),
    height: responsiveHeight(8),
  },
  textStyle: {
    color: "#fff",
    fontSize: 16,
  },
});
