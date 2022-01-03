

import {useState} from 'react'
import {ShippingRequest} from './shippingrequest/shippingRequest'
import {Offers} from './offers/offers'
import {Route,Navigate,Routes} from 'react-router-dom'
import { OfferDetails } from './offers/offerdetails'
export const ShippingLayout=() =>{

const [date,setDate]=useState()

    return (
       <Routes>
           <Route path='/' element={<ShippingRequest/>}/>
           <Route path="/offers" element= {<Offers />} />
           <Route path="/offers/details:id" element= {<OfferDetails />} />
       </Routes>
    )
}