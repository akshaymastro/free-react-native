import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { UserStyle } from "../styles/UserStyle";

export default () => {
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 20, y: 0 }}
      contentContainerStyle={UserStyle.signUiView}
      scrollEnabled={false}
    >
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
        <View style={UserStyle.textInputContiner}>
          <Image
            source={require("../../assets/lock.png")}
            style={UserStyle.textFieldIcon}
          />
          <TextInput
            style={UserStyle.textInput}
            placeholder="Confirm Password"
            placeholderTextColor="#000"
          />
        </View>
        <TouchableOpacity style={UserStyle.buttonStyle}>
          <Text>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Already have an account?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};
