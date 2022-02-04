import 
{
    Accordion
    ,AccordionSummary
    ,AccordionDetails
    ,Select
    ,Typography
    ,InputAdornment,
    Input,
    IconButton,
    Box
} 
from '@mui/material'
import {ArrowUpward,ArrowDropDown} from '@mui/icons-material'
import {useState} from 'react'

interface Iprops {title:string,content:string}

export const Question = ({title,content}:Iprops) =>{

const [isSelected,setIsSelected]= useState(false)
const [selected,setSelected]=useState(title)


    return (
        <Accordion expanded={isSelected} >
            <AccordionSummary>
                <Box onClick={()=>setIsSelected(!isSelected)}
                 className={isSelected ?'selectedQuestion':''}>

                        <Typography variant='subtitle1'>
                            {title}
                        </Typography>
                        <IconButton>

                          <ArrowDropDown/>
                        </IconButton>
                </Box>
            
                 
                  
               

            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body1">
                    {content}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}