import axios from 'axios';
import qs from 'qs'
import {
  // Loading,
  Message
} from 'element-ui'

// axios.defaults.timeout = 5000;
// axios.defaults.baseURL = '/data/my';

// var loadinginstace

//http request 拦截器
axios.interceptors.request.use(
  config => {
    // loadinginstace = Loading.service({
    //   fullscreen: true,
    //   target: document.querySelector('.loading')
    // });
    if (window.localStorage.accessToken) {
      config.headers.accessToken = window.localStorage.accessToken;
      config.headers.userId = window.localStorage.userId;
    }
    return config;
  },
  err => {
    Message({
      message: '加载超时',
      type: 'info',
      center: true
    })
    return Promise.reject(err);
  });


//http response 拦截器
axios.interceptors.response.use(
  response => {
    // loadinginstace.close()
    if (response.data.state === 401) {
      axios.post("/data/my", {
        pathL: "/ap/refreshToken",
        refreshToken: window.localStorage.refreshToken
      }).then(res => {
        if (res.data.state === 0) {
          window.localStorage.accessToken = res.data.data.accessToken
          window.localStorage.refreshToken = res.data.data.refreshToken
          window.location.reload();
        }
      })
    }
    return response;
  },
  error => {
    Message({
      message: '请求失败',
      type: 'info',
      center: true
    })
    return Promise.reject(error.response.data)
  });


let get = function (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}

let post = function (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}
export {
  axios,
  qs,
  get,
  post
}
