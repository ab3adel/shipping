import './addresses.scss'
import 
  {
      Tabs,
      Tab,
      CircularProgress
  } 
from '@mui/material'
import {SyntheticEvent, useState,useEffect} from 'react'
import {TabPanel} from '../../../tools/formfields/tab/tabpanel'
import Address from '../../../images/profile/adress.svg'
import {CurrentAddress } from './currentaddress'
import {SentAddress} from './sentaddress'
import {Ifield} from '../../../tools/formfields/interfaces'
import {useDispatch,useSelector} from 'react-redux'
import {Notify,severity} from '../../../tools/notification/notification'
import {
    getCities,getCountries
    ,getRecipients
    ,updateRecipient
    ,storeRecipients
    ,isLoading
    ,getRecipient
    ,getCountry
    ,deleteRecipient
    ,loadingRecipients
    ,loadingCities,
    loadingCountry

} 

from '../../../store/features/addresses'
import {RootState} from '../../../store/store'
import {AddressDetails} from './addressdetails'
import {translator} from '../../../tools/translator'

export const Addresses =()=>{
    const [value,setValue] =useState(0)
    const [openDetails,setOpenDetails]=useState(false)
    const [newAddress,setNewAddress]= useState(false)
    const [not,setNot] =useState({isLoading:false,message:'',severity:"error",isNotified:false})
    const [isAddAction,setIsAddAction]=useState(true)
    const [formFields,setFormFields]=useState <Ifield>({
        CountryCode:'',CountryCodeError:false,
        City:'',CityError:false,
        StateCode:'',StateCodeError:false,
        PostCode:'',PostCodeError:false,
        Line1:'',Line1Error:false,
        Line2:'',Line2Error:false,
        Line3:'',Line3Error:false,
        Type:'',TypeError:false,
        IsMain:'',IsMainError:false,
        Country:'',CountryError:false,
        Name:'',NameError:false
        
    })
    const dispatch=useDispatch()
    const {status,country,cities,countries
          ,recipients,recipient,specificStatus
         } =useSelector((state:RootState)=>state.addresses)
     let {locationStatus:{cityStatus,countryStatus}} =specificStatus
          
    const changeHandler=(e:SyntheticEvent<Element,Event>,num:number)=>{
        setValue(num)
    }
     
    const setFormField = (name:string,value:string,error:string) => {
    
        const fields = {...formFields}
        fields[name]=value
        if (name === 'Country') {
          
            let countryObj = countries.filter(ele=>ele.Name === value) 
            fields['CountryCode']=countryObj[0]['Code']
            dispatch(getCities(countryObj[0]['Code'] as string))
        }
        
     
        fields[`${name}Error`]=error
        if (name === "Password")fields['PasswordConfirmation']=""
        setFormFields(fields)
    }
useEffect(()=>{
    
  if(status === 'idle') {
    
      dispatch(isLoading())
      dispatch(getRecipients())
      dispatch(getCountries())
  }
},[status])
useEffect(()=>{
      
   if ( country &&country.Code && !isAddAction){
    dispatch(getCities(country.Code))
    setFormFields(pre=>({...formFields,Country:country.Name}))
}
},[country,countryStatus])

useEffect(()=>{
    if (isAddAction) return
    dispatch(getCountry(recipient.addresses[0].country_code))
    let newForm= {...formFields}
    newForm['Name']=recipient.name_en
    newForm['StateCode']=recipient.addresses[0].state_code
    newForm['CountryCode']=recipient.addresses[0].country_code
    newForm['Line1']=recipient.addresses[0].line_1
    newForm['Line2']=recipient.addresses[0].line_2
    newForm['Line3']=recipient.addresses[0].line_3
    newForm['PostCode']=recipient.addresses[0].post_code
    newForm['City']=recipient.addresses[0].city
    newForm['Type']=recipient.addresses[0].type
    newForm['IsMain']=recipient.addresses[0].main.toString()
    setFormFields(pre=> ({...newForm}))
},[recipient])
const updateAddress =(id:number)=>{
    if (checkRequiredFields().length>0) return
    let formData= {
        '_method':'PUT',
       ' addresses':[{
           'line_1':formFields['Line1'],'line_2':formFields['Line2'],'line_3':formFields['Line3'],
           'city':formFields['City'],'country_code':formFields['CountryCode'],'type':formFields['Type'],
           'main':formFields['Main'],'state_code':formFields['StateCode'],'post_code':formFields['PostCode']
        }]
    }
    dispatch(isLoading())
    dispatch(loadingRecipients())
    dispatch(updateRecipient({userData:formData,id:recipient.id}))
}

const addAddress =()=>{
    if (checkRequiredFields().length>0) return
    let formData= {
        'name-ar':formFields['Name'],
        'name_en':formFields['Name'],
        'customer_id':'-1',
       'addresses':[{
           'line_1':formFields['Line1'],'line_2':formFields['Line2'],'line_3':formFields['Line3'],
           'city':formFields['City'],'country_code':formFields['CountryCode'],'type':formFields['Type'],
           'main':formFields['IsMain'] ,'state_code':formFields['StateCode'],'post_code':formFields['PostCode']
        }]
    }
    dispatch(isLoading())
    dispatch(loadingRecipients())
    dispatch(storeRecipients(formData))
}
const getRecipientDetails=(id:number)=>{
    dispatch(getRecipient(id))
    dispatch(isLoading())
    dispatch(loadingCountry())
    dispatch(loadingCities())

}
const deleteAddress = (id:number)=>{
    dispatch(isLoading())
    dispatch(loadingRecipients())
    dispatch(deleteRecipient(id))
}
const newAddressForm= ()=>{
    emptyForm()
    setNewAddress(true)
}
const updateAddressForm =()=>{
    
    setNewAddress(true)
}
const emptyForm =()=>{
    let newForm= {...formFields}
    for(let i of Object.keys(formFields)) {
        newForm[i]=""
    }
    setFormFields(newForm)
}
const successfulRequest =()=>{
    emptyForm()
    setNewAddress(false)
}
const faildRequest = () =>{
    setNot(pre=>({isNotified:true,isLoading:true,message:'something wrong happend',severity:'error'}))
}
const checkRequiredFields=()=>{
    let newFormFields={...formFields}
   let requiredFields= Object.keys(newFormFields).map(ele=>{
        if (ele !== 'Line2' && ele !== 'Line3' && !ele.includes('Error')){
            if (!Boolean(newFormFields[ele])) {
              newFormFields[`${ele}Error`]='this field is required'
                return ele
            }
        }
    })
    setFormFields(newFormFields)
    return requiredFields.filter(ele=>ele)
    
}
let countriesName=countries?.map (ele=>ele.Name) as string[]

if (!recipients) return (<CircularProgress 
                                    size={68}
                                    sx={{
                                        position:'absolute',
                                        left:'-50%',
                                        bottom:'-50%'
                                    }}/>)


                                  
    return (
        <div className="addressContainer">
            <div className="addressTitle">
                <div className="addressAvatar">
                  {translator('ProfilePage','AddressesSection','mainTitle')}
                  <img src={Address} />
                </div>
               
            </div>
            <div className="addressBody">
                <Tabs TabIndicatorProps={{style:{display:'none'}}} value={value} onChange={changeHandler}>
                    <Tab  label={ translator('ProfilePage','AddressesSection','Tabs','currentAddress')} />
                    <Tab label= {translator('ProfilePage','AddressesSection','Tabs','sentAddresses')} />
                    <Tab label={ translator('ProfilePage','AddressesSection','Tabs','recipientAddresses')} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <CurrentAddress formFields={formFields} 
                                   setFormFields={setFormField} 
                                   updateAddress={updateAddress}
                                   cities={cities}
                                   countryStatus={countryStatus}
                                   countriesName={countriesName}/>
                </TabPanel>
                <TabPanel  value={value} index={1}>
                    <SentAddress formFields={formFields}
                                cities={cities} 
                                setFormFields={setFormField} 
                                updateAddress={updateAddress}
                                addAddress={addAddress}
                                deleteAddress={deleteAddress}
                                data={recipients}
                                updateRecipient={updateAddress}
                                setOpenDetails={setOpenDetails}
                                showDetails={getRecipientDetails}
                                newAddress={newAddress}
                                newAddressForm={newAddressForm}
                                updateAddressForm={updateAddressForm}
                                setNewAddress={setNewAddress}
                                countryStatus={countryStatus}
                                isAddAction={isAddAction}
                                setIsAddAction={setIsAddAction}
                                emptyForm={emptyForm}
                                disableButtons={true}
                                countriesName={countriesName} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                      <SentAddress formFields={formFields}
                                 updateAddress={updateAddress}
                                 deleteAddress={deleteAddress}
                                setFormFields={setFormField} 
                                addAddress={addAddress}
                                countriesName={countriesName} 
                                updateRecipient={updateAddress}
                                setOpenDetails={setOpenDetails}
                                data={recipients}
                                showDetails={getRecipientDetails}
                                newAddress={newAddress}
                                newAddressForm={newAddressForm}
                                setNewAddress={setNewAddress}
                                countryStatus={countryStatus}
                                updateAddressForm={updateAddressForm}
                                isAddAction={isAddAction}
                                setIsAddAction={setIsAddAction}
                                emptyForm={emptyForm}
                                cities={cities}/>
                </TabPanel>
            </div>
            {openDetails && (
                     <AddressDetails open={openDetails} 
                                     setOpen={setOpenDetails}
                                     data={recipient} />
                 )}
                   {not.isNotified && (
              <Notify isNotified={not.isNotified}
                       children={not.message}
                       severity={'error'}
                       setIsNotified={()=>setNot(pre=>({...pre,isNotified:false}))}/>
          )}         
        </div>
    )
}