
import './shippingRequest.scss'
import {useState} from 'react'
import {MyShippingRequestForm} from './form'
import {Route,Navigate,Routes,useNavigate} from 'react-router-dom'
import {Button} from '@mui/material'
import {translator} from '../../../tools/translator'
export const ShippingRequest =() =>{
let navigate = useNavigate()
const [date,setDate]=useState()

    return (
        <div className="srMainContainer">
        <div className="srUpperPart">
        
          {translator('ShippingPage','mainTitle')}
          
        </div>
        <div className="srLowerPart">
                <div className="srShippingRequest">
                
                       <MyShippingRequestForm />
                     
               </div>
            
        </div>
        <div className="askOfferBtn" >
            <Button 
              onClick={()=>navigate('/shippingrequest/offers')}
            >     {translator('ShippingPage','body','buttonTitle')}
            </Button> 
        </div>
     </div>    
   
        
    )
}