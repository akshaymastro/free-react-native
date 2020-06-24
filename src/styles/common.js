import { StyleSheet } from "react-native";

export const CommonStyle = StyleSheet.create({
  topBarView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginVertical: 20,
  },
  topBarText: {
    fontSize: 40,
    color: "#000",
    padding: 20,
    textAlign: "center",
  },
  tabIndicator: { backgroundColor: "black" },
  tabbarStyle: { backgroundColor: "white" },
  tabbarLable: { color: "black" },
});
