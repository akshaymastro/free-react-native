import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  StyleSheet
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
    AntDesign
} from "@expo/vector-icons";

const EditAd = (props) => {
    return (
        <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 20, y: 20 }}
        scrollEnabled={true}
        contentContainerStyle={{flex:1, marginTop:10}}
        >
            <View style={styles.topContainer}>
            <View style={styles.textInputContiner}>
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <Text style={{textAlign:"left"}}>Name</Text>
                    <Text style={{textAlign:"right"}}>14 MAY 2020 7:30PM</Text>
                </View>
                <View style={styles.textInputContiner1}>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Ad Name"
                    placeholderTextColor="#000"
                    />
                </View>
            </View>
            <View style={styles.textInputContiner}>
                <View>
                    <Text style={{textAlign:"left"}}>ADDITIONAL DETAILS (OPTIONAL)</Text>
                </View>
                <View style={styles.textInputContiner1}>
                    <TextInput
                    style={styles.textInput}
                    placeholder="ADDITIONAL DETAILS"
                    placeholderTextColor="#000"
                    />
                </View>
            </View>
            <View style={styles.textInputContiner}>
                <View>
                    <Text style={{textAlign:"left"}}>LOCATION</Text>
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
                <Ionicons name="ios-camera" size= {40} color="#3b75df" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.restImageStyle} />
                <TouchableOpacity style={styles.restImageStyle} />
                <TouchableOpacity style={styles.restImageStyle} />
            </View>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.iconStyle} >
                    <AntDesign name="delete" size= {40} color="#3b75df" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconStyle} >
                    <AntDesign name="check" size= {40} color="#3b75df" />
                </TouchableOpacity>
            </View>

        </KeyboardAwareScrollView>
    )
  };


export default EditAd;

const styles = StyleSheet.create({
    topContainer:{
        flex:1,
        alignItems:"center",
        marginTop:10
    },
    textInputContiner: {
        paddingTop:10,
        flexDirection:"column",
      },
      textInputContiner1:{
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#e3e3e3",
        height: responsiveHeight(8),
        width: responsiveWidth(90),
        marginVertical: 10,
        backgroundColor: "#fafbf5",
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3
      },
      textInput: {
        textAlign:"center",
        marginHorizontal: 8
      },
      restImagesContainer: {
          flexDirection:"row",
          justifyContent: "center",
          alignItems:"center",
      },
      restImageStyle: {
        justifyContent:"center",
        alignItems:"center",
        height: responsiveHeight(15),
        width: responsiveWidth(20),
        backgroundColor:"#bdbdbd",
        borderRadius:5,
        margin:5,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3
      },
      restImageStyleCamra: {
        justifyContent:"center",
        alignItems:"center",
        height: responsiveHeight(15),
        width: responsiveWidth(20),
        borderRadius:5,
        margin:5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3
      },
      iconContainer: {
        flex:1,
        flexDirection:"row",
        justifyContent:'space-around',
        alignItems:"center"
      },
      iconStyle: {
        alignItems:'center'
      }
});