import axios from '../utils/axios'
class Login {
    login(payload){
      let {username,password} = payload
      let url = '/hehe/login'
      return axios.post(url,{username,password})
    }
}
export default new Login()