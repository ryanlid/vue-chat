import axios from "axios";
const instance = axios.create({
  // baseURL: process.env.base_API,
  timeout: 5000
});

instance.interceptors.request.use(
  config => {
    // if (store.getter.token) {
    //   config.headers['X-Token'] = getToken()
    // }

    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    if (response.data.status === 0) {
      console.log(response);
      return response.data.data;
    } else {
      return Promise.reject(response.data);
    }
  },
  error => {
    console.warn("err: " + error);
    return Promise.reject(error);
  }
);

export default instance;
