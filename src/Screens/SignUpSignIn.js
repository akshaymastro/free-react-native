import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import TopBar from "../Components/Wrapper/Topbar";
import SignIn from "./SignIn";
import SignUp from "./Signup";
import { CommonStyle } from "../styles/common";
import { ScrollView } from "react-native-gesture-handler";

const FirstRoute = (props) => (
  <ScrollView>
    <SignIn {...props} />
  </ScrollView>
);

const SecondRoute = (props) => (
  <ScrollView>
    <SignUp {...props} />
  </ScrollView>
);

const initialLayout = { width: Dimensions.get("window").width };

export default function SignUpSignIn(props) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Sign In" },
    { key: "second", title: "Sign Up" },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        indicatorStyle={CommonStyle.tabIndicator}
        style={CommonStyle.tabbarStyle}
        labelStyle={CommonStyle.tabbarLable}
      />
    );
  };
  return (
    <TopBar>
      <TabView
        renderTabBar={(props) => renderTabBar(props)}
        navigationState={{ index, routes }}
        renderScene={(props) => renderScene(props)}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </TopBar>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
