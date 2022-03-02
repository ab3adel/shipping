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
import {translator} from '../../../tools/translator'
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
   
    if (checkRequireFields().length >0) return
    
    setOpen(false)
    let form = new FormData()

    login({email:formFields['Email'],password:formFields['Password']})
    let fields={...formFields}
   /* fields={Email:"",EmailError:false
                ,Password:"",PasswordError:false}
    setFormFields(fields) */
}
const checkRequireFields=() =>{
    let newFormFields={...formFields}
    let requiredFields= Object.keys(newFormFields).map(ele=>{
        
        if (!Boolean(newFormFields[ele]) && !ele.includes('Error')) {
        newFormFields[`${ele}Error`]='this field is required'

            return ele
        }
    
     })
     setFormFields(newFormFields)
    
     return requiredFields.filter(ele=>ele)
}
const signUp= ()=>{
    navigate('/signup')
    setOpen(false)
}
const forgetPassword =() =>{
    navigate('/forgetpassword')
    setOpen(false)
}
    return (
        <Dialog 
         open={open}
         onClose={()=>setOpen(false)}>
             <DialogContent>
                 <div className="title">
                     {translator('HomePage','SignUpDialog','mainTitle')}
                 </div>
                 <form>
                     <div className="input">
                        
                        <InputField name="Email" type="email" formFields={formFields}
                                  setFormFields={setFormField} requireText={formFields['EmailError'] as string}
                                  label={translator('Inputs','Email')} validator={isEmail}/>
                           
                     </div>
                     <div className="input">
                       <InputField validator={dummy} name="Password" 
                            formFields={formFields} setFormFields={setFormField}
                            requireText={formFields['PasswordError'] as string}
                            type="password" label={translator('Inputs','Password')}/>
                     </div>
                 </form>

             </DialogContent>
             <DialogActions>
                 <div className="forgetPassword" 
                   
                  onClick={()=>forgetPassword()}>
                    { translator('HomePage','SignUpDialog','body','section1')}
                 </div>
                 <Button onClick={()=>Login()} >دخول</Button>
                 <div className="signup">
                     <div className="title">
                         <div className="line"></div>
                         { translator('HomePage','SignUpDialog','body','section2')}
                         <div className="line"></div>
                     </div>
                     <Button
                      onClick={signUp}
                       variant="outlined">{translator('Buttons','JoinUs')}</Button>
                 </div>
             </DialogActions>

        </Dialog>
    )
}