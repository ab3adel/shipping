import './selector.scss'
import 
  {
      Select,
      MenuItem,
      SelectChangeEvent,
      FormControl,
      InputLabel
  }
  from '@mui/material'

  import React, {ReactElement, ReactNode, useState,useEffect, ReactEventHandler, ChangeEvent} from 'react'
import { Console } from 'console'
interface Iprops {options:string[],name:string,label:string
           ,setFormFields:Function,formFields?:any
           ,validator?:Function}
export const MySelector =({options,name,label,validator,setFormFields,formFields}:Iprops)=>{

   const [selected,setSelected]=useState(formFields[name]? formFields[name]:"")
   const [screenWidth,setScreenWidth]=useState(0)

 useEffect (()=>{
   setScreenWidth(window.innerWidth)
 },[])
    
   const changeHandler= (e:SelectChangeEvent<any>,child:React.ReactNode)=>{

     
       setFormFields(e.target.name,e.target.value,false)
       
   }
    return (
        <div className="selector">
          <FormControl>
          {screenWidth<501 ?  <InputLabel id ={`selector${name}`}>{label}</InputLabel>:"" }
              <Select 
                onChange={(e:SelectChangeEvent,child:React.ReactNode)=>changeHandler(e,child)}
            
                  value={formFields[name] ? formFields[name]:''}
                
                  id={`selector${name}`}
                  name= {name}>
                      { options.map((ele,index)=>{
                          return <MenuItem value={ele} key={index}>{ele}</MenuItem>
                      })}
              </Select>
              
          </FormControl>   
          <label className="outerLabel" htmlFor={`selector${name}`}>{label}</label>
        </div>
    )

}