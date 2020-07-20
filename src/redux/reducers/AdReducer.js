import * as Ad from "../actionTypes/AdActionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case Ad.ADD_AD:
      return {
        ...state,
        createAd: action.payload,
      };
    case Ad.UPDATE_AD:
      return {
        ...state,
        editAd: action.payload,
      };
    case Ad.GET_EDIT_AD:
      return {
        ...state,
        getEditAdd: state.getUserAd?.data.find(
          (item, key) => item.id === action.payload && item
        ),
      };
    case Ad.GET_USER_AD:
      return {
        ...state,
        getUserAd: action.payload,
      };
    case Ad.GET_AD_BY_ID:
      return {
        ...state,
        getAdById: action.payload,
      };
    default:
      return state;
  }
};
