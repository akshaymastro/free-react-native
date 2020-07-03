import React from "react";
import { FlatList } from "react-native";
import GridTemplate from "./gridWrapper";

export default (props) => {
  return (
    <FlatList
      data={props.dataArray}
      columnWrapperStyle={
        {
          // alignItems: "flex-start",
        }
      }
      numColumns={3}
      contentContainerStyle={{
        justifyContent: "center",
        // marginTop: 10,
        margin: 10,
      }}
      renderItem={({ item }) => (
        <GridTemplate
          name={item.name}
          image={item.image}
          path={item.path}
          category={props.category}
          {...props}
        />
      )}
      keyExtractor={(item) => item.name}
    />
  );
};
