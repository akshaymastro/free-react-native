import React from "react";
import { ServicesVariable } from "../utils/common";
import Grid from "../Components/Wrapper/flatList";

const Services = (props) => {
  return <Grid dataArray={ServicesVariable} category={true} {...props} />;
};

export default Services;
