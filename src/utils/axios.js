import axios from 'axios'

axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
 
axios.interceptors.response.use(function (response) {
    let {code,msg} = response.data
    console.log('响应拦截器',code,msg)
    return response;
  }, function (error) {
    return Promise.reject(error);
  });
export default axios;