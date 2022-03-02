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
           ,validator?:Function,disabled?:boolean,requireText?:string}
export const MySelector =({options,name,label,validator
                            ,setFormFields,formFields,
                            disabled=false,requireText=""
                               }:Iprops)=>{

   const [selected,setSelected]=useState(formFields[name]? formFields[name]:"")
   const [screenWidth,setScreenWidth]=useState(0)
   const [error,setError]= useState(requireText)

 useEffect (()=>{
   setScreenWidth(window.innerWidth)
 },[])
    useEffect(()=>{
     setError(requireText)
    },[requireText])
   const changeHandler= (e:SelectChangeEvent<any>,child:React.ReactNode)=>{

     
       setFormFields(e.target.name,e.target.value,false)
       
   }
   console.log(error)
    return (
        <div className="selector">
          <FormControl>
            <InputLabel id ={`selector${name}`}>{label}</InputLabel>
              <Select 
                onChange={(e:SelectChangeEvent,child:React.ReactNode)=>changeHandler(e,child)}
                 disabled={disabled}
                  value={formFields[name] ? formFields[name]:''}
                  error={Boolean(error)}
                
                  id={`selector${name}`}
                  name= {name}>
                      { options?.map((ele,index)=>{
                          return <MenuItem value={ele} key={index}>{ele}</MenuItem>
                      })}
              </Select>
              
          </FormControl>   
          {Boolean(error) && (<p >{error}</p>)}
        </div>
    )

}