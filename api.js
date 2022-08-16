import axios from "axios";
import https from "https";

const baseURL = `https://www.otomoto.pl/ciezarowe/uzytkowe/mercedes-benz/od-+2014/q-actros?search%5Bfilter_enum_damaged%5D=0&search%5Border%5D=created_at+%3Adesc&page=`;
const timeout = 300000;

const validateStatus = (status) => status === 200;

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const instance = axios.create({
  baseURL,
  timeout,
  validateStatus,
  httpsAgent,
});

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export const GET = async (uri) => instance.get(uri);
