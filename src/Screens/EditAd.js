import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  AsyncStorage,
  Alert,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { connect } from "react-redux";
import { getEditData, editAd } from "../redux/actions/AdActions";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ModalWrapper from "../Components/Wrapper/ModalWrapper";
import AdPosted from "./AdPosted";

const EditAd = (props) => {
  const navigation = useNavigation();
  const itemData = props?.route?.params?.itemData;
  const initialState = {
    productName: itemData.productName,
    productPrice: itemData.productPrice,
    condition: itemData.condition,
    adRating: itemData.adRating,
    description: itemData.description,
  };
  const [formState, setFormState] = useState(initialState);
  const [openModal, setOpenModal] = useState(false);

  const onHandleChange = (key, value) => {
    setFormState({ ...formState, [key]: value });
  };

  // useEffect(() => {
  //   const id = props?.route?.params?.id;
  //   console.log(id, "id");
  //   async function getData() {
  //     await props.getEditData(id);
  //     console.log();
  //     setFormState({ ...formState });
  //   }
  //   getData();
  // }, []);

  const onHandleSubmit = async () => {
    const { editAd } = props;
    // const token = await AsyncStorage.getItem("token");
    const id = await itemData.id;
    let params = {
      productName: formState.productName,
      productPrice: parseInt(formState.productPrice),
      condition: formState.condition,
      adRating: parseInt(formState.adRating),
      description: formState.description,
    };
    let adData = await editAd(id, params);
    if (adData.isSuccess) {
      setOpenModal(!openModal);
    }
    console.log(error, "error");
    Alert.alert(error.message);
  };
  return (
    <ScrollView>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 20, y: 0 }}
        scrollEnabled={true}
        contentContainerStyle={{ marginTop: 10 }}
      >
        <View style={styles.topContainer}>
          <View style={styles.textInputContiner}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ textAlign: "left" }}>Name</Text>
              <Text style={{ textAlign: "right" }}>14 MAY 2020 7:30PM</Text>
            </View>
            <View style={styles.textInputContiner1}>
              <TextInput
                style={styles.textInput}
                value={formState.productName}
                onChangeText={(value) => onHandleChange("productName", value)}
                placeholder="Ad Name"
                placeholderTextColor="#000"
              />
            </View>
          </View>
          <View style={styles.textInputContiner}>
            <View>
              <Text style={{ textAlign: "left" }}>
                ADDITIONAL DETAILS (OPTIONAL)
              </Text>
            </View>
            <View style={styles.textInputContiner1}>
              <TextInput
                style={styles.textInput}
                value={formState.description}
                onChangeText={(value) => onHandleChange("description", value)}
                placeholder="ADDITIONAL DETAILS"
                placeholderTextColor="#000"
              />
            </View>
          </View>
          <View style={styles.textInputContiner}>
            <View>
              <Text style={{ textAlign: "left" }}>LOCATION</Text>
            </View>
            <View style={styles.textInputContiner1}>
              <TextInput
                style={styles.textInput}
                placeholder="LOCATION"
                placeholderTextColor="#000"
              />
            </View>
          </View>
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
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.iconStyle}
            onPress={() => navigation.navigate("YourAds")}
          >
            <AntDesign name="delete" size={40} color="#3b75df" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconStyle} onPress={onHandleSubmit}>
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
const mapStateToProps = (state) => ({
  ad: state.Ad,
});
const mapDispatchToProps = {
  getEditData,
  editAd,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAd);

const styles = StyleSheet.create({
  topContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 10,
  },
  textInputContiner: {
    paddingTop: 10,
    flexDirection: "column",
  },
  textInputContiner1: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#e3e3e3",
    height: responsiveHeight(8),
    width: responsiveWidth(90),
    marginVertical: 10,
    backgroundColor: "#fafbf5",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  textInput: {
    textAlign: "center",
    marginHorizontal: 8,
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
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 40,
  },
  iconStyle: {
    alignItems: "center",
  },
});
