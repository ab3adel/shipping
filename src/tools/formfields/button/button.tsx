import {Button} from '@mui/material'
import { ReactChild } from 'react'
import './button.scss'

interface Iprops {children:ReactChild,disabled?:boolean,fun?:(e:React.MouseEvent)=>void}

export const MyButton =({children,disabled=false,fun}:Iprops) =>{

    return (
        <Button
        className="button"
         sx={{
            
                 backgroundColor:'#00A4DE',
                 color:'white',
                 '& .MuiButton-root:hover' : {
                     backgroundColor:'#0377a1',
                 }
             
         }}
     
         disabled={disabled}
         onClick={fun}
         >{children}</Button>
    )
}