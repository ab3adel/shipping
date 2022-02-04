
import React, { ReactChild, ReactComponentElement, ReactElement } from 'react'
import {useNavigate} from 'react-router-dom'


 export const WithRouter=(Com:any)=>{
const navigate = useNavigate()
   const WrappedComponent =(props:any) =>{
       return (
        <Com 
        navigate={navigate}
        {...props}
        />
       )
   }
  
    return (
       {WrappedComponent}
    )
}
