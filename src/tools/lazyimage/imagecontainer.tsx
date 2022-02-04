import './imagecontainer.scss'
import {useState} from 'react'

import {ImagePlaceHolder} from './placeholder'

interface Iprops {classCss:string,src:string}
export const ImageContainer =({classCss,src}:Iprops) =>{

const [loaded,setLoaded]=useState(false)
    return (
        <>
     
          
       <ImagePlaceHolder loaded={loaded} />
        <img 
          onLoad={()=>setLoaded(true)}
          
          className={classCss}
          src={src}
          alt="wait"
          />
      
        </>
    )
}