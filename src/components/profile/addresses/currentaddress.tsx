import 
  {
      TextField,

}
  from '@mui/material'
import {useState} from 'react'
import {NewAddress} from './newaddress'
import {MyButton} from '../../../tools/formfields/button/button'
import {translator} from '../../../tools/translator'
interface iProps {formFields:any,setFormFields:Function,
                  countriesName:string[],cities:string [],updateAddress:Function,
                 countryStatus:string}
export const CurrentAddress =({formFields,setFormFields,countriesName
                             ,cities,updateAddress,countryStatus}:iProps) =>{
   
    const [newAddress,setNewAddress] =useState(false)
   let value =`${formFields['Name']? formFields['Name']:'[Name]'} - ${formFields['Country']? formFields['Country'] :'[Country]'}-${formFields['City']? formFields['City'] :'[City]'}`


    return (
        <>
            <div className="currentAddress">
                <div className="currentAddressBody">
                    <TextField 
                    type={'text'}
                    value={value}
                    />
                   { newAddress? "":<MyButton fun={()=>setNewAddress(true)} disabled={true}>
                                              {translator('Buttons','Edit')}
                                              </MyButton>}

                </div>
                {newAddress? 
                  <div className="newAddressContainer">
                    <NewAddress countriesName={countriesName} 
                               formFields={formFields} 
                               setFormFields={setFormFields} 
                               cities={cities}
                               disableName={true}
                               countryStatus={countryStatus}
                               doAction={()=>updateAddress()}
                               undo={()=>setNewAddress(false)} />

                  </div> :
                  ""
                }
                
             
            </div>
          {  newAddress ?
            <div className="mapBackground">
                
            </div>:""}
        </>
    )
}