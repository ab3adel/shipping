
import 
 {
   TextField 
   ,Button
   ,IconButton,
   InputAdornment
  ,OutlinedInput
  ,FormControl
  ,InputLabel
  ,FormHelperText
  } 
from '@mui/material'
import {ChangeEvent, useEffect,useState } from 'react'
import 
  {
    Visibility
    ,VisibilityOff
    ,AccountCircle
  }
from '@mui/icons-material'
import './inputfield.scss'
import { toNamespacedPath } from 'path/posix'

interface Iprops {name:string,type:'text'|'number'|'date'|'email'|'password'
,label:string,validator:Function ,formFields?:any,setFormFields ?:Function,showLabel?:boolean}

export const InputField =({name,type,label,validator,setFormFields,formFields,showLabel=true}:Iprops)=>{
  const [screenWidth,setScreenWidth]=useState(0)
  const [showPassword,setShowPassword]=useState(false)

 const[error,setError] =useState('')
useEffect (()=>{
  setScreenWidth(window.innerWidth)
},[])
   
const changeHandler=(e:ChangeEvent)=>{
  let input =e.currentTarget as HTMLInputElement
  let err =""
  if (name==="PasswordConfirmation") {
   err= validator(formFields['Password'],input.value)
  }
  else {
err = validator(input.value)
  }
 
    setError(err)

    if (setFormFields)setFormFields(input.name,input.value,err) 
}

    return (
      <>
      {    type !== "password" ?
        <div className="rowDirection">
           
            <TextField 
             onChange={(e:ChangeEvent)=>changeHandler(e)}
             value={formFields[name]}
              id={`personalInfo${name}`} 
              label={showLabel? screenWidth>500 || type==="date"  ?"":label:label}
              type={type}
              error={Boolean(error)}
              helperText={Boolean(error) ?error:""}
              name={name} />
         {showLabel && (  <label className="outerLabel" htmlFor={`personalInfo${name}`} >
              {label}
            </label>)}
       </div>
       : 
       <div className="rowDirection">
              <FormControl>
              {screenWidth<501 ? <InputLabel id={`personalInfo${name}`}>{label}</InputLabel>:""}
                <OutlinedInput name={name}
                    type={showPassword ? 'text':'password'}
                    id ={`inputField${name}`} 
                    className="passwordInput"
                    error={Boolean(error)}
                    onChange={(e:ChangeEvent)=>changeHandler(e)}
                    value={formFields[name]}
                      endAdornment={
                        <InputAdornment position="end"
                          >
                          <IconButton
                            sx={{color:'white'}}
                            onMouseUp={()=>setShowPassword(false)}
                            onMouseDown={()=>setShowPassword(true)} >
                              {showPassword ?<VisibilityOff/>: <Visibility /> }
                          </IconButton>
                        </InputAdornment>
                        }
                    />
                   {Boolean(error) &&
                  ( <FormHelperText sx={{color:'white',textShadow:"3px red"}}  id ={`inputField${name}`} >
                     {error}
                    </FormHelperText>)}
              </FormControl>      
              <label className="outerLabel" htmlFor={`personalInfo${name}`}>
                {label}
              </label>
      </div>}
   </>
    )
}