
import {Skeleton} from '@mui/material' 


export const ImagePlaceHolder =({loaded}:{loaded:boolean})=>{

    if (loaded) return null
    
    return (  <Skeleton className="placeHolderImage" variant={'rectangular'} width={150} height={150}/>)
    
}