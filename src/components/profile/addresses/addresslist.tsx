import React from "react"
import {MyButton} from '../../../tools/formfields/button/button'
import 
 {
     TextField,
     Button
 }
 from '@mui/material'
 import {translator} from '../../../tools/translator'
interface Iprops {num:number
                ,focusHandler:(e:React.MouseEvent,num:number)=>void
                ,index:number,deleteAddress:Function
                ,data:any,setOpenDetails:Function
                ,showDetails:Function,setAdd:Function,updateRecipient:Function,
            updateAddressForm:Function}

export const AddressList =({focusHandler,index,num
                          ,deleteAddress,data,
                          setAdd,showDetails,setOpenDetails,updateRecipient
                        ,updateAddressForm}:Iprops) =>{

        
         const handleUpdate=(id:number)=>{
             setAdd(false)
             showDetails(id)
             updateAddressForm()
         }
        const handleShowDetails=(id:number)=>{
            showDetails(id)
            setOpenDetails(true)
        }
       
            return (
             <div className={"item"}
                  
                 onMouseEnter={(e:React.MouseEvent)=>focusHandler(e,num)}>
                
                 <div key={num} className={index===num ? "addressItem hovered" :"addressItem"}>

                     <span>{num}</span>
                     <div className="editAddress">
                         <TextField value={data.name_ar? data.name_ar:data.name_en}/>
                         <div className="editAddressButtons" style={{display:index ===num ? 'flex':'none'}}>
                             <MyButton fun={()=> handleUpdate (data.id)} >{translator('Buttons','Edit')}</MyButton>
                             <MyButton fun={()=>handleShowDetails(data.id)}>{translator('Buttons','Details')}</MyButton>
                             <Button onClick={()=>deleteAddress(data.id)} className="deleteBtn" sx={{backgroundColor:'red',color:'white'}}>
                             {translator('Buttons','Delete')}
                             </Button>
                         </div>
                     </div>
                 </div>
                
                
             </div>    
            )
       
     
    
}