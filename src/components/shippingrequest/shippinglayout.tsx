

import {useState} from 'react'
import {ShippingRequest} from './shippingrequest/shippingRequest'
import {Offers} from './offers/offers'
import {Outlet} from 'react-router-dom'
import { OfferDetails } from './offers/offerdetails'
export const ShippingLayout=() =>{

const [date,setDate]=useState()

    return (
      <Outlet/>
    )
}