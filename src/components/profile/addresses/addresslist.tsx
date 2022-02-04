import React from "react"
import {MyButton} from '../../../tools/formfields/button/button'
import 
 {
     TextField,
     Button
 }
 from '@mui/material'

interface Iprops {ele:string,num:number,setNewAddress:Function
      ,focusHandler:(e:React.MouseEvent,num:number)=>void,index:number}

export const AddressList =({ele,focusHandler,index,num,setNewAddress}:Iprops) =>{

         const fun =() =>{

             setNewAddress (true)
         }
       
            return (
             <div className={"item"}
                  
                 onMouseEnter={(e:React.MouseEvent)=>focusHandler(e,num)}>
                
                 <div key={num} className={index===num ? "addressItem hovered" :"addressItem"}>

                     <span>{num}</span>
                     <div className="editAddress">
                         <TextField value={ele}/>
                         <div className="editAddressButtons" style={{display:index ===num ? 'flex':'none'}}>
                             <MyButton>تعديل</MyButton>
                             <Button className="deleteBtn" sx={{backgroundColor:'red',color:'white'}}>حذف</Button>
                         </div>
                     </div>
                 </div>
                 <div className="addNewAddress" style={{display:index ===num ? 'flex':'none'}}>
                     <MyButton fun={()=> fun ()} >
                         اضافة جديد
                     </MyButton>
                 </div>
             </div>    
            )
       
     
    
}