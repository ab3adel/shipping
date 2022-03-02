import { useState } from 'react'
import './contactus.scss'
import {ContactusForm} from './contactusform'
import {Ifield} from '../../tools/formfields/interfaces'
import Telegram from '../../images/Faqs/telegram.svg'
import Whatsapp from '../../images/Faqs/whatsapp.svg'
import { MyButton } from '../../tools/formfields/button/button'
import {useNavigate} from 'react-router-dom'
import axios from '../../tools/api/axios/axios'
import {Apis} from '../../tools/api/apis'
import { Notify,severity } from '../../tools/notification/notification'

export default  function ContactUs (){
    const [formFields,setFormFields]=useState<Ifield>({Name:'',NameError:false
                                              ,email:'',emailError:false,
                                              message:'',messageError:false}) 
    const [not,setNot] =useState({isNotified:false,message:'',severity:"success"})                                          
    let navigate = useNavigate()                                         
    const setFormField= (name:string,value:string,error:string) => {
    
        let fields = {...formFields}
        fields[name]=value
        fields[`${name}Error`]=error
        if (name === "Password")fields['PasswordConfirmation']=""
        setFormFields(fields)
    }

    const sendMessage =() =>{
        let form = new FormData ()
        form.append('name',formFields['Name'] as string)
        form.append('email',formFields['email'] as string)
        form.append('message',formFields['message'] as string)
        form.append('subject',"problem")
     
    axios ({
        method:"post",
        url:Apis.ContactUs,
        headers:{"Content-Type": "multipart/form-data"},
        data:form
    })
        .then (res=>{
          
            if (res.status === 201) {
                setNot(pre=>({...pre,isNotified:true,message:'تم الارسال رسالة بنجاح',severity:'success'}))
            }
        })
        .catch(err=>   setNot(pre=>({...pre,isNotified:true,message:   'حدث خطأ ما ',severity:'error'})))
    }
 
    return (
        <div className="contactusContainer">
            <div className="contactusHeader">
            <h2>تواصل معنا</h2>
            </div>
            <div className="contactusBody">
                <div className="contactusFormContainer">

                   <ContactusForm formFields={formFields} 
                                  setFormFields={setFormField}
                                  sendMessage={sendMessage}/>
                </div>
                <div className="contactusSocial">
                    <div className="socials">
                        <div className="socialsHeader">
                            <h1>ارسال رسالة مباشرة</h1>
                            <p>يتطلب ذلك تسجيل الدخول</p>
                        </div>
                        <div className="socialsImages">
                            <img src={Telegram} />
                            <img src={Whatsapp} />
                        </div>
                        <MyButton fun={()=>navigate('contactus')}>
                            دخول
                        </MyButton>
                    </div>
                </div>
            </div>
            {not.isNotified && (
                <Notify isNotified={not.isNotified}
                         severity={not.severity as severity}
                         children={not.message}
                         setIsNotified={()=>setNot(pre=>({...pre,isNotified:false}))}/>
            )}
        </div>
    )
}