
import {InputField} from '../../../tools/formfields/input/inputfield'
import {Button} from '@mui/material'
import {isPassword,dummy,isPasswordConfirmed} from '../../../tools/validations/validations'
import {Ifield} from '../../../tools/formfields/interfaces'
export const NewPassword =({formFields,setFormFields}:{formFields:Ifield,setFormFields:Function}) =>{

    return (
        <div className="newPasswordForm">
            <div className="oneColumn">
                <InputField validator={isPassword} name="Password" type='password' 
                  formFields={formFields} setFormFields={setFormFields}
                label="كلمة المرور الجديدة" />
                <InputField validator={isPasswordConfirmed} name="PasswordConfirmation" type="text" 
                   formFields={formFields} setFormFields={setFormFields}
                label="تأكيد كلمة المرور" />
                <InputField    validator={dummy} name="ValidationCode" type="number" 
                   formFields={formFields} setFormFields={setFormFields}
                label="رمز التحقق" />
            </div>
            <div className="newPasswordFormButtons">
                <Button>حفظ</Button>
                <Button>تراجع</Button>
            </div>
        </div>
    )
}