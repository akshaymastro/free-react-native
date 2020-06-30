import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpSignIn from "../Screens/SignUpSignIn";
import Home, { ScreenOption } from "../Screens/Home";
import Category from "../Screens/Category";
import Electroics from "../Screens/Electroics";
import Kids from "../Screens/Kids";
import Auto from "../Screens/Auto";
import Services from "../Screens/Services";
import Housing from "../Screens/Housing";

import AdDetails from "../Screens/AdDetails";
import EditAd from "../Screens/EditAd";
import NewAd from "../Screens/NewAd";
import Settings from "../Screens/Settings";
import CommanElement from "../Components/Wrapper/CommanElement";
import ChatHome from "../Screens/ChatHome";
import Notifications from "../Screens/Notifications";
import BottomTabNAvigator from "./BottomTabNavigator";
import AdPosted from "../Screens/AdPosted";
import YourAds from "../Screens/YourAds";
import ChatScreen from "../Screens/chatScreen";

const ScreenNavigator = createStackNavigator();

const MainScreensNavigator = () => {
  return (
    <ScreenNavigator.Navigator>
      <ScreenNavigator.Screen name="Home" component={Home} />
      <ScreenNavigator.Screen name="Category" component={Category} />
      <ScreenNavigator.Screen name="Electroics" component={Electroics} />
      <ScreenNavigator.Screen name="Kids" component={Kids} />
      <ScreenNavigator.Screen name="Auto" component={Auto} />
      <ScreenNavigator.Screen name="Services" component={Services} />
      <ScreenNavigator.Screen name="Housing" component={Housing} />
      <ScreenNavigator.Screen name="AdDetails" component={AdDetails} />
      <ScreenNavigator.Screen name="EditAd" component={EditAd} />
      <ScreenNavigator.Screen name="NewAd" component={NewAd} />
      <ScreenNavigator.Screen name="Settings" component={Settings} />
      <ScreenNavigator.Screen name="ChatHome" component={ChatHome} />
      <ScreenNavigator.Screen name="Notifications" component={Notifications} />
      <ScreenNavigator.Screen name="YourAds" component={YourAds} />
      <ScreenNavigator.Screen name="AdPosted" component={AdPosted} />
      <ScreenNavigator.Screen name="ChatScreen" component={ChatScreen} />
    </ScreenNavigator.Navigator>
  );
};

export default MainScreensNavigator;
