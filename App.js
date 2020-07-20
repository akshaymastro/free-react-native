import React from "react";
import { Provider } from "react-redux";
import configurestore from "./src/redux/store";
import Amplify, { Auth } from "aws-amplify";
import { awsExport } from "./src/utils/awsexport";
import AppContainer from "./src/Navigation/AppContainer";
Amplify.configure(awsExport);

const store = configurestore();

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
