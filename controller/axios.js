import axios from "axios";

const getAxiosInstance = (BASE_URL, headers = {}) => {
  return {
    get(method, params) {
      return axios.get(`/${method}`, {
        baseURL: BASE_URL,
        params,
        headers,
      });
    },
    post(method, params) {
      return axios({
        method: "post",
        baseURL: BASE_URL,
        url: `/${method}`,
        data,
        headers,
      });
    },
  };
};

export { getAxiosInstance };