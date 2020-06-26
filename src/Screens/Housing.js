import React from "react";
import { HousingVariable } from "../utils/common";
import Grid from "../Components/Wrapper/flatList";

const Housing = (props) => {
  return <Grid dataArray={HousingVariable} category={true} {...props} />;
};

export default Housing;
