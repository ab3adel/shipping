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
    InputAdornment,
    Checkbox
} 
from '@mui/material'

import 
 {DesktopDatePicker} 
from '@mui/lab'
import 
{
    ArrowDownward,
    Check,
    ArrowUpward
} 
from '@mui/icons-material'
import LeftArrow  from '../../../images/leftarrow.svg'
import RightArrow  from '../../../images/rightarrow.svg'
import Food from '../../../images/food.svg'
import Case from '../../../images/case.svg'
import Cloth from '../../../images/cloth.svg'
import Tyre from '../../../images/tyre.svg'
import  {useState,useEffect} from 'react'
interface Ichoose {
    [key:string]:boolean 
}

export const MyShippingRequestForm =()=>{
const [senderAddress ,setSenderAddress] =useState("")
const [checkBox,setCheckBox]= useState<Ichoose>({food:false,case:false,cloth:false,tyre:false})
const [screenWidth,setScreenWidth]= useState(0)
 useEffect (()=>{
  setScreenWidth(window.innerWidth)
 },[])
const openOptions=(e :React.MouseEvent) =>{
    e.preventDefault();
    let panel = document.querySelector('.collapse') as HTMLDivElement
    let left = document.querySelector('#leftArrow') as HTMLImageElement
    let right = document.querySelector('#rightArrow') as HTMLImageElement
    let arrowDown = document.querySelector('#arrowDown') as HTMLImageElement
    let arrowUp = document.querySelector('#arrowUp') as HTMLImageElement
 
    if ( panel.style.opacity === '1')
    {
       
        panel.style.maxHeight=`0vh`;
        panel.style.opacity='0';
        left.style.opacity='0';
        right.style.opacity='0';
        arrowDown.style.display="block";
        arrowUp.style.display="none";
    }
    else {
        panel.style.opacity='1';
        if (screenWidth> 770) {
            panel.style.maxHeight=`30vh`;
        }
        else {
            panel.style.maxHeight=`10vh`;
        }
       
        left.style.opacity='1';
        right.style.opacity='1';
        arrowDown.style.display="none";
        arrowUp.style.display="block";
    }
  
}
const scroll=(str:string)=>{

    let div = document.querySelector('.collapse') as HTMLDivElement
    if (str==="left") {
        div.scrollLeft=div.scrollLeft + 50
    }
    else {
        div.scrollLeft= div.scrollLeft-50
    }
}
const checkOption =(str:string)=>{
    console.log(str)
    let obj = {...checkBox}
    Object.keys(obj).map(ele=>{
        if (ele=== str) {
            obj[ele]=!checkBox[ele]
        }
    })
    setCheckBox(obj)
   
   
}
return (

            <form className="srForm">
                            
                                    <div className='optionsContainer'  >
                                        <FormLabel htmlFor='select' > نوع الشحنة</FormLabel>
                                        <button onClick={(e)=>openOptions(e)} > 
                                            <ArrowDownward  id ="arrowDown"
                                              style={{color:'inherit',fontSize:'0.8rem'}} />
                                            <ArrowUpward  id ="arrowUp"
                                              style={{color:'inherit',fontSize:'0.8rem',display:'none'}} /> اختر
                                        </button>
                                        <div className='collapse'>
                                            <div className="collapseContentContainer">
                                                    <div className='optionContainer'>
                                                        <img className="optionImage" 
                                                   
                                                          onClick={()=>checkOption('food')}
                                                         src={Food} />
                                                        <div className="mobileView">
                                                            
                                                            <Checkbox checked={checkBox.food} id ="food" name="food" />
                                                            <label htmlFor="food">مواد غذائية</label>

                                                        </div>
                                                    </div>
                                                    <div className='optionContainer'>
                                                        <img className="optionImage" 
                                                      
                                                             onClick={()=>checkOption('case')}
                                                        src={Case} />
                                                        <div className="mobileView">
                                                            <Checkbox checked={checkBox.case} id ="case" name="case" />
                                                            <label htmlFor="case"> حقائب</label>

                                                        </div>
                                                    </div>
                                                    <div className='optionContainer'>
                                                        <img className="optionImage" 
                                                         
                                                            onClick={()=>checkOption('tyre')}
                                                         src={Tyre} />
                                                        <div className="mobileView"> 
                                                            
                                                            <Checkbox checked={checkBox.tyre} id ="tyre" name="tyre" />
                                                            <label htmlFor="tyre"> اطارات</label>

                                                        </div>
                                                    </div>
                                                    <div className='optionContainer'>
                                                        <img className="optionImage" 
                                                    
                                                            onClick={()=>checkOption('cloth')}
                                                         src={Cloth} />
                                                        <div className="mobileView">
                                                          
                                                            <Checkbox checked={checkBox.cloth} id ="cloth" name="cloth" />
                                                            <label htmlFor="cloth"> ألبسة</label>

                                                        </div>
                                                    </div>
                                                    
                                            </div>
                                           
                                        </div>
                                        <img src={RightArrow}
                                          id="rightArrow"
                                          onClick={()=>scroll('right')}
                                          className="rightArrow"/>
                                        <img src={LeftArrow}
                                          id="leftArrow"
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

)



}