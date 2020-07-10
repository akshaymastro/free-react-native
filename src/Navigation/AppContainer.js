import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpSignIn from "../Screens/SignUpSignIn";
import Home from "../Screens/Home";
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
import ChatHome from "../Screens/ChatHome";
import Notifications from "../Screens/Notifications";
import AdPosted from "../Screens/AdPosted";
import YourAds from "../Screens/YourAds";
import ChatScreen from "../Screens/chatScreen";
import Map from "../Screens/Map";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import StartupScreen from "../StartUpScreen";

const StackNav = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeRoute = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "#3b75df",
          },
        }}
      />
      <StackNav.Screen
        name="Category"
        component={Category}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "#3b75df",
          },
          headerTintColor: "#fff",
          headerTitle: "Sell",
        }}
      />
      <StackNav.Screen
        name="Electroics"
        component={Electroics}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#3b75df",
          },
          headerTintColor: "#fff",
          headerTitle: "Electroics",
        }}
      />
      <StackNav.Screen
        name="Kids"
        component={Kids}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#3b75df",
          },
          headerTintColor: "#fff",
        }}
      />
      <StackNav.Screen
        name="Auto"
        component={Auto}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#3b75df",
          },
          headerTintColor: "#fff",
        }}
      />
      <StackNav.Screen
        name="Services"
        component={Services}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#3b75df",
          },
          headerTintColor: "#fff",
        }}
      />
      <StackNav.Screen
        name="Housing"
        component={Housing}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#3b75df",
          },
          headerTintColor: "#fff",
        }}
      />
      <StackNav.Screen
        name="EditAd"
        component={EditAd}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#3b75df",
          },
          headerTintColor: "#fff",
          headerTitle: "Edit Ad",
          headerLeft: null,
        }}
      />
      <StackNav.Screen
        name="NewAd"
        component={NewAd}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#3b75df",
          },
          headerTintColor: "#fff",
          headerTitle: "New Ad",
        }}
      />
      <StackNav.Screen
        name="AdDetails"
        component={AdDetails}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#3b75df",
          },
          headerTintColor: "#fff",
          headerTitle: "Ad Details",
        }}
      />
      <StackNav.Screen
        name="AdPosted"
        component={AdPosted}
        options={{
          headerShown: false,
        }}
      />
      <StackNav.Screen
        name="YourAds"
        component={YourAds}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#3b75df",
          },
          headerTintColor: "#fff",
          headerTitle: "Your Ads",
        }}
      />
      <StackNav.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#3b75df",
          },
          headerTintColor: "#fff",
          headerLeft: null,
        }}
      />
      <StackNav.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#3b75df",
          },
          headerTintColor: "#fff",
        }}
      />
    </StackNav.Navigator>
  );
};

const LocationRoute = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="Map"
        component={Map}
        options={{ headerShown: false }}
      />
    </StackNav.Navigator>
  );
};

const MessageRoute = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="ChatHome"
        component={ChatHome}
        options={{
          headerShown: false,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#3b75df",
          },
          headerTintColor: "#fff",
        }}
      />
      <StackNav.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#3b75df",
          },
          headerTintColor: "#fff",
          headerTitle: "Alice",
        }}
      />
    </StackNav.Navigator>
  );
};

const TabRoute = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Location") {
            iconName = "map-marker";
          } else {
            iconName = "chat";
          }

          return (
            <MaterialCommunityIcons name={iconName} size={35} color={color} />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeRoute} />
      <Tab.Screen name="Location" component={LocationRoute} />
      <Tab.Screen name="Message" component={MessageRoute} />
    </Tab.Navigator>
  );
};

const MainRoute = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="StartupScreen"
        component={StartupScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name="SignUpSignIn"
        component={SignUpSignIn}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name="Home"
        component={TabRoute}
        options={{ headerShown: false }}
      />
    </StackNav.Navigator>
  );
};

const AppContainer = () => {
  return (
    <NavigationContainer>
      <MainRoute />
    </NavigationContainer>
  );
};

export default AppContainer;
