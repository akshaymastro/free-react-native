import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpSignIn from "../Screens/SignUpSignIn";
import Home from "../Screens/Home";
import Category from "../Screens/Category";
const SignUpSignInStackNavigator = createStackNavigator();

const UserNavigator = () => {
  return (
    <SignUpSignInStackNavigator.Navigator initialRouteName="SignUpSignIn">
      <SignUpSignInStackNavigator.Screen
        name="SignUpSignIn"
        component={SignUpSignIn}
        options={{ headerShown: false }}
      />

      <SignUpSignInStackNavigator.Screen name="Home" component={Home} />
      <SignUpSignInStackNavigator.Screen name="Category" component={Category} />
    </SignUpSignInStackNavigator.Navigator>
  );
};

const AppContainer = () => {
  return (
    <NavigationContainer>
      <UserNavigator />
    </NavigationContainer>
  );
};

export default AppContainer;
