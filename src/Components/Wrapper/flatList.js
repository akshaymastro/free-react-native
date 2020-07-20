import React from "react";
import { FlatList, View } from "react-native";
import GridTemplate from "./gridWrapper";
import MainHeader from "../Wrapper/MainHeader";

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
      renderItem={({ item, key }) => (
        <GridTemplate
          categoryId={item.catId || item.categoryId}
          subCategoryId={item.subCatId}
          name={item.categoryName || item.subCategoryName || item.name}
          image={item.image}
          path={item.path}
          category={props.category}
          {...props}
        />
      )}
      keyExtractor={(item, key) => item.name}
    />
  );
};
