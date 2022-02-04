import './addresses.scss'
import 
  {
      Tabs,
      Tab
  } 
from '@mui/material'
import {SyntheticEvent, useState} from 'react'
import {TabPanel} from '../../../tools/formfields/tab/tabpanel'
import Address from '../../../images/profile/adress.svg'
import {CurrentAddress } from './currentaddress'
import {SentAddress} from './sentaddress'
import {Ifield} from '../../../tools/formfields/interfaces'
export const Addresses =()=>{
    const [value,setValue] =useState(0)
    const [formFields,setFormFields]=useState <Ifield>({
        Street:'',StreetError:false,
        Governer:'',GovernerError:false,
        City:'',CityError:false,
        PostCode:'',PostCodeError:false,
        BirthDate:'',BirthDateError:false,
        Phone:'',PhoneError:false,
        Address:'',AddressError:false,
        Bank:'',BankError:false,
        Account:'',AccountError:false,
        IBANN:'',IBANNError:false
    })
    const changeHandler=(e:SyntheticEvent<Element,Event>,num:number)=>{
        setValue(num)
    }
     
    const setFormField = (name:string,value:string,error:string) => {
    
        const fields = {...formFields}
        fields[name]=value
        fields[`${name}Error`]=error
        if (name === "Password")fields['PasswordConfirmation']=""
        setFormFields(fields)
    }

    return (
        <div className="addressContainer">
            <div className="addressTitle">
                <div className="addressAvatar">
                  <span>عناويني</span>
                  <img src={Address} />
                </div>
               
            </div>
            <div className="addressBody">
                <Tabs TabIndicatorProps={{style:{display:'none'}}} value={value} onChange={changeHandler}>
                    <Tab  label="عنواني الحالي" />
                    <Tab label="عناوين مرسل اليها" />
                    <Tab label="عناويني استقبال" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <CurrentAddress formFields={formFields} setFormFields={setFormField}/>
                </TabPanel>
                <TabPanel  value={value} index={1}>
                    <SentAddress formFields={formFields} setFormFields={setFormField} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <h3>3</h3>
                </TabPanel>
            </div>
            
        </div>
    )
}