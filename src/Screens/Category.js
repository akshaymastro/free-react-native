import React from "react";
import { categoryVariable } from "../utils/common";
import Grid from "../Components/Wrapper/flatList";

const Category = (props) => {
  return <Grid dataArray={categoryVariable} category={true} {...props} />;
};

export default Category;
