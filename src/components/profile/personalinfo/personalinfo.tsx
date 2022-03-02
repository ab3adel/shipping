import './personalinfo.scss'
import Profile from '../../../images/profile/profileorange.svg'
import Bank from '../../../images/profile/bank.svg'
import {dummy} from '../../../tools/validations/validations'
import 
{
    Avatar,
    Button,
    Divider,

 } 
from '@mui/material'
import {InputField} from '../../../tools/formfields/input/inputfield'
import {MySelector} from '../../../tools/formfields/selector/selector'
import {ImgInput} from '../../../tools/formfields/imginput/imginput'
import {Ifield} from '../../../tools/formfields/interfaces'
import {RootState} from '../../../store/store'
import React, {  useState,useEffect,useContext} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {updateUsreName,UpdateBankName} from '../../../store/features/profile'
import {Notify,severity} from '../../../tools/notification/notification'
import {Auth} from '../../../tools/authentication/authprovider'
import {translator} from '../../../tools/translator'
export const PersonalInfo =()=>{
    const {user,setUser}= useContext(Auth)
    const [screenWidth,setScreenWidth] = useState(0)
    const [file,setFile] =useState<string|undefined> (undefined)
    const [not,setNot] =useState({isNotified:false,message:'',severity:"success"})
    const [formFields,setFormFields]=useState <Ifield>({
        Name:'',NameError:false,
        Password:'',PasswordError:false,
        Email:'',EmailError:false,
        NickName:'',NickNameError:false,
        BirthDate:'',BirthDateError:false,
        Phone:'',PhoneError:false,
        Address:'',AddressError:false,
        Bank:'',BankError:false,
        Account:'',AccountError:false,
        IBANN:'',IBANNError:false
    })
    const {status,error,data,updatingBankStatus,updatingUserStatus} = useSelector((state:RootState)=>state.profile)
    const dispatch = useDispatch()
    useEffect (()=>{
        setScreenWidth(window.innerWidth)
    },[])
 useEffect (()=>{
     
     if (status === "succeed") {

        setFormFields(pre=>({
           Name:data[0].name,Email:data[0].email,
              NickName:data[0].nickName,Phone: data[0].customer['phone'] ,
              Address: data[0].customer['address'] ,
              Bank: data[0].customer['bank_name'] ,
              Account:data[0].customer['bank_account_number'],
              IBANN:  data[0].customer['IBAN_number']

        }))
     }
     
   
    

 },[status])
   useEffect(()=>{
       if (updatingUserStatus=== 'failed' || updatingBankStatus === "failed") {
        setNot({isNotified:true,severity:'error',message:"   لم يتم حفظ المعلومات الرجاء اعادة المحاولة"})
       }
    else if (updatingUserStatus === 'succeed' &&  updatingBankStatus === 'succeed' ) {
        setNot({isNotified:true,severity:'success',message:"  تم حفظ معلومات المستخدم بنجاح "})
     }
      if (updatingUserStatus === 'succeed') {
          if (formFields['Name'] || formFields['NickName']){
                setUser ((pre:any)=>({...pre,name:`${formFields['Name']} ${formFields['NickName']}`}))
                localStorage.removeItem('user')
               
                localStorage.setItem('user',JSON.stringify({...user,name:`${formFields['Name']} ${formFields['NickName']}`}))
        }
     }
   },[updatingBankStatus,updatingUserStatus])

    const setFormField = (name:string,value:string,error:string) => {
     
        const fields = {...formFields}
        fields[name]=value
        fields[`${name}Error`]=error
        if (name === "Password")fields['PasswordConfirmation']=""
        setFormFields(fields)
       
    }

const updateUserData =()=>{
   
    let formUser= {
        _method:'put',
        name:`${formFields['Name']} ${formFields['NickName']}`,
        active:`${user.active}`
    }
    let formBank = {
        bank_name:formFields['Bank'],
        bank_account_number:formFields['Account'],
        _method:'put'
    }
   

   dispatch(updateUsreName({id:user.user_id,form:formUser}))                                      
    dispatch(UpdateBankName({id:user.customer_id,form:formBank}))
    
}


    return (
        <div className="personalInfoContainer">
            <div className="personalInfoTitle">
                <div className="personalInfoAvatar">
                    <Avatar src={Profile}>
                      
                    </Avatar>
                    {translator('ProfilePage','PersonalInfoSection','mainTitle')}
                </div>
            </div>    
            <div className="personalInfoBody">
                    <div className="upperPart">
                        <div className="leftSide">
                            <div className="identityContainer">
                             <ImgInput file={file} setFile={setFile} />
                            </div>
                           
                        </div>
                        <div className="rightSide"> 
                            <div className="rightCol">
                                <InputField     validator={dummy} name="Name" type="text" label={translator('Inputs','Name')}
                                 formFields={formFields} setFormFields={setFormField}/>
                                {screenWidth <770 &&(  <InputField   validator={dummy}  name="NickName" type="text" 
                                                                       formFields={formFields} setFormFields={setFormField} label={translator('Inputs','NickName')}/>)}
                                <InputField    validator={dummy} name ="Birthdate" type="date" 
                                  formFields={formFields} setFormFields={setFormField} label={translator('Inputs','BirthDate')}/>
                                <InputField    validator={dummy} name="Phone" type="number" 
                                  formFields={formFields} setFormFields={setFormField} label={translator('Inputs','PhonNumber')} />
                            </div>
                            <div className="leftCol" style={{display:screenWidth>770? 'flex':'none'}}>
                                <InputField   formFields={formFields} setFormFields={setFormField}   validator={dummy} name="NickName" type="text" label={translator('Inputs','NickName')}/>
                            </div>
                        </div>
                    </div>
                
                    <div className="lowerPart">
                        <Divider/>
                        <div className="bankField">
                           
                            <div className="bankInputs">
                                <MySelector options={["East","West","national","Barakah",""]} 
                                    name="Bank"  formFields={formFields} setFormFields={setFormField}
                                    label={translator('Inputs','BankName')}/>
                                <InputField    validator={dummy} name="Account" type="number" 
                                    formFields={formFields} setFormFields={setFormField}
                                  label={translator('Inputs','AccountNumber')} />
                                <InputField    validator={dummy} name="IBANN" type='number' 
                                   formFields={formFields} setFormFields={setFormField}
                                 label="IBAN" />
                            </div>
                            <div className="bankImage">
                               <img src={Bank} />
                            </div>
                           
                        </div>
                        
                    </div>
            </div>
            <div className="personalInfoButton">
                    <Button 
                    disabled={user.active ? user.active ===1? false:true:true  }
                     onClick={()=>updateUserData()} >
                        {translator('Buttons','Save')}</Button>
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