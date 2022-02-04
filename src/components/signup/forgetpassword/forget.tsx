import { useState } from 'react'
import './forget.scss'
import {Ifield} from '../../../tools/formfields/interfaces'
import {ForgetForm} from './forgetform'
export const ForgetPassword =() =>{
    const [formFields,setFormFields]=useState<Ifield>({Email:'',EmailError:false,
                                               Code:'----',CodeError:false})
    const [done,setDone] =useState(false)                                           
    const setFormField=(name:string,value:string,error:string)   =>    {
     let   fields={...formFields}

     if (name === 'Code') {
        let inputs = '----'
        let arr = value.split('')
        let words= arr.filter(ele=>ele !== '-')
 
        if (words.length <5) {
           for (let i of words) {
               if (!isNaN(parseInt(i))){
                    inputs= inputs.replace('-',i)
                }
           }
         
            fields[name]=inputs
        }
        if (words.length ===4 ) setDone(true)
        else {
            setDone(false)
        }
     }
     else {
        fields[name]=value
     }
    
     fields[`${name}Error`]=error
     setFormFields(fields)
    }            
                        
    return (
        <div className="forgetContainer">
            <div className="forgetHeader">
                <h2>هل نسيت كلمة المرور</h2>
            </div>
            <div className="forgetBody">
                <div className="forgetBackground"></div>
                <div className="circleBackground"></div>
                <div className="forgetForm">
                    <ForgetForm formFields={formFields} setFormFields={setFormField} done={done}/>
                </div>
            </div>
        </div>
    )
}