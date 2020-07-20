import axios from "axios";

export const client = axios.create({
  baseURL: "https://hlc1y77yjf.execute-api.us-east-2.amazonaws.com/dev/",
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    if (response.data.responseCode === 401) {
      return message;
    } else if (response.data.responseCode === 400) {
      return response;
    } else {
      return response;
    }
  }
);
