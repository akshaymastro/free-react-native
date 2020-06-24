import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";

const StackNav = createStackNavigator();

const StackRoute = () => {
  return (
    <StackNav.Navigator initialRouteName="Home">
      <StackNav.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </StackNav.Navigator>
  );
};

const AppContainer = () => {
  return (
    <NavigationContainer>
      <StackRoute />
    </NavigationContainer>
  );
};

export default AppContainer;
