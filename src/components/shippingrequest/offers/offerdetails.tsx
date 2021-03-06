import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Fedex from '../../../images/fedex.svg'
import Dhl from '../../../images/dhl.svg'
import Ups from '../../../images/ups.svg'
import Clock from '../../../images/clock.svg'
import {CheckBox,Share} from '@mui/icons-material'
import 
    {   Dialog
        ,DialogActions
        ,DialogContent
        ,Checkbox
    } 
from '@mui/material'
import { translator } from '../../../tools/translator'
interface itestData {src:string,id:number,name:string,cost:number}
export const OfferDetails =()=>{
    let TestData = [{src:Fedex,id:1,name:"Fedex",cost:25}
                    ,{src:Dhl,id:2,name:"Dhl",cost:30}
                    ,{src:Ups,id:3,name:"Ups",cost:40}]
    let {id }= useParams()
   let [offer,setOffer]=useState <itestData>({src:'',id:0,name:'',cost:0})
   const [open,setOpen] = useState (false)
   const  [billChecked,setBillChecked]=useState(false)
    const addLink = (str:string)=>{
        let div = document.querySelector(".addLink") as HTMLDivElement
        if (str === "show"){
        let radio=   document.querySelector('#sender') as HTMLInputElement;
        radio.checked=false;
        div.style.display="flex";
    }
      else {
        let radio=   document.querySelector('#reciever') as HTMLInputElement;
        radio.checked=false;
        div.style.display="none";
      }
    }
 
    useEffect(()=>{
        if (id) {
            let idNum = Number(id.slice(1))
            let obj :itestData= TestData.find(ele=>ele.id === idNum)!
            setOffer(pre=>({pre,...obj}))       
        }
    },[id])

    return  (
        <div className="offerDetailsMain">
            <div className="offerDetailsUpperPart">
            {translator('ShippingPage','body','OfferDetailsSection','mainTitle')} 
            </div>
            <div className="offerDetailsLowerPart">
                 <div className="infoContainer">
                     <img src={offer.src} />
                     <div className="info">
                         <div className="line">
                            <span className="value">{offer.name}</span>{translator('ShippingPage','body','OfferDetailsSection','body','companyName')} 
                         </div>
                         <div className="line">
                            <span  className="value">{offer.cost}</span>{translator('ShippingPage','body','OfferDetailsSection','body','offerValue')} 
                         </div>
                         <div className="checkboxInput">
                               
                                <Checkbox checked={billChecked}
                                       onClick={()=>setBillChecked(!billChecked)}
                                     name="bill" id="bill" />
                                <label htmlFor="bill">
                                {translator('ShippingPage','body','OfferDetailsSection','body','checkBox')} 
                                </label>
                               
                         </div>
                     </div>
                 </div>
                <div className="radioButton">
                    <div className="group">
                        <label htmlFor='sender'>
                        {translator('ShippingPage','body','OfferDetailsSection','body','Inputs','sender')} 
                        </label>
                        <input id="sender" type={'radio'} name="sender"  onClick={()=>addLink('hide')}/>
                    </div>
                    <div className="group">
                        <label htmlFor='reciever'> 
                        {translator('ShippingPage','body','OfferDetailsSection','body','Inputs','reciever')} 
                        </label>
                        <input id="reciever" type={'radio'} name="reciever" onClick={()=>addLink('show')} />
                    </div>
                </div>

                <div className="addLink">
                    <button >
                          <Share fontSize='inherit'/>
                          {translator('Buttons','Share')} 
                    </button>
                    <input type={'text'}></input>
                </div>
                
            </div>
            <div className="saveOrder">
                      <button onClick={()=>setOpen(true)}>
                      {translator('Buttons','Save')} 
                      </button>
                </div>
        {open && (
            <Dialog  
               className="notsDialog"
             open={open} onClose={()=>setOpen(false)}>
                <DialogContent className="dialogContent"
                  sx={{
                      display:"flex",
                      flexDirection:"column",
                      alignItems:"center",
                      textAlign:"center",
                      whiteSpace:'nowrap',
                      fontSize:"large",
                      fontFamily:"cursive",
                      justifyContent:"enter",
                      fontWeight:"bold"
                  }}>
                     <h5 style={{marginBottom:"2rem"}}><CheckBox
                        style={{color:"green"}}
                      fontSize="small"/> ???? ?????? ?????????? ????????????????</h5>
                      <div className="body">
                        ?????????????? ?????????? 
                       <div className='clock' >
                         <img src={Clock}/> ?????????? ????????????????
                       </div>
                         ?????????????? ???? ?????????? ??????????{" "}
                       </div>
                </DialogContent>
                <DialogActions sx={{
                    display:"flex",
                    justifyContent:"center"
                }}>
                    <button  style={{width:"20%"
                                   ,border:"none",
                                    fontSize:"large",
                                    boxShadow:"2px 2px 2px grey",
                                borderRadius:"5px"}}
                    onClick={()=>setOpen(false)}>????</button>
                </DialogActions>
            </Dialog>
        )}
        </div>
    )
}