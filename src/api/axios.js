import axios from 'axios';
import qs from 'qs'
import router from '../router'
import {
  // Loading,
  Message
} from 'element-ui'

// axios.defaults.timeout = 5000;
// axios.defaults.baseURL = '/data/my';
// var loadinginstace
axios.defaults.retry = 1; //重试次数
axios.defaults.retryDelay = 1000; //重试延时
axios.defaults.shouldRetry = (error) => true; //重试条件，默认只要是错误都需要重试
// var loadinginstace
//http response 拦截器
axios.interceptors.response.use(
  response => {
    let config = response.config
    // loadinginstace.close()
    switch (response.data.state) {
      case 401:
      case 4011:
        axios.post("/data/my", {
          pathL: "/ap/refreshToken",
          refreshToken: window.localStorage.refreshToken
        }).then(res => {
          if (res.data.state === 0) {
            window.localStorage.accessToken = res.data.data.accessToken
            window.localStorage.refreshToken = res.data.data.refreshToken
            return axios(config);
          }
        })
        break;
      case 4013:  //用户被禁用
        window.localStorage.clear();
        window.sessionStorage.clear();
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        })
        break;

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
