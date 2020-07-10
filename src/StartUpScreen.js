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

const StartupScreen = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const tryLogin = async () => {
      // console.log("authenticate");
      let userData;
      const usersession = await Auth.currentUserInfo();
      // console.log(userData, "startupscreen");
      if (!usersession) {
        // console.log("not useredata");
        props.navigation.navigate("SignUpSignIn");
        return;
      } else {
        userData = await Auth.currentAuthenticatedUser();
        // console.log(userData, "useerrData");
        const { signInUserSession } = userData;
        await AsyncStorage.setItem("token", signInUserSession.idToken.jwtToken);
        if (
          Date.now() >= signInUserSession.idToken.payload.exp * 1000 ||
          !signInUserSession.idToken.jwtToken
        ) {
          // console.log("not exp");
          props.navigation.navigate("SignUpSignIn");
          return;
        }
        let exptime = moment(signInUserSession.idToken.payload.exp).format(
          "hh:mm:ss a"
        );
        let currenttime = new Date().getTime();
        let expirationTime = exptime - currenttime;
        props.navigation.navigate("Home");
        if (expirationTime === 0) {
          Auth.signOut();
          props.navigation("SignUpSignIn");
        }
      }
      //   dispatch(authActions.authenticate(userId, token, expirationTime));
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
