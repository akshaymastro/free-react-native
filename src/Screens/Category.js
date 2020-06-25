import React from "react";
import { categoryVariable } from "../utils/common";
import Grid from "../Components/Wrapper/flatList";

const Category = () => {
  return <Grid dataArray={categoryVariable} category={true} />;
};

export default Category;
