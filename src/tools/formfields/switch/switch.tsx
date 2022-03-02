import './switch.scss'
import 
{
    Switch,
    Typography,
    Stack,
    styled
    
} 
from '@mui/material'

interface iProps {leftLabel:string,rightLabel:string
                  ,checked:boolean,setChecked:Function}
export const MultiSwitch=({leftLabel,rightLabel
                           ,checked,setChecked}:iProps)=>{
const WhiteSwitch=styled(Switch)(({theme})=>({
'& .MuiSwitch-switchBase.Mui-checked':{
    color:'white',
    [theme.breakpoints.up('sm')]:{
        transform:'rotate(90deg)'
    }
},
".MuiSwitch-root":{
    [theme.breakpoints.up('sm')]:{
        transform:'rotate(90deg)'
    }
}
}))
const handleChange= (event:React.ChangeEvent)=>{
    
let str=rightLabel
if (checked) str=leftLabel
    setChecked(str)
}

    return (
        <Stack direction={window.innerWidth>500 ? 'row':'column'}>
            <Typography style={{color:checked?'black':'white'}}>{leftLabel}</Typography>
            <WhiteSwitch  
          
             checked={checked} 
             onChange={handleChange} />
            <Typography style={{color:checked?'white':'black'}}>{rightLabel}</Typography>
        </Stack>
    )
}