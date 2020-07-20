import React, { useEffect } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  AsyncStorage,
} from "react-native";
import { useDispatch } from "react-redux";
import moment from "moment";
import { Auth } from "aws-amplify";
import jwt_decode from "jwt-decode";

const StartupScreen = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const tryLogin = async () => {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        props.navigation.navigate("SignUpSignIn");
        return;
      } else {
        const decodedUser = await jwt_decode(token);
        if (Date.now() >= decodedUser.exp * 1000) {
          props.navigation.navigate("SignUpSignIn");
          return;
        }
        let expTime = moment(decodedUser.exp).format("hh:mm:ss a");
        let currentTime = new Date().getTime();
        let expirationTime = expTime - currentTime;
        props.navigation.navigate("Home");
        if (expirationTime === 0) {
          Auth.signOut();
          props.navigation("SignUpSignIn");
        }
      }
    };

    tryLogin();
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartupScreen;
