import {lazy} from 'react'
import {Home} from '../../components/home/home'
import {HomeLayout} from '../../components/layout/homelayout'
import {ShippingLayout} from '../../components/shippingrequest/shippinglayout'
import {ShippingRequest} from '../../components/shippingrequest/shippingrequest/shippingRequest'
import {OfferDetails} from '../../components/shippingrequest/offers/offerdetails'
import {Offers} from '../../components/shippingrequest/offers/offers'
import {RouteObject} from 'react-router-dom'
import {ProfileLayout} from '../../components/profile/profilelayout'
import {Profile} from '../../components/profile/profile'
import {PersonalInfo} from '../../components/profile/personalinfo/personalinfo'
import {Security} from '../../components/profile/security/security'
import {Addresses} from '../../components/profile/addresses/addresses'
import {Archive} from '../../components/profile/archive/archive'
import  SignUp from '../../components/signup/signup'



import {TrackShipping} from '../../components/trackshipping/trackshipping'
import {ForgetPassword} from '../../components/signup/forgetpassword/forget'
import {PaymentOperatios} from '../../components/paymentoperations/paymentoperations'
import {Failed} from '../../components/paymentoperations/failed/failed'
import {Succeed} from '../../components/paymentoperations/succeed/succeed'

const About =lazy(()=>import( '../../components/about/about'))
const ContactUs=lazy(()=> import ('../../components/contactus/contactus'))
const Faqs=lazy(()=>import ('../../components/Faqs/faqs'))

export const HomeRoutes :RouteObject[] =

     [
       { path:'/',element:<HomeLayout />,
         children:[
           {path:'/',index:true,element:<Home/>},
           {path:'/shippingrequest', element:<ShippingLayout/>
                 ,
                children :[
                  {path:'/shippingrequest', index:true ,element:<ShippingRequest/>},
                  { path:"/shippingrequest/offers", element: <Offers />},
                  { path:"/shippingrequest/offers/details:id" ,element:<OfferDetails />}

                ]},
            {path:'/profile',element:<ProfileLayout/>,
               children:[
                 {path:'/profile',index:true,element:<Profile />},
                 {path:'/profile/personalinfo',element:<PersonalInfo/>},
                 {path:'/profile/security',element:<Security/>},
                 {path:'/profile/addresses',element:<Addresses/>},
                 {path:'/profile/archive',element:<Archive/>}
          ]},
            {path:'/signup',element: <SignUp />},
            {path:'/about',element:<About/>},
            {path:'/faqs',element:<Faqs/>},
            {path:'/contactus',element:<ContactUs/>},
            {path:'/trackmyshipping',element:<TrackShipping/>},
            {path:'/forgetpassword',element:<ForgetPassword/>},
            {path:'/paymentoperations',element:<PaymentOperatios/> ,
             children:[
               {path:'/paymentoperations/failed',element:<Failed/>},
               {path:'/paymentoperations/succeed',element:<Succeed/>},
             ]}

         ]
        },
      
  
        

    ]
