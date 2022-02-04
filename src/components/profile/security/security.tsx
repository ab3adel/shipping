import './security.scss'
import {InputField} from '../../../tools/formfields/input/inputfield'
import 
{
    Button,
    Avatar
} 
  from '@mui/material'
import Sheld from '../../../images/profile/sheld.svg'
import {useState} from 'react'
import {AnotherOption} from './anotheroption'
import {NewPassword} from './newpassword'
import {isEmail,dummy} from '../../../tools/validations/validations'
import {Ifield} from '../../../tools/formfields/interfaces'
export const Security = ()=>{
    const [newPassword,setNewPassword] =useState(false)
    const [formFields,setFormFields]=useState <Ifield>({
        PasswordConfirmation:'',PasswordConfirmationError:false,
        Password:'',PasswordError:false,
        Email:'',EmailError:false,
        ValidationCode:'',ValidationCodeError:false
       
    })
    const changePassword=(e:React.MouseEvent) =>{
        let btn = e.currentTarget as HTMLButtonElement
        btn.style.display='none'
        setNewPassword(true)
    }

    const setFormField = (name:string,value:string,error:string) => {
    
        const fields = {...formFields}
        fields[name]=value
        fields[`${name}Error`]=error
        if (name === "Password")fields['PasswordConfirmation']=""
        setFormFields(fields)
    }

    return (
        <div className="securityContainer">
            <div className="securityTitle">
                <div className="securityAvatar">
                    الامان  
                    <img src={Sheld} />
                
                </div>
            </div>
            <div className="securityBody">
                <div className="passwordOption">
                    <div className="authorization">
                        <InputField validator={isEmail} name='Email' type="email" 
                        label="البريدالالكتروني" formFields={formFields} setFormFields={setFormField} />
                        <InputField validator={dummy} name="Password" 
                          formFields={formFields} setFormFields={setFormField}
                         type="text" label="كلمة المرور" />
                    </div>
                    <div className="newPasswordButton">
                        <Button onClick={(e:React.MouseEvent)=>changePassword(e)}>تغيير كلمة المرور</Button>
                    </div>
                </div>
                {
                    newPassword? <NewPassword formFields={formFields} setFormFields={setFormField}/> : <AnotherOption/>
                }
                
            </div>
        </div>
    )
}