import 
  {
      TextField,

}
  from '@mui/material'
import {useState} from 'react'
import {NewAddress} from './newaddress'
import {MyButton} from '../../../tools/formfields/button/button'
export const CurrentAddress =({formFields,setFormFields}:{formFields:any,setFormFields:Function}) =>{
    const [value] =useState("NewYork , SABAEL,1001 McDowell Street")
    const [newAddress,setNewAddress] =useState(false)
   
    return (
        <>
            <div className="currentAddress">
                <div className="currentAddressBody">
                    <TextField 
                    type={'text'}
                    value={value}
                    />
                   { newAddress? "":<MyButton fun={()=>setNewAddress(true)}>تعديل</MyButton>}

                </div>
                {newAddress? 
                  <div className="newAddressContainer">
                    <NewAddress formFields={formFields} setFormFields={setFormFields} undo={()=>setNewAddress(false)} />

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