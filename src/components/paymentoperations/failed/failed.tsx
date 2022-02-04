import './failed.scss'
import {CancelOutlined} from '@mui/icons-material'
import SadFace from '../../../images/paystate/sadface.svg'
import {MyButton} from '../../../tools/formfields/button/button'
import {Button} from '@mui/material'
export const Failed = () =>{

    return (
       <div className="failedContainer">
           <div className="failedTitle">
               <CancelOutlined fontSize="small" color="inherit"/>
               <p>الشحنة رقم 22339 فشلت عملية الدفع</p>
           </div>
           <div className="sadFace">
              <img src={SadFace}/>
           </div>
           <div className="failedButtons">
               <MyButton fun={()=>{}} > ارسال تقرير</MyButton>
              <Button className="retry">اعادة المحاولة</Button>
           </div>
       </div>
    )
}