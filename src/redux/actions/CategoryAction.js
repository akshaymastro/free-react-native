import * as Category from "../actionTypes/CategoryActionTypes";
import * as CategoryAPI from "../../services/Category";

export const categoryList = () => async (dispatch) => {
  const res = await CategoryAPI.categoryList();
  dispatch({
    type: Category.CATEGORY_LIST,
    payload: res.data,
  });
  return res.data;
};

export const subCategoryList = () => async (dispatch) => {
  const res = await CategoryAPI.subCategoryList();
  dispatch({
    type: Category.SUBCATEGORY_LIST,
    payload: res.data,
  });
  return res.data;
};

export const getSubCategoryList = (categoryId) => async (dispatch) => {
  dispatch({
    type: Category.SUBCATEGORY_LIST_BY_CATEGORY_ID,
    payload: categoryId,
  });
};
