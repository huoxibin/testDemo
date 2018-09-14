import axios from 'axios';
import qs from 'qs'
import router from '../router'
import {Message} from 'element-ui'

// axios.defaults.timeout = 5000;
// axios.defaults.baseURL = '/data/my';
// var loadinginstace

/*是否正在刷新的标志*/
window.isRefreshing = false;

axios.defaults.retry = 1; //重试次数
axios.defaults.retryDelay = 1000; //重试延时
axios.defaults.shouldRetry = (error) => true; //重试条件，默认只要是错误都需要重试
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
      config.headers.version = 'v1.2.0';
    }
    return config;
  },
  err => {
    Message({
      message: '加载超时',
      type: 'info',
      center: true
    });
    return Promise.reject(err);
  });


//http response 拦截器
axios.interceptors.response.use(
  response => {
    console.log(response)//里面很多内容：请求的各种参数配置；
    let config = response.config;
    console.log(config);//这是上次请求的各种配置：请求头，方式，地址，参数等等等等，可打印看一下；
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
            router.go(0)//刷新页面
            return axios(config);//再一次重新请求，config是上一次请求的各种配置！俗称（请求挂起）
          }
        }).catch(err => {
            window.localStorage.clear();
            window.sessionStorage.clear();
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath
              }
            })
      });
        break;
      case 4013:  //用户被禁用
        window.localStorage.clear();
        window.sessionStorage.clear();
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        });
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
};

let post = function (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
};
export {
  axios,
  qs,
  get,
  post
}



/*
window.isRefreshing = false; //是否正在刷新的标志
let refreshSubscribers = []; //这是用来 存储 请求 的数组
function getRefreshToken(){  //获取刷新token请求的token
  return JSON.parse(localStorage.auth).refresh_token
}
function subscribeTokenRefresh(cb){ //push所有请求到数组中
  refreshSubscribers.push(cb)
}
function onRrefreshed(token){ //刷新请求（ refreshSubscribers 数组中的请求得到新的token之后会自执行，用新的token去请求数据
  refreshSubscribers.map(cb => cb(token))
}
/!*请求拦截器*!/
ajax.interceptors.request.use(
  config => {
    const authTmp = localStorage.auth;
    /!*判断是否已登录*!/
    if (authTmp){
      let auth = JSON.parse(authTmp);
      /!*判断auth是否存在*!/
      if(auth){
        /!*在请求头中添加token类型、token*!/
        config.headers.Authorization = auth.token_type + ' ' + auth.token
        /!*判断刷新token请求的refresh_token是否过期*!/
        if (util.isRefreshTokenExpired()) {
          alert('刷新token过期，请重新登录');
          /!*清除本地保存的auth*!/
          localStorage.removeItem('auth');
          window.location.href = '#/login';
          return
        }
        /!*判断token是否将要过期*!/
        if (util.isTokenExpired() && config.url.indexOf('admin/auth/current') === -1) {
          /!*判断是否正在刷新*!/
          if (!window.isRefreshing) {
            /!*将刷新token的标志置为true*!/
            window.isRefreshing = true;
            /!*发起刷新token的请求*!/
            apiList.refreshToken({refresh_token: getRefreshToken()}).then(res => {
              /!*将标志置为false*!/
              window.isRefreshing = false;
              /!*成功刷新token*!/
              config.headers.Authorization = res.data.data.token_type + ' ' + res.data.data.token;
              /!*更新auth*!/
              localStorage.setItem('auth', JSON.stringify(res.data.data));
              /!*执行数组里的函数,重新发起被挂起的请求*!/
              onRrefreshed(res.data.data.token);
              /!*执行onRefreshed函数后清空数组中保存的请求*!/
              refreshSubscribers = []
            }).catch(err=>{
              alert(err.response.data.message);
              /!*清除本地保存的auth*!/
              // localStorage.removeItem('auth')
              window.location.href = '#/login'
            })
          }
          /!*把请求(token)=>{....}都push到一个数组中*!/
          let retry = new Promise((resolve, reject) => {
            /!*(token) => {...}这个函数就是回调函数*!/
            subscribeTokenRefresh((token) => {
              config.headers.Authorization = 'Bearer ' + token;
              /!*将请求挂起*!/
              resolve(config)
            })
          })
        }
      }
    }
  }
);

*/




















