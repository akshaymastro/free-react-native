import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  StyleSheet,
  CheckBox,
  ScrollView,
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

const NewAd = (props) => {
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();
  return (
    <ScrollView>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 20, y: 0 }}
        scrollEnabled={false}
        contentContainerStyle={{ flex: 1, marginTop: 10 }}
      >
        <View style={styles.topContainer}>
          <View style={styles.restImagesContainer}>
            <TouchableOpacity style={styles.restImageStyleCamra}>
              <Ionicons name="ios-camera" size={40} color="#3b75df" />
            </TouchableOpacity>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
            >
              <TouchableOpacity style={styles.restImageStyle} />
              <TouchableOpacity style={styles.restImageStyle} />
              <TouchableOpacity style={styles.restImageStyle} />
              <TouchableOpacity style={styles.restImageStyle} />
              <TouchableOpacity style={styles.restImageStyle} />
              <TouchableOpacity style={styles.restImageStyle} />
            </ScrollView>
          </View>
          <View style={styles.detailsStyle}>
            <TextInput
              placeholder="Product Name"
              placeholderTextColor="#dddddd"
            />
          </View>
          <View style={styles.detailsStyle}>
            <TextInput
              placeholder="Product Price"
              placeholderTextColor="#dddddd"
            />
          </View>
          <View style={styles.detailsStyle}>
            <TextInput placeholder="Condition" placeholderTextColor="#dddddd" />
          </View>
          <View style={styles.detailsStyle}>
            <TextInput
              placeholder="Discription"
              placeholderTextColor="#dddddd"
            />
          </View>
          <View style={styles.detailsStyle}>
            <TextInput placeholder="Location" placeholderTextColor="#dddddd" />
          </View>
          <View style={styles.checkBoxContainer}>
            <CheckBox
              style={styles.checkbox}
              value={isSelected}
              onValueChange={setSelection}
            />
            <Text style={styles.label}>Create Chat Room</Text>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconStyle}>
            <AntDesign name="delete" size={40} color="#3b75df" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconStyle}
            onPress={() => navigation.navigate("AdPosted")}
          >
            <AntDesign name="check" size={40} color="#3b75df" />
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

export default NewAd;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  restImagesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: responsiveWidth(91),
  },
  restImageStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: responsiveHeight(15),
    width: responsiveWidth(20),
    backgroundColor: "#bdbdbd",
    borderRadius: 5,
    margin: 5,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  restImageStyleCamra: {
    justifyContent: "center",
    alignItems: "center",
    height: responsiveHeight(15),
    width: responsiveWidth(20),
    borderRadius: 5,
    margin: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  iconContainer: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 30,
  },
  iconStyle: {
    alignItems: "center",
  },

  detailsStyle: {
    borderBottomColor: "#dddddd",
    width: responsiveWidth(90),
    borderBottomWidth: 2,
    padding: 10,
  },
  checkBoxContainer: {
    // flex:1,
    marginVertical: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    margin: 8,
    textAlign: "center",
  },
  checkbox: {
    alignItems: "center",
  },
});
