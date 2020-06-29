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

import ToggleSwitch from "toggle-switch-react-native"

// ios-arrow-forward

const Settings = (props) => {
    return (
        <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 20, y: 0 }}
        scrollEnabled={false}
        contentContainerStyle={styles.topContainer}
        >
            <TouchableOpacity style={styles.container}>
                <View>
                <Text style={styles.textLable}>Email</Text>
                </View>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                <Text style={styles.textLable1}>name@email.com</Text>
                <Ionicons name="ios-arrow-forward" size={30} color="#475c98"/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
                <View>
                <Text style={styles.textLable}>Password</Text>
                </View>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                <Text style={styles.textLable1}>********</Text>
                <Ionicons name="ios-arrow-forward" size={30} color="#475c98"/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.textLable}>Privacy Policy</Text>
                <Ionicons name="ios-arrow-forward" size={30} color="#475c98"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.textLable}>Terms of service</Text>
                <Ionicons name="ios-arrow-forward" size={30} color="#475c98"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
                <View style={{justifyContent:"center", alignItems:"center"}}>
                    <Text style={styles.textLable}>Notification</Text>
                </View>
                <View style={{alignItems:"center"}}>
                <ToggleSwitch
                    isOn={false}
                    onColor="#475c98"
                    offColor="#b6bfdc"
                    labelStyle={{ color: "black", fontWeight: "900" }}
                    size="small"
                    onToggle={isOn => (isOn)}
                />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomContainer}>
                <Text style={styles.bottomTextLable}>Delete Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomContainer}>
                <Text style={styles.bottomTextLable}>Logout</Text>
            </TouchableOpacity>


        </KeyboardAwareScrollView>
    )
  };


export default Settings;

const styles = StyleSheet.create({
    topContainer:{
        padding:10
        // flex: 1,
        // flexDirection:"column"
        // justifyContent: "center",
        // alignItems: "center",
    },
    container: {
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10
    },
    textLable:{
        color:"#475c98",
        fontWeight:"bold"
    },
    textLable1:{
        color:"#475c98",
    },
    bottomContainer:{
        paddingTop:40,
        paddingLeft:20,
        paddingRight:20
    },
    bottomTextLable:{
        color: "#b6bfdc",
        fontWeight:"bold"
    }

});

// 