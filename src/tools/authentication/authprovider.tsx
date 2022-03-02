import 
{ ReactElement 
    ,createContext
    ,useEffect
    ,useState} 
from "react"
import {useLocation} from 'react-router-dom'
import axios from '../../tools/api/axios/axios'
import {Apis} from '../../tools/api/apis'
import {Iauth} from './interfaces'
import { json } from "stream/consumers"
import {Notify,severity} from '../notification/notification'
import { AxiosError } from "axios"
interface iAuth {user:Iauth,login:Function
           ,logOut:Function,img:string,setImg:Function,setUser:Function}

export const Auth= createContext<iAuth>({user:{name:'',user_id:-1,access_token:'',active:0,customer_id:-1}
                                    ,login:()=>{},logOut:()=>{},img:'',setImg:(str:string)=>{}
                                    ,setUser:()=>{}})
interface Istate {isNotified:boolean,message:string,severity:severity}
export const AuthProvider = ({children}:{children:ReactElement})=> {
const [user,setUser]= useState <Iauth>({name:'',access_token:'',active:0,user_id:-1,customer_id:-1})
const [img,setImg] =useState('')
const [not,setNot] =useState<Istate>({
    isNotified:false,
    message:'',
    severity:'success'
})

useEffect (()=>{

    let user =localStorage.getItem('user')
  
    if (user) {
    setUser(JSON.parse(user)as Iauth)
    }
},[])
const login = async (formData:{email:string,password:string})=>{
    console.log('log')
   let form = new FormData()
   form.append('email',formData.email)
   form.append('password',formData.password)
   await axios({url:Apis.Login
        ,data:form,
        method:'POST',
       headers:{'Content-Type':"multipart/form-data"}
    })
    .then((res:any) => {
        let {name,id,active,access_token,customer}= res.data.payload
        localStorage.setItem('user',JSON.stringify({name,user_id:id,customer_id:customer['id'],active,access_token}))
        setUser({name,user_id:id,active,access_token,customer_id:customer['id']})
        setNot(pre=>({...pre,isNotified:true,message:"أهلا وسهلا" , severity:'success'}))
    })
    .catch((err:AxiosError)=>{
        setNot(pre=>({...pre,isNotified:true,message:err.message , severity:'error'}))
    })
 
   
    
}
const logOut=()=>{
    localStorage.removeItem('user')
    setUser({name:'',user_id:-1,access_token:'',active:0,customer_id:-1})
    window.location.reload()
}

    return (
        <Auth.Provider value={{user,login,logOut,img,setImg,setUser}}>
        <>
       { children }
       {not.isNotified && (
           <Notify isNotified={not.isNotified}
            setIsNotified={()=>setNot(pre=>({...pre,isNotified:false}))}
            children={not.message}
            severity={not.severity}/>

       )}
            </>
        </Auth.Provider>
    )
}