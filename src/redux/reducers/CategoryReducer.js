import * as Category from "../actionTypes/CategoryActionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case Category.CATEGORY_LIST:
      return {
        ...state,
        categoryList: action.payload,
      };
    case Category.SUBCATEGORY_LIST:
      return {
        ...state,
        subCategoryList: action.payload,
      };
    case Category.SUBCATEGORY_LIST_BY_CATEGORY_ID:
      return {
        ...state,
        getSubCategoryByCategoryId: state.subCategoryList?.data.filter(
          (item, key) => {
            return item.categoryId === action.payload && item;
          }
        ),
      };
    default:
      return state;
  }
};
