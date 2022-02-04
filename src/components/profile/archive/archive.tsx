import './archive.scss'
import {SortButton} from '../../../tools/formfields/sortbutton/sortbutton'
import {TabPanel} from '../../../tools/formfields/tab/tabpanel'
import {MyTable} from '../../../tools/formfields/table/table'
import archive from '../../../images/profile/archive.svg'
import 
  {
      Tabs,
      Tab,
      Avatar,
    
  } 
from '@mui/material'
import {useState ,SyntheticEvent} from 'react'
import {DetailsDialog} from './detailsdialog/detailsdialog'





interface Iele {number:number,sentWeight:string
    ,realWeight:string,realPay:string,pay:string,
     remain:string,weightSub:string,detail:string}
     const arr=['رقم الفاتورة','الوزن الحقيقي','الوزن المرسل','الفرق','المبلغ المدفوع','المبلغ الحقيقي','الفرق',''].reverse()
     const arrBody :Iele[]=[{remain:'2$',realPay:'18$',pay:'20$',weightSub:'1.6kg',sentWeight:'10kg'
                      ,realWeight:'8.4kg',number:29384,detail:'التفاصيل'},
                      {remain:'2$',realPay:'18$',pay:'20$',weightSub:'1.6kg',sentWeight:'10kg'
                      ,realWeight:'8.4kg',number:29384,detail:'التفاصيل'},
                      {remain:'2$',realPay:'18$',pay:'20$',weightSub:'1.6kg',sentWeight:'10kg'
                      ,realWeight:'8.4kg',number:29384,detail:'التفاصيل'},
                      {remain:'2$',realPay:'18$',pay:'20$',weightSub:'1.6kg',sentWeight:'10kg'
                      ,realWeight:'8.4kg',number:29384,detail:'التفاصيل'},
                      {remain:'2$',realPay:'18$',pay:'20$',weightSub:'1.6kg',sentWeight:'10kg'
                      ,realWeight:'8.4kg',number:29384,detail:'التفاصيل'},
                      {remain:'2$',realPay:'18$',pay:'20$',weightSub:'1.6kg',sentWeight:'10kg'
                      ,realWeight:'8.4kg',number:29384,detail:'التفاصيل'},
                      {remain:'2$',realPay:'18$',pay:'20$',weightSub:'1.6kg',sentWeight:'10kg'
                      ,realWeight:'8.4kg',number:29384,detail:'التفاصيل'},
                      {remain:'2$',realPay:'18$',pay:'20$',weightSub:'1.6kg',sentWeight:'10kg'
                      ,realWeight:'8.4kg',number:29384,detail:'التفاصيل'}
                     , {remain:'2$',realPay:'18$',pay:'20$',weightSub:'1.6kg',sentWeight:'10kg'
                     ,realWeight:'8.4kg',number:29384,detail:'التفاصيل'}, 
                     {remain:'2$',realPay:'18$',pay:'20$',weightSub:'1.6kg',sentWeight:'10kg'
                     ,realWeight:'8.4kg',number:29384,detail:'التفاصيل'},
                     {remain:'2$',realPay:'18$',pay:'20$',weightSub:'1.6kg',sentWeight:'10kg'
                     ,realWeight:'8.4kg',number:29384,detail:'التفاصيل'},
                     {remain:'2$',realPay:'18$',pay:'20$',weightSub:'1.6kg',sentWeight:'10kg'
                     ,realWeight:'8.4kg',number:29384,detail:'التفاصيل'}]


export const Archive = () =>{
    const [value,setValue] =useState(0)
    const [open,setOpen] =useState(false)
    const [unPaid,setUnPaid] =useState(false)
    const changeHandler=(e:SyntheticEvent<Element,Event>,num:number)=>{
        setValue(num)
       if (num ===1){ setUnPaid(true)}
       else {
           setUnPaid(false)
       }
    }

    return  (
        <div className="archiveContainer">
            <div className="archiveTitle">
                <div className="archiveAvatar">
                    <p>ارشيف الفواتير</p>
                    <Avatar src={archive} />
                    
                </div>
            </div>
            <div className="archiveBody">
                <div className="tabsGroup">
                    <Tabs TabIndicatorProps={{style:{display:'none'}}} value={value} onChange={changeHandler}>
                            <Tab  label=" المدفوعة" />
                            <Tab  label=" غير المدفوعة" />
                        
                    </Tabs>
                    <SortButton  />
                </div>
                <TabPanel value={value} index={0}>
                    <div className="Table">
                       <MyTable headArray={arr} bodyArray={arrBody} setOpen={setOpen} />
                    </div>
                </TabPanel>
                <TabPanel  value={value} index={1}>
                    <div className="Table">
                      <MyTable headArray={arr} bodyArray={arrBody} setOpen={setOpen} />
                    </div>
                </TabPanel>
            </div>
            {<DetailsDialog unPaid= {unPaid} open={open} setOpen={setOpen} />}
        </div>
    )
}