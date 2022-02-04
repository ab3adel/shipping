
import { InputField} from '../../tools/formfields/input/inputfield'
import {MyButton} from '../../tools/formfields/button/button'
import {dummy,isEmail} from '../../tools/validations/validations'
import { TextareaAutosize,TextField } from '@mui/material'
import { ChangeEvent } from 'react'
import {Ifield} from '../../tools/formfields/interfaces'

interface Iprops{formFields:Ifield,setFormFields:Function,sendMessage:Function}

export const ContactusForm=({formFields,setFormFields,sendMessage}:Iprops) =>{
    const handleChange =(e:ChangeEvent)=>{
        const input = e.currentTarget as HTMLTextAreaElement
        setFormFields(input.name,input.value,"")
    }
   
    return (
        <div className="contactusForm">
            <h1>Contact Us</h1>
            <InputField validator={dummy} 
                 type='text' name="Name" label="اسم المستخدم"  showLabel={false}
                 formFields={formFields} setFormFields={setFormFields}
                 />
            <InputField validator={isEmail} 
                 type='email' name="email" label=" البريد الالكتروني" showLabel={false}
                 formFields={formFields} setFormFields={setFormFields}
                 />
           <TextField 
            value={formFields.message }
             name="message"
             label="رسالتك هنا "
             onChange={(e:ChangeEvent)=>handleChange(e)}/>
           <MyButton fun={()=>sendMessage()}>ارسال</MyButton>
        </div>
    )
}
