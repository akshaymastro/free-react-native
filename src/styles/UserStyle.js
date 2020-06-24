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
    borderColor: "#fafbf5",
    height: responsiveHeight(8),
    width: responsiveWidth(70),
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor:"#fafbf5",
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3
  },
  icon: {
    width: responsiveWidth(10),
    height: responsiveHeight(8),
    resizeMode: 'contain'
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
    borderColor: "#e3e3e3",
    height: responsiveHeight(8),
    width: responsiveWidth(70),
    marginVertical: 10,
    backgroundColor: "#fafbf5",
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3
  },
  textInput: {
    height: responsiveHeight(8),
    width: responsiveWidth(70),
    textAlign: "center",
    borderRadius: 10,
    marginVertical: 8,
  },
  buttonStyle: {
    justifyContent:"center",
    alignItems:"center",
    borderColor: "#fff",
    height: responsiveHeight(8),
    width: responsiveWidth(40),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius:10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3
  },
  textFieldIcon: {
    position: "absolute",
    left: 10,
    width: responsiveWidth(8),
    height: responsiveHeight(5),
  },
  formStyle: {
    justifyContent:"center",
    alignItems:"center",
  }
});
