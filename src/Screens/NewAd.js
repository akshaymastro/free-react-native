import React, { useState, useEffect } from "react";
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
  AsyncStorage,
} from "react-native";
import { connect } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ModalWrapper from "../Components/Wrapper/ModalWrapper";
import AdPosted from "./AdPosted";
import { createAd } from "../../redux/actions/AdActions";

const initialState = {
  productName: "",
  productPrice: 0,
  condition: "",
  adRating: 0,
  description: "",
};

const NewAd = (props) => {
  const { createAd } = props;
  const [formState, setFormState] = useState(initialState);
  const [isSelected, setSelection] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const navigation = useNavigation();

  const onHandleChange = (key, value) => {
    setFormState({ ...formState, [key]: value });
  };

  const onSubmit = async () => {
    const { createAd } = props;
    const token = await AsyncStorage.getItem("token");
    console.log(token, "userToken");
    console.log({ ...formState }, "formState");
    let params = {
      productName: formState.productName,
      productPrice: parseInt(formState.productPrice),
      condition: formState.condition,
      adRating: parseInt(formState.adRating),
      description: formState.description,
    };
    let adPost = await createAd(params, token);
    if (adPost.isSuccess) {
      setOpenModal(!openModal);
    }

    console.log(adPost, "vvvvvv");
  };

  // useEffect(() => {
  //   async function test() {
  //     const user_token = await AsyncStorage.getItem("token");
  //     return user_token;
  //     // console.log(user_token, "tokentoken");
  //   }
  //   test();
  // }, []);

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
              value={formState.productName}
              onChangeText={(val) => onHandleChange("productName", val)}
            />
          </View>
          <View style={styles.detailsStyle}>
            <TextInput
              keyboardType="numeric"
              placeholder="Product Price"
              placeholderTextColor="#dddddd"
              value={formState.productPrice}
              onChangeText={(val) => onHandleChange("productPrice", val)}
            />
          </View>
          <View style={styles.detailsStyle}>
            <TextInput
              placeholder="Condition"
              placeholderTextColor="#dddddd"
              value={formState.condition}
              onChangeText={(val) => onHandleChange("condition", val)}
            />
          </View>
          <View style={styles.detailsStyle}>
            <TextInput
              placeholder="Discription"
              placeholderTextColor="#dddddd"
              value={formState.description}
              onChangeText={(val) => onHandleChange("description", val)}
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
            onPress={onSubmit}
            // onPress={() => setOpenModal(!openModal)}
          >
            <AntDesign name="check" size={40} color="#3b75df" />
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      <ModalWrapper open={openModal} onClose={() => setOpenModal(!openModal)}>
        <AdPosted onClose={() => setOpenModal(!openModal)} />
      </ModalWrapper>
    </ScrollView>
  );
};

const mapDispatchToProps = {
  createAd,
};

export default connect(null, mapDispatchToProps)(NewAd);

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
