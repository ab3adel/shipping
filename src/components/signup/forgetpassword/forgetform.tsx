import {InputField} from '../../../tools/formfields/input/inputfield'
import {MyButton} from '../../../tools/formfields/button/button'
import {isEmail} from '../../../tools/validations/validations'
import { Done,DoneOutline} from '@mui/icons-material'
import {Avatar} from '@mui/material'
export const ForgetForm =({formFields,setFormFields,done}:{formFields:any,setFormFields:Function,done:boolean}) =>{

    return (
        <div className="forgetFormBody">
          
                <div className="emailInput">

                    <InputField  type='email' validator={isEmail} formFields={formFields}
                            setFormFields={setFormFields} label='أدخل البريد الالكتروني' name="Email"/>
                </div>
                <div className="codeInput">
                    <InputField  type='text' validator={()=>{}} formFields={formFields}
                            setFormFields={setFormFields} label="رمز التحقق" name="Code" />  
                </div>
                <Avatar color="inherit" className={done?'checked':''} >
                    <DoneOutline  fontSize='inherit' color= {'inherit'}/>   
                </Avatar> 
                <div className="resend">
                    <MyButton disabled={done} fun={()=>{}}>اعادة الارسال</MyButton>
                </div>
                <div className="signUp">
                    <MyButton fun={()=>{}}>تسجيل الدخول</MyButton>
                </div>           
        
        </div>
    )
}