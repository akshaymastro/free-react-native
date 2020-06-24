import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
export const UserStyle = StyleSheet.create({
  sigInView: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  socialButton: {
    flexDirection: "row",
    borderColor: "#000",
    borderWidth: 1,
    height: responsiveHeight(8),
    width: responsiveWidth(70),
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 30,
  },
  icon: {
    width: responsiveWidth(8),
    height: responsiveHeight(5),
    paddingRight: 40,
  },
  textStyle: {
    paddingLeft: 20,
    fontWeight: "bold",
  },
  ORtextStyle: {
    paddingVertical: 15,
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "uppercase",
  },
  textInputContiner: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#e3e3e3",
    height: responsiveHeight(8),
    width: responsiveWidth(70),
    borderRadius: 20,
    marginVertical: 10,
  },
  textInput: {
    height: responsiveHeight(8),
    width: responsiveWidth(70),
    textAlign: "center",
    borderRadius: 10,
    marginVertical: 8,
  },
  buttonStyle: {
    borderColor: "#e3e3e3",
    borderWidth: 2,
    height: responsiveHeight(8),
    width: responsiveWidth(70),
    backgroundColor: "#e3e3e3",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  textFieldIcon: {
    position: "absolute",
    left: 10,
    width: responsiveWidth(8),
    height: responsiveHeight(5),
  },
});
