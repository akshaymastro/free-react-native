import React from "react";
import { ElectroicsVariable } from "../utils/common";
import Grid from "../Components/Wrapper/flatList";

const Electroics = (props) => {
  return <Grid dataArray={ElectroicsVariable} category={true} {...props} />;
};

export default Electroics;
