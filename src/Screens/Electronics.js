import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ElectronicsVariable } from "../utils/common";
import { View } from "react-native";
import Grid from "../Components/Wrapper/flatList";
import {
  subCategoryList,
  getSubCategoryList,
} from "../redux/actions/CategoryAction";
import MainHeader from "../Components/Wrapper/MainHeader";
import NewAd from "../Screens/NewAd";
const Electronics = (props) => {
  const { title } = props.route.params;
  const { subCat } = props;
  useEffect(() => {
    const { categoryId } = props.route.params;
    async function Data() {
      const { subCategoryList, getSubCategoryList } = props;
      await subCategoryList();
      await getSubCategoryList(categoryId);
    }
    Data();
  }, []);

  return (
    <>
      {subCat?.length > 0 ? (
        <View>
          <MainHeader title={title} />
          <Grid dataArray={subCat} category={true} {...props} />
        </View>
      ) : (
        <View>
          <MainHeader title="New Ads" />
          <NewAd />
        </View>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  subCat: state.CategoryList.getSubCategoryByCategoryId,
});

const mapDispatchToProps = {
  subCategoryList,
  getSubCategoryList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Electronics);

// e2b2bb90-c4f4-11ea-81a2-455b50be4d59
