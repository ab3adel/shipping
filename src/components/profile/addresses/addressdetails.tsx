import 
{
     Dialog
    ,DialogContent
    ,Tab
    ,Tabs
    ,Typography
} 
from '@mui/material'
import {TabPanel} from '../../../tools/formfields/tab/tabpanel'
import {SyntheticEvent, useState} from 'react'
export interface iAddress  {line_1:string,line_2:string,line_3:string, post_code:number,state_code:number,
    country_code:string,city:string,type:string,main:number}
interface iProps {open:boolean,setOpen:Function,data:any
   //{name_ar:string,customer_id:number,addresses:iAddress[]}
}

export const AddressDetails =({open,setOpen,data}:iProps)=>{

const [value,setValue]= useState(0)
const changeHandler=(e:SyntheticEvent<Element,Event>,num:number)=>{
    setValue(num)
}
const handleClose=()=>{
    
    setOpen(false)
}
    return (
        <Dialog open={open} onClose={()=>handleClose()}>
            <DialogContent>
                <h1>{data.name_ar?data.name_ar:data.name_en}</h1>
            <Tabs TabIndicatorProps={{style:{display:'none'}}} value={value} onChange={changeHandler}>
                {data?.addresses?.map((ele:iAddress,index:number)=>{
                    if (ele.main) return (<Tab key={index}  label="عنوان رئيسي" />)
                   return (<Tab key={index}  label={`address${index}`} />)
                   
                })}
            </Tabs>
            {data?.addresses?.map((ele:iAddress,index:number)=>{
                return (<TabPanel key={index} value={value} index={index}>
                        
                         <div className="addressesInfo">
                             <div className="addressInfo">
                                <Typography sx={{fontWeight:'bold',color:'whitesmoke'}} variant='subtitle1'>Type:</Typography>
                                <Typography variant="body1">{ele.type}</Typography>
                             </div>
                             <div className="addressInfo">
                                <Typography sx={{fontWeight:'bold',color:'whitesmoke'}} variant='subtitle1'>Line 1:</Typography>
                                <Typography variant="body1">{ele.line_1}</Typography>
                             </div>
                             <div className="addressInfo">
                                <Typography sx={{fontWeight:'bold',color:'whitesmoke'}} variant='subtitle1'>Line 2:</Typography>
                                <Typography variant="body1">{ele.line_2}</Typography>
                             </div>
                             <div className="addressInfo">
                                <Typography sx={{fontWeight:'bold',color:'whitesmoke'}} variant='subtitle1'>Line 3:</Typography>
                                <Typography variant="body1">{ele.line_3}</Typography>
                             </div>
                             <div className="addressInfo">
                                <Typography sx={{fontWeight:'bold',color:'whitesmoke'}} variant='subtitle1'>Country:</Typography>
                                <Typography variant="body1">{ele.country_code}</Typography>
                             </div>
                             <div className="addressInfo">
                                <Typography sx={{fontWeight:'bold',color:'whitesmoke'}} variant='subtitle1'>City:</Typography>
                                <Typography variant="body1">{ele.city}</Typography>
                             </div>
                             <div className="addressInfo">
                                <Typography sx={{fontWeight:'bold',color:'whitesmoke'}} variant='subtitle1'>Post Code:</Typography>
                                <Typography variant="body1">{ele.post_code}</Typography>
                             </div>
                             <div className="addressInfo">
                                <Typography sx={{fontWeight:'bold',color:'whitesmoke'}} variant='subtitle1'>State Code:</Typography>
                                <Typography variant="body1">{ele.state_code}</Typography>
                             </div>
                             
                         </div>
                       </TabPanel>)
            })}
            </DialogContent>
        </Dialog>
    )
}