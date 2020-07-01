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
  topContainer: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
  },
  imageStyle: {
    // resizeMode: "cover",
    // height: responsiveHeight(5),
    // width: responsiveWidth(8),
  },
  imageStyle2: {
    // height: responsiveHeight(5),
    // width: responsiveWidth(8),
  },
});
