import axios from '../utils/axios'
class Login {
    dels(userId){
      let url = '/hehe/manage/user/delete'
      return axios.post(url,userId)
    }
    add(data){
        let {username,password,phone,email}=data
      let url = '/hehe/manage/user/add'
      return axios.post(url,{username,password,phone,email})
    }
    list(){
      let url = '/hehe/manage/user/list'
      console.log(axios.get(url))
      return axios.get(url)
    }
}
export default new Login()