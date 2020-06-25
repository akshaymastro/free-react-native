import React from "react";
import { FlatList } from "react-native";
import GridTemplate from "./gridWrapper";

export default (props) => {
  return (
    <FlatList
      data={props.dataArray}
      numColumns={3}
      style={{ justifyContent: "center" }}
      renderItem={({ item }) => (
        <GridTemplate
          name={item.name}
          image={item.image}
          path={item.path}
          category={props.category}
        />
      )}
      keyExtractor={(item) => item.name}
    />
  );
};
