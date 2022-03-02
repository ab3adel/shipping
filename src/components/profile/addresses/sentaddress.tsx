
import {AddressList} from './addresslist'
import {NewAddress} from './newaddress'
import {useState} from 'react'
import {SortButton} from '../../../tools/formfields/sortbutton/sortbutton'
import {MyButton} from '../../../tools/formfields/button/button'
import {CircularProgress} from '@mui/material'
import {translator} from '../../../tools/translator'
interface iProps {formFields:any,setFormFields:Function,countriesName:string[]
               ,cities:string [],updateAddress:Function,addAddress:Function,deleteAddress:Function,data:any,
            setOpenDetails:Function,showDetails:Function,updateRecipient:Function,
            newAddress:boolean,newAddressForm:Function,updateAddressForm:Function,
            emptyForm:Function,disableButtons?:boolean,
           countryStatus:string,setNewAddress:Function,setIsAddAction:Function,isAddAction:boolean}

export const SentAddress =({formFields,setFormFields,countriesName
                            ,cities,updateAddress,addAddress,deleteAddress,data
                        ,setOpenDetails,showDetails,updateRecipient,setNewAddress,
                        isAddAction,setIsAddAction,emptyForm,disableButtons=false
                        ,newAddressForm,newAddress,updateAddressForm,countryStatus}:iProps) =>{
  
    
  
    const [index,setIndex]=useState(-1)

 
    const focusHandler=(e:React.MouseEvent,num:number) =>{
         setIndex(num)
    }
    const handleAdd =() =>{
        setIsAddAction (true)
        newAddressForm()
        
     }
     const cancleButton =()=>{

         emptyForm()
         setNewAddress(false)
         setIsAddAction(true)
     }
     if (disableButtons) return null
    return (
        <div className="sentAddressContainer" >
        
            <div className="sortButtonContainer" >
                <SortButton  />
                <div className="addNewAddress" >
                     <MyButton disabled={disableButtons} fun={()=> handleAdd ()} >
                         {translator('Buttons','AddNew')}
                     </MyButton>
                 </div>
            </div>
    
            <div className="sentAddressBody">
                
                <div className="addressList">
                   {newAddress ?   
                           <NewAddress countriesName={countriesName} 
                            formFields={formFields} 
                            setFormFields={setFormFields}
                            doAction={isAddAction? addAddress:updateAddress}
                            disableName={isAddAction}
                            countryStatus={countryStatus}
                            cities={cities} 
                           undo={cancleButton} />:
                          data.map((ele:any,num:number)=>{ 
                            
                            return(
                           
                             <AddressList 
                                  key={num}
                                  data={ele}
                                  num={num}
                                  focusHandler={focusHandler}
                                  deleteAddress={deleteAddress}
                                  setOpenDetails={setOpenDetails}
                                  showDetails={showDetails}
                                  setAdd={setIsAddAction}
                                  updateRecipient={updateRecipient}
                                  updateAddressForm={updateAddressForm}

                                  index={index} /> 
                                  )
                   })
                
                          }
                </div>
            </div>
        </div>
    )
}