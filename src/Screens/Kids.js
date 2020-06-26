import React from "react";
import { KidsVariable } from "../utils/common";
import Grid from "../Components/Wrapper/flatList";

const Kids = (props) => {
  return <Grid dataArray={KidsVariable} category={true} {...props} />;
};

export default Kids;
