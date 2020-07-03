import React, { useState } from "react";
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
import { messagesVariable, groupsVariable } from "../utils/common";
import { useNavigation } from "@react-navigation/native";
import CommanElement from "../Components/Wrapper/CommanElement";
import CommanElementWithImage from "../Components/Wrapper/CommanElementWithImage";

const ChatHome = (props) => {
  const [showComponent, setComponent] = useState(false);
  const [pressButton, setPressButton] = useState(false);
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
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setComponent(false)}>
          <Image
            source={require("../../assets/message.png")}
            style={[
              styles.imageStyle,
              { tintColor: !showComponent ? "#3b75df" : "#b2d2f4" },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setComponent(true)}>
          <Image
            source={require("../../assets/group.png")}
            style={[
              styles.imageStyle,
              { tintColor: !showComponent ? "#b2d2f4" : "#3b75df" },
            ]}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {!showComponent ? (
          <CommanElementWithImage dataArray={messagesVariable} {...props} />
        ) : (
          <CommanElementWithImage dataArray={groupsVariable} {...props} />
        )}
      </ScrollView>
    </View>
  );
};

export default ChatHome;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    width: responsiveWidth(100),
    height: responsiveHeight(10),
    backgroundColor: "#fff",
  },
  imageStyle: {
    width: responsiveWidth(15),
    height: responsiveHeight(5),
    resizeMode: "contain",
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
  },
  textInput: {
    height: responsiveHeight(4),
    width: responsiveWidth(75),
    textAlign: "left",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    borderRadius: 3,
  },
});
