import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpSignIn from "../Screens/SignUpSignIn";
import Home from "../Screens/Home";
import Category from "../Screens/Category";
import UserNavigator from "./UserNavigator";
import MainScreensNavigator from "./MainScreensNavigator";
import {
  Ionicons,
  SimpleLineIcons,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabNAvigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={40} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "#3275df",
        inactiveTintColor: "#3275df",
      }}
    >
      <Tab.Screen name="Home" component={MainScreensNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNAvigator;
