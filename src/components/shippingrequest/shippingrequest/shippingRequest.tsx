
import './shippingRequest.scss'
import {useState} from 'react'
import {MyShippingRequestForm} from './form'
import {Route,Navigate,Routes,useNavigate} from 'react-router-dom'

export const ShippingRequest =() =>{
let navigate = useNavigate()
const [date,setDate]=useState()

    return (
        <div className="srMainContainer">
        <div className="srUpperPart">
        
           <p> شحنة جديدة</p>
          
        </div>
        <div className="srLowerPart">
                <div className="srShippingRequest">
                
                       <MyShippingRequestForm />
                     
               </div>
            
        </div>
        <button className="askOfferBtn"
          onClick={()=>navigate('/offers')}
        >   طلب عرض للشحنة
        </button> 
     </div>    
   
        
    )
}