import {useState} from 'react'
import './signupdialog.scss'
import 
 {Dialog
  ,DialogContent
  ,DialogActions
  ,TextField
  ,Button
  ,IconButton,
  InputAdornment
 ,OutlinedInput} 
from '@mui/material'
import 
{Visibility,VisibilityOff,AccountCircle}
from '@mui/icons-material'
interface Iprops {open:boolean,setOpen:Function}
export const SignUpDialog =({open,setOpen}:Iprops) =>{

const [showPassword,setShowPassword] = useState(false)
    return (
        <Dialog 
         open={open}
         onClose={()=>setOpen(false)}>
             <DialogContent>
                 <div className="title">
                     تسجيل الدخول
                 </div>
                 <form>
                     <div className="input">
                         <label htmlFor='email'>
                             البريد الالكتروني
                         </label>
                         <OutlinedInput name='email'/>
                           
                     </div>
                     <div className="input">
                         <label htmlFor='password'>
                             كلمة المرور
                         </label>
                         <OutlinedInput name='password'
                           type={showPassword ? 'text':'password'}
                           
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
                     </div>
                 </form>

             </DialogContent>
             <DialogActions>
                 <div className="forgetPassword">
                     هل نسيت كلمة المرور؟
                 </div>
                 <Button >دخول</Button>
                 <div className="signup">
                     <div className="title">
                         <div className="line"></div>
                        <span>لا تملك حساب؟</span> 
                         <div className="line"></div>
                     </div>
                     <Button
                       variant="outlined">انضم الينا</Button>
                 </div>
             </DialogActions>

        </Dialog>
    )
}