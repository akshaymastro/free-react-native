import * as React from "react";
import { homeVariable } from "../utils/common";
import Grid from "../Components/Wrapper/flatList";



export default function Home(props) {
  return <Grid dataArray={homeVariable} category={false} {...props} />;
}

export const ScreenOption = {
  headerTitle: "Screen 1",
};
