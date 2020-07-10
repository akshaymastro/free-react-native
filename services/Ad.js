import { client } from "./secviceConfig";

export const createAd = (params, token) =>
  client.post("create-ad", params, {
    headers: {
      Authorization: token,
    },
  });

export const getUserAd = (token) =>
  client.get("get-user-ads", {
    headers: {
      Authorization: token,
    },
  });
export const getAdById = (id, token) =>
  client.get(`get-ads-byId/${id}`, {
    headers: {
      Authorization: token,
    },
  });

export const editAd = (id, ad, token) =>
  client.put(`get-ads-byId/${id}`, ad, {
    headers: {
      Authorization: token,
    },
  });
