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
import { UserStyle } from "../styles/UserStyle";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const AdDetails = (props) => {
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 20, y: 0 }}
      scrollEnabled={false}
      contentContainerStyle={styles.topContainer}
    >
      <View style={styles.Container}>
        <View>
          <Text style={styles.textLable}>
            Rating<Text style={styles.textInnerLable}>:</Text>
          </Text>
          <Text style={styles.textLable}>
            Posted By<Text style={styles.textInnerLable}>: NickName</Text>
          </Text>
          <Text style={styles.textLable}>
            Locatoin<Text style={styles.textInnerLable}>: New York, USA</Text>
          </Text>
          <Text style={styles.textLable}>
            Discriptino<Text style={styles.textInnerLable}>: Discriptino</Text>
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Image
            source={require("../../assets/adDetails.png")}
            style={styles.imageContainer}
          />
        </View>
      </View>
      <View style={styles.restImagesContainer}>
        <TouchableOpacity style={styles.restImageStyle} />
        <TouchableOpacity style={styles.restImageStyle} />
        <TouchableOpacity style={styles.restImageStyle} />
      </View>

      <TouchableOpacity style={styles.buttonStyle}>
        <Text>DIRECT MESSAGE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text>GO TO CHEETROOM</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

export default AdDetails;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    alignItems: "center",
  },
  Container: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: responsiveHeight(15),
    width: responsiveWidth(30),
    borderRadius: 5,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
    height: responsiveHeight(8),
    width: responsiveWidth(80),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    backgroundColor: "#3b75df",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  restImagesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  restImageStyle: {
    height: responsiveHeight(15),
    width: responsiveWidth(28),
    backgroundColor: "#bdbdbd",
    borderRadius: 5,
    margin: 5,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  textLable: {
    fontWeight: "bold",
    marginTop: 10,
  },
  textInnerLable: {
    fontWeight: "normal",
  },
});
