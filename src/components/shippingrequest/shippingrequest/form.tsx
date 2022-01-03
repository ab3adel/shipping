import 
{
    FormControl,
    Select,
    Input,
    Button,
    FormLabel,
    Grid,
    TextField,
    Typography,
    Stack,
    InputAdornment
} 
from '@mui/material'

import 
 {DesktopDatePicker} 
from '@mui/lab'
import 
{
    ArrowDownward,
    Check
} 
from '@mui/icons-material'
import LeftArrow  from '../../../images/leftarrow.svg'
import RightArrow  from '../../../images/rightarrow.svg'
import Food from '../../../images/food.svg'
import Case from '../../../images/case.svg'
import Cloth from '../../../images/cloth.svg'
import Tyre from '../../../images/tyre.svg'
import  {useState} from 'react'
export const MyShippingRequestForm =()=>{
const [senderAddress ,setSenderAddress] =useState("")
const openOptions=(e :React.MouseEvent) =>{
    e.preventDefault();
    let panel = document.querySelector('.collapse') as HTMLDivElement
    let left = document.querySelector('#leftArrow') as HTMLImageElement
    let right = document.querySelector('#rightArrow') as HTMLImageElement
    left.style.visibility='visible';
    right.style.visibility='visible';
    if ( panel.style.opacity === '1')
    {
       
        panel.style.maxHeight=`0vh`;
        panel.style.opacity='0';
    }
    else {
        panel.style.opacity='1';
        panel.style.maxHeight=`30vh`;
    }
  
}
const scroll=(str:string)=>{
    console.log('left')
    let div = document.querySelector('.collapse') as HTMLDivElement
    if (str==="left") {
        div.scrollLeft=div.scrollLeft + 10
    }
    else {
        div.scrollLeft= div.scrollLeft-10
    }
}
const checkOption =(str:string)=>{
    let checkBox = document.querySelector(`#${str}`) as HTMLInputElement
    checkBox.checked= !checkBox.checked;
}
return (
    <div>
            <form className="srForm">
                            
                                    <div className='optionsContainer'  >
                                        <FormLabel htmlFor='select' > نوع الشحنة</FormLabel>
                                        <button onClick={(e)=>openOptions(e)} > 
                                            <ArrowDownward  
                                              style={{color:'white',fontSize:'0.8rem'}} /> اختر
                                        </button>
                                        <div className='collapse'>
                                            <div className="collapseContentContainer">
                                                    <div className='optionContainer'>
                                                        <img className="optionImage" 
                                                          
                                                          onClick={()=>checkOption('food')}
                                                         src={Food} />
                                                        <div>
                                                            <input id="food" type={'checkbox'} name='food'/>
                                                            <label htmlFor="food">مواد غذائية</label>

                                                        </div>
                                                    </div>
                                                    <div className='optionContainer'>
                                                        <img className="optionImage" 
                                                             onClick={()=>checkOption('case')}
                                                        src={Case} />
                                                        <div>
                                                            <input id="case" type={'checkbox'} name='case'/>
                                                            <label htmlFor="case"> حقائب</label>

                                                        </div>
                                                    </div>
                                                    <div className='optionContainer'>
                                                        <img className="optionImage" 
                                                            onClick={()=>checkOption('tyre')}
                                                         src={Tyre} />
                                                        <div>
                                                            <input id='tyre' type={'checkbox'} name='tyre'/>
                                                            <label htmlFor="tyre"> اطارات</label>

                                                        </div>
                                                    </div>
                                                    <div className='optionContainer'>
                                                        <img className="optionImage" 
                                                            onClick={()=>checkOption('cloth')}
                                                         src={Cloth} />
                                                        <div>
                                                            <input id="cloth" type={'checkbox'} name='cloth'/>
                                                            <label htmlFor="cloth"> ألبسة</label>

                                                        </div>
                                                    </div>
                                                    
                                            </div>
                                           
                                        </div>
                                        <img src={RightArrow}
                                          id="leftArrow"
                                          onClick={()=>scroll('right')}
                                          className="rightArrow"/>
                                        <img src={LeftArrow}
                                          id="rightArrow"
                                         onClick={()=>scroll('left')}
                                         className="leftArrow" />
                                    </div>
                                    <div className="container"  >
                                        <label htmlFor="address">عنوان المرسل</label>
                                        <TextField  
                                        className="addressInput"
                                        sx={{
                                            color:"white"
                                        }}
                                        InputProps={{
                                            endAdornment:<InputAdornment position="start">الافتراضي</InputAdornment>
                                        }}
                                          value={senderAddress}
                                          onChange={(e)=>setSenderAddress(e.currentTarget.value)}
                                         name="address" />
                                    </div>
                                    <div  className='group' >
                                        <label htmlFor="group">أبعاد الشحنة</label>
                                        <div className='item'>
                                            <label htmlFor="longitud">الطول</label>
                                            <TextField 
                                            type={"number"}
                                              InputProps={{
                                                  endAdornment:<InputAdornment position="start">cm</InputAdornment>
                                              }}
                                            name="longitud"/>
                                        </div>
                                        <div className='item'>
                                            <label htmlFor="width">العرض</label>
                                            <TextField 
                                             type={"number"}
                                              InputProps={{
                                                endAdornment:<InputAdornment position="start">cm</InputAdornment>
                                            }}
                                            name="width"/>
                                        </div>
                                        <div className='item'>
                                            <label htmlFor="height">الارتفاع</label>
                                            <TextField 
                                            type={"number"}
                                              InputProps={{
                                                endAdornment:<InputAdornment position="start">cm</InputAdornment>
                                            }}
                                              name="height"/>
                                        </div>
                                        <div  className='item'>
                                            <label htmlFor="weight">الوزن</label>
                                            <TextField 
                                            type={"number"}
                                               InputProps={{
                                                endAdornment:<InputAdornment position="start">cm</InputAdornment>
                                            }}
                                              name="weight"/>
                                        </div>
                                    </div>
                                    <div  className="container">
                                            <label htmlFor="receptant">عنوان المستقبل </label>
                                            <TextField className="addressInput" 
                                             InputProps={{
                                                endAdornment:<InputAdornment position="start">الافتراضي</InputAdornment>
                                            }}
                                            name="receptant"/>
                                    </div>
                                    <div className="dateContainer">
                                        <label htmlFor="date">تاريخ الاستلام</label>
                                        <input type="date" name="date"  />
                                    </div>
                        
            </form>
          
    </div>
)



}