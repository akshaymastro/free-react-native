import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from "../Screens/Homepage";
import Location from "../Screens/Location";
import Message from "../Screens/Message";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const StackNav = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeRoute = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="Homepage"
        component={Homepage}
        options={{ headerShown: false }}
      />
    </StackNav.Navigator>
  );
};
const LocationRoute = () => {
  return (
    <StackNav.Navigator >
      <StackNav.Screen
        name="Location"
        component={Location}
        options={{ headerShown: false }}
      />
    </StackNav.Navigator>
  );
};
const MessageRoute = () => {
  return (
    <StackNav.Navigator >
      <StackNav.Screen
        name="Message"
        component={Message}
        options={{ headerShown: false }}
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
     if (route.name === 'Home') {
       iconName = focused
       ? 'ios-home'
       : 'md-home';
     } else if (route.name === 'Location') {
       iconName = focused
       ? 'ios-map'
       : 'md-map';
     }
     else {
      iconName = focused
      ? 'ios-text'
      : 'md-text';
    }


return <Ionicons name={iconName} size={size} color={color}     />;
  },
})}
tabBarOptions={{
activeTintColor: 'blue',
inactiveTintColor: 'gray',
}}
>
      <Tab.Screen name="Home" component={HomeRoute} />
      <Tab.Screen name="Location" component={LocationRoute} />
      <Tab.Screen name="Message" component={MessageRoute} />
    </Tab.Navigator>
  );
};

const AppContainer = () => {
  return (
    <NavigationContainer>
      <TabRoute />
    </NavigationContainer>
  );
};

export default AppContainer;
