
import { ChangeEvent, ReactElement, useEffect } from 'react'
import {InputField} from '../../tools/formfields/input/inputfield'
import {MySelector} from '../../tools/formfields/selector/selector'
import {ImgInput} from '../../tools/formfields/imginput/imginput'
import {useState} from 'react'
import {isPassword,isEmail,dummy,isPasswordConfirmed} from '../../tools/validations/validations'
import {Checkbox} from '@mui/material'
import { MyButton } from '../../tools/formfields/button/button'
import {translator} from '../../tools/translator'
interface Iprops {index:number,setFormFields:Function,formFields:any,
                  setOpen:Function}
export const SignUpForm =({index,setFormFields,formFields,setOpen}:Iprops) =>{
    const [file,setFile] =useState<string|undefined> (undefined)
    const [screenWidth,setScreenWidth]= useState(0)

    useEffect(()=>{
setScreenWidth(window.innerWidth)
    })
const checkBoxHandler =(e:ChangeEvent)=>{
        let checkBox= e.currentTarget as HTMLInputElement
        setFormFields(checkBox.name,checkBox.checked,false)
    }
    let form:ReactElement =<></>
     let checkOrForm:ReactElement=<></>
if (index ===1) {
    checkOrForm = 
     (<>
     <div className="inputGroup">
        
         <InputField name="Password" type="password" label={translator('Inputs','Password')}
            validator={isPassword}
             formFields={formFields} setFormFields={setFormFields}/>
         <InputField name="PasswordConfirmation" type="password" label={translator('Inputs','PasswordConfirmation')} 
            validator={isPasswordConfirmed}
             formFields={formFields} setFormFields={setFormFields}/>
           
     </div>
     <span></span>
     </>)
     form= (
         <>
            <div className="inputGroup">
                <InputField name="Name" type="text" label={translator('Inputs','Name')}
                    validator={dummy}
                    formFields={formFields} setFormFields={setFormFields} />
                <InputField name="Email" type="email" label={translator('Inputs','Email')}
                    validator={isEmail}
                    formFields={formFields} setFormFields={setFormFields} />
                    
            </div>
           
         </>
     )
}

else if (index ===2 ) {
     form = 
     (<div className="inputGroup">
        
         <MySelector name="Bank"  label={translator('Inputs','BankName')} options={['east','west','barakah']} 
           setFormFields={setFormFields}    formFields={formFields} />
         <InputField name="Account" type="number" label={translator('Inputs','AccountNumber')}
             validator={dummy}
             formFields={formFields} setFormFields={setFormFields}/>
         <InputField name="IBANN" type="number" label=" IBANN " 
            validator={dummy}
            formFields={formFields} setFormFields={setFormFields}/>
     </div>)

}
else {
     form = 
    (<div className="inputGroup">
        
       
        <InputField name="Spec" type="text" label={translator('Inputs','Specification')} 
           validator={dummy}
           formFields={formFields} setFormFields={setFormFields}/>
           <MyButton fun={()=>setOpen(true)}>
              {translator('Buttons','AddAddress')}
           </MyButton>
    </div>)
    checkOrForm = (
        <div className="checkBox">
            <Checkbox name="Agreement"  id ="agreement" onChange={(e:ChangeEvent)=>checkBoxHandler(e)}/>
            <label htmlFor='agreement'>
             {translator('SignUpPage','agreement')}
            </label>
       </div>
    )
}
    return (
        <>
        <div className="signUpForm" 
        style={{gridTemplateRows:screenWidth<501 ? index ===3 ? 'repeat(2,1fr)':'repeat(2,minmax(200px,2fr))':''}}>
           
            <div className="rightCol">
               {form}
            { screenWidth >500 &&  
               ( <div className="dotsContainer">
                   <div className="dot" style={{backgroundColor :index===1?"white":"rgb(180, 180, 180)"}}></div>
                   <div className="dot" style={{backgroundColor :index===2?"white":"rgb(180, 180, 180)"}}></div>
                   <div className="dot" style={{backgroundColor :index===3?"white":"rgb(180, 180, 180)"}}></div>
               </div>)}
            </div>
            <div className="leftCol" style={{display: index===2 ? 'none':'flex'}}>
                   
               
            {checkOrForm}
            </div>
        </div>
         { screenWidth <501 &&  
            ( <div className="dotsContainer">
                <div className="dot" style={{backgroundColor :index===1?"white":"rgb(180, 180, 180)"}}></div>
                <div className="dot" style={{backgroundColor :index===2?"white":"rgb(180, 180, 180)"}}></div>
                <div className="dot" style={{backgroundColor :index===3?"white":"rgb(180, 180, 180)"}}></div>
            </div>)}
        </>    
    )
}