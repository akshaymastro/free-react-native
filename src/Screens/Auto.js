import React from "react";
import { AutoVariable } from "../utils/common";
import Grid from "../Components/Wrapper/flatList";

const Auto = (props) => {
  return <Grid dataArray={AutoVariable} category={true} {...props} />;
};

export default Auto;
