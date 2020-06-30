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

const ChatHome = (props) => {
  const [showComponent, setComponent] = useState(false);
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setComponent(false)}>
          <Image
            source={require("../../assets/message.png")}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setComponent(true)}>
          <Image
            source={require("../../assets/group.png")}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {!showComponent ? (
          <CommanElement dataArray={messagesVariable} {...props} />
        ) : (
          <CommanElement dataArray={groupsVariable} {...props} />
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
    height: responsiveHeight(12),
    backgroundColor: "#fff",
  },
  imageStyle: {
    width: responsiveWidth(15),
    height: responsiveHeight(8),
    resizeMode: "contain",
  },
});
