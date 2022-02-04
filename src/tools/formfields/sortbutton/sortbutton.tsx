import
 {
     ArrowDownward,
     ArrowUpward
    } 
from 
'@mui/icons-material'
import './sortbutton.scss'
import {useState} from 'react'

export const SortButton =() =>{
    const [down,setDown] =useState(false)
    return (
        <button className="sortButton" onClick= {() =>setDown (!down)} >
                    ترتريب
                    {
                        down?
                      <ArrowDownward id="sortArrowDown" fontSize='inherit' />
                     :
                      <ArrowUpward id="sortArrowUp" fontSize='inherit' />
                    }
                    حسب
                    الاحدث
        </button>
    )
}