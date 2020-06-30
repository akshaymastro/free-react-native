import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpSignIn from "../Screens/SignUpSignIn";
import Home from "../Screens/Home";
import Category from "../Screens/Category";
import UserNavigator from "./UserNavigator";
import MainScreensNavigator from "./MainScreensNavigator";
import ChatScreen from "../Screens/chatScreen";
import ChatHome from "../Screens/ChatHome";
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
          } else if (route.name === "Chat") {
            iconName = focused ? "chat" : "chat";
          }
          return <MaterialIcons name={iconName} size={30} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={MainScreensNavigator} />
      <Tab.Screen name="Chat" component={ChatHome} />
    </Tab.Navigator>
  );
};

export default BottomTabNAvigator;
