import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { categoryVariable } from "../utils/common";
import Grid from "../Components/Wrapper/flatList";
import { categoryList } from "../redux/actions/CategoryAction";
import MainHeader from "../Components/Wrapper/MainHeader";
import { View } from "react-native";

const Category = (props) => {
  let title = props.route.params.title;
  useEffect(() => {
    const { categoryList } = props;
    async function Data() {
      await categoryList();
    }
    Data();
  }, []);
  return (
    <View>
      <MainHeader title={title} />
      <Grid
        dataArray={props.categoryListData?.data}
        category={true}
        {...props}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  categoryListData: state.CategoryList?.categoryList,
});

const mapDispatchToProps = {
  categoryList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
