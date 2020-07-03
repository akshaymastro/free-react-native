import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
} from "react-native";
import { UserStyle } from "../styles/UserStyle";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default (props) => {
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 40, y: 0 }}
      contentContainerStyle={UserStyle.sigInView}
      // scrollEnabled={false}
      // extraScrollHeight={40}
      scrollEnabled={true}
    >
      <TouchableOpacity style={UserStyle.socialButton}>
        <Image
          source={require("../../assets/google.png")}
          style={UserStyle.icon}
        />
        <Text style={UserStyle.textStyle}>Sign in With Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={UserStyle.socialButton}>
        <Image source={require("../../assets/fb.png")} style={UserStyle.icon} />
        <Text style={UserStyle.textStyle}>Sign in With Facebook</Text>
      </TouchableOpacity>
      <Text style={UserStyle.ORtextStyle}>Or</Text>
      <View style={UserStyle.formStyle}>
        <View style={UserStyle.textInputContiner}>
          <Image
            source={require("../../assets/user.png")}
            style={UserStyle.textFieldIcon}
          />

          <TextInput
            style={UserStyle.textInput}
            placeholder="Username"
            placeholderTextColor="#000"
          />
        </View>
        <View style={UserStyle.textInputContiner}>
          <Image
            source={require("../../assets/lock.png")}
            style={UserStyle.textFieldIcon}
          />
          <TextInput
            style={UserStyle.textInput}
            placeholder="Password"
            placeholderTextColor="#000"
          />
        </View>
        <TouchableOpacity
          style={UserStyle.buttonStyle}
          onPress={() => navigation.navigate("Home")}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};
