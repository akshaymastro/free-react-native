import * as Ad from "../actionTypes/AdActionTypes";
import * as AdAPI from "../../services/Ad";

export const createAd = (params, token) => async (dispatch) => {
  const res = await AdAPI.createAd(params, token);
  dispatch({
    type: Ad.ADD_AD,
    payload: res.data,
  });
  return res.data;
};

export const getUserAd = (token) => async (dispatch) => {
  const res = await AdAPI.getUserAd(token);
  dispatch({
    type: Ad.GET_USER_AD,
    payload: res.data,
  });
  return res.data;
};

export const getAdById = (id, token) => async (dispatch) => {
  const res = await AdAPI.getAdById(id, token);
  dispatch({
    type: Ad.GET_AD_BY_ID,
    payload: res.data,
  });
  return res.data;
};

export const editAd = (id, ad, token) => async (dispatch) => {
  const res = await AdAPI.editAd(id, ad, token);
  dispatch({
    type: Ad.UPDATE_AD,
    payload: res.data,
  });
  return res.data;
};
