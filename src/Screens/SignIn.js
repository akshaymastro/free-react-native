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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default (navigation) => {
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 20, y: 0 }}
      contentContainerStyle={UserStyle.sigInView}
      scrollEnabled={false}
    >
      <TouchableOpacity style={UserStyle.socialButton}>
        <Image
          source={require("../../assets/google.png")}
          style={UserStyle.icon}
        />
        <Text style={UserStyle.textStyle}>SignIn With Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={UserStyle.socialButton}>
        <Image source={require("../../assets/fb.png")} style={UserStyle.icon} />
        <Text style={UserStyle.textStyle}>SignIn With Facebook</Text>
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
        <TouchableOpacity onPress={() => navigation.navigate('HomeRoute')} style={UserStyle.buttonStyle}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};
