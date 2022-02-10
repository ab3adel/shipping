import {Checkbox} from '@mui/material'
interface iState {[key:string]:boolean}
interface iProps {
    img:string,nameEn:string,nameAr:string,checkOption:Function,checkBox:iState
}

export const Option =({img,nameEn,nameAr,checkOption,checkBox}:iProps)=>{


    return (
        <div className='optionContainer'>
        <img className="optionImage" 
         
          onClick={()=>checkOption(nameEn)}
         src={img} />
        <div className="mobileView">
            
            <Checkbox checked={checkBox[nameEn]} id ={nameEn} name={nameEn} />
            <label htmlFor={nameEn}>{nameAr}</label>

        </div>
    </div>
    )
}