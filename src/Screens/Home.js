import * as React from "react";
import { homeVariable } from "../utils/common";
import Grid from "../Components/Wrapper/flatList";
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

import { FontAwesome } from "@expo/vector-icons";
import {
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";

import { useNavigation } from "@react-navigation/native";

const Home = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.topContainer}>
      <View style={styles.container}>
        <TouchableOpacity>
          <FontAwesome name="bars" size={30} color="#fff" />
        </TouchableOpacity>
        <View>
          <Text style={{ color: "#fff", fontSize: 19, fontWeight: "bold" }}>
            Home
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
          <FontAwesome name="bell-o" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <Grid dataArray={homeVariable} category={false} {...props} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#3b75df",
    alignItems: "center",
    width: responsiveWidth(100),
    height: responsiveHeight(11),
    borderWidth: 1,
    borderColor: "#707070",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
});
