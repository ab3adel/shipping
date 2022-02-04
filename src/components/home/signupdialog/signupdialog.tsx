import {useState,useContext} from 'react'
import './signupdialog.scss'
import 
 {Dialog
  ,DialogContent
  ,DialogActions
  ,Button
 ,OutlinedInput} 
from '@mui/material'
import {InputField} from '../../../tools/formfields/input/inputfield'
import {Auth} from '../../../tools/authentication/authprovider'
import {useNavigate} from 'react-router-dom'
import {dummy,isEmail} from '../../../tools/validations/validations'
interface Iprops {open:boolean,setOpen:Function}
interface Ifields {[key:string]:string|boolean}
export const SignUpDialog =({open,setOpen}:Iprops) =>{
const [formFields,setFormFields]=useState<Ifields>({Email:"",EmailError:false
                                                   ,Password:"",PasswordError:false})
let {login} =useContext(Auth)
const navigate= useNavigate()
const setFormField = (name:string,value:string,error:string) =>{
    let fields={...formFields}
    fields[name]=value
    fields[`${name}Error`]=error
    setFormFields(fields)
}
const Login= () =>{
    
    setOpen(false)
    let form = new FormData()

    login({email:formFields['Email'],password:formFields['Password']})
    let fields={...formFields}
   /* fields={Email:"",EmailError:false
                ,Password:"",PasswordError:false}
    setFormFields(fields) */
}
const signUp= ()=>{
    navigate('/signup')
    setOpen(false)
}
    return (
        <Dialog 
         open={open}
         onClose={()=>setOpen(false)}>
             <DialogContent>
                 <div className="title">
                     تسجيل الدخول
                 </div>
                 <form>
                     <div className="input">
                        
                         <InputField name="Email" type="email" formFields={formFields}
                                  setFormFields={setFormField}
                                  label="البريد الالكتروني" validator={isEmail}/>
                           
                     </div>
                     <div className="input">
                       <InputField validator={dummy} name="Password" 
                       formFields={formFields} setFormFields={setFormField}
                       type="password" label="كلمة المرور" />
                     </div>
                 </form>

             </DialogContent>
             <DialogActions>
                 <div className="forgetPassword" 
                   
                  onClick={()=>navigate('/forgetpassword')}>
                     هل نسيت كلمة المرور؟
                 </div>
                 <Button onClick={()=>Login()} >دخول</Button>
                 <div className="signup">
                     <div className="title">
                         <div className="line"></div>
                        <span>لا تملك حساب؟</span> 
                         <div className="line"></div>
                     </div>
                     <Button
                      onClick={signUp}
                       variant="outlined">انضم الينا</Button>
                 </div>
             </DialogActions>

        </Dialog>
    )
}