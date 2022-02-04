import {Snackbar,SnackbarCloseReason,AlertProps} from '@mui/material'
import Alert from '@mui/material/Alert'
import React, {forwardRef} from 'react'
export type severity ='error'|'info'|'success'|'warning'
interface Iprops {severity:severity,children:string,isNotified:boolean,setIsNotified:Function}
const MyAlert = forwardRef(function MyAlert (props:AlertProps,ref:any) {
    return <Alert elevation={6} ref={ref} variant='filled' {...props}/>
})

export const Notify = (props:Iprops) =>{
const {severity , children,isNotified,setIsNotified}= props
const handleColse = (event:Event | React.SyntheticEvent<any,Event>,reason:SnackbarCloseReason)=>{
    if (reason === "clickaway") return
    else setIsNotified(false)

}
const alertClose =(event: React.SyntheticEvent<any,Event>) =>{
    setIsNotified(false)
}
    return (
        <Snackbar open={isNotified} onClose={handleColse} autoHideDuration={4000}>
            <MyAlert onClose={alertClose} severity={severity} sx={{width:'100%'}}>
                {children}
            </MyAlert>
        </Snackbar>
    )
}