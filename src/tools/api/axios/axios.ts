
import axios from 'axios'
import {Iauth} from '../../authentication/interfaces'

const instance = axios.create({
    baseURL:"http://159.89.19.28/api"
});


let user =localStorage.getItem('user') 
if (user) {
    let userAuth = JSON.parse(user) as Iauth
    instance.defaults.headers.common['Content-Type']='multipart/form-data'
    instance.defaults.headers.common['Authorization']=`Bearer ${userAuth?.access_token}`
}
export default instance;

