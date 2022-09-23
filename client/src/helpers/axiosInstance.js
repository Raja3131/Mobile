import axios from 'axios';
let headers = {};

const axiosInstance = axios.create({
  baseURL: 'http://10.0.2.2:5000/',
  headers: headers,
});

axiosInstance.interceptors.response.use(
  response =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  error => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    if (error.response.status === 403) {
      alert(error.response.message);
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },
);

export default axiosInstance;
