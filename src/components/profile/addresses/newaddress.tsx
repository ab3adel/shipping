import {InputField} from '../../../tools/formfields/input/inputfield'
import {MyButton} from '../../../tools/formfields/button/button'
import {dummy} from  '../../../tools/validations/validations'
import {Ifield} from '../../../tools/formfields/interfaces'
interface Iprops {undo :Function,setFormFields:Function,formFields:Ifield}

export const NewAddress =({undo,formFields,setFormFields}:Iprops) =>{

    
    return (
        <div className="newAddress">
            <div className="newAddrssInpust">
                <InputField formFields={formFields} setFormFields={setFormFields}    
                validator={dummy} name="Governer" label='المحافظة'
                type='text' />
                <InputField    validator={dummy} name="City" label='المدينة' 
                   formFields={formFields} setFormFields={setFormFields}
                    type="text"/>
                <InputField    validator={dummy} name='Street' label="الشارع" 
                   formFields={formFields} setFormFields={setFormFields}
                    type="text" />
                <InputField     validator={dummy} name="PostCode"  
                 formFields={formFields} setFormFields={setFormFields}
                 label='الرمز البريدي'
                    type="number" />
            </div>    
            <div className="newAddressButtons">
                <MyButton>حفظ</MyButton>
                <MyButton
                   fun={()=>undo()}
                   >تراجع</MyButton>
            </div>
        </div>
    )
}