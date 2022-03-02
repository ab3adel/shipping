
import {InputField} from '../../../tools/formfields/input/inputfield'
import {Button} from '@mui/material'
import {isPassword,dummy,isPasswordConfirmed} from '../../../tools/validations/validations'
import {Ifield} from '../../../tools/formfields/interfaces'
import {translator} from '../../../tools/translator'
export const NewPassword =({formFields,setFormFields}:{formFields:Ifield,setFormFields:Function}) =>{

    return (
        <div className="newPasswordForm">
            <div className="oneColumn">
                <InputField validator={isPassword} name="Password" type='password' 
                  formFields={formFields} setFormFields={setFormFields}
                label={translator('Inputs','NewPassword')} />
                <InputField validator={isPasswordConfirmed} name="PasswordConfirmation" type="text" 
                   formFields={formFields} setFormFields={setFormFields}
                label={translator('Inputs','PasswordConfirmation')}  />
                <InputField    validator={dummy} name="ValidationCode" type="number" 
                   formFields={formFields} setFormFields={setFormFields}
                label={translator('Inputs','VerificationCode')} />
            </div>
            <div className="newPasswordFormButtons">
                <Button>{translator('Buttons','Save')}</Button>
                <Button>{translator('Buttons','Cancle')}</Button>
            </div>
        </div>
    )
}