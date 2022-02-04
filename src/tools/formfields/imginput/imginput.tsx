
import './imginput.scss'
import {useState,ChangeEvent,useEffect} from 'react'
import Upload from '../../../images/signup/upload.svg'
interface Iprops {file:string|undefined,setFile:Function}
export const ImgInput = ({file,setFile}:Iprops) =>{
    const [title,setTitle]= useState('صورة الهوية /جواز السفر')
    const [size,setSize] =useState({maxHeight:'0px',maxWidth:'0px'})
    const [screenWidth,setScreenWidth] =useState(0)
    useEffect (()=>{
        setScreenWidth(window.innerWidth)
    },[])

    const  fetchFile =(e:React.MouseEvent) =>{
        let div = e.currentTarget as HTMLDivElement;
        let input =div.firstChild as HTMLInputElement;
        input.click();
    }
    const changeHandler =(e:ChangeEvent<HTMLInputElement>)=>{
        let div = document.querySelector(".identity") as HTMLDivElement
        let divParent = div.parentElement as HTMLDivElement
        let input = e.currentTarget as HTMLInputElement
        let title = document.querySelector("#identityTitle") as HTMLSpanElement
        let files = input.files
        let divWidth =div.clientWidth
        let divHeight =div.clientHeight
        if (files !== null)  {
            let inputFile = files[0] 
            let imgSrc=URL.createObjectURL(inputFile)
            setFile(imgSrc)
            setTitle("تغيير الصورة")
            
            setSize(pre=>({...pre,maxHeight:`${divHeight}px`,maxWidth:`${divWidth}px`}))
            title.style.bottom="-15%";
            divParent.style.height="auto";
 
        }
    }
    return (
        <div className="identity"  onClick={(e:React.MouseEvent)=>fetchFile(e)}>
              <input  type="file" onChange={(e:ChangeEvent<HTMLInputElement>)=>changeHandler(e)}/>
            
              { file !== undefined ? <img  src={file} 
                          style={{...size}}
                           id="identityInput"/> 
                           :<img src={Upload} style={{width:'45px',height:'45px'
                                            ,position:"absolute",right:"auto"}} /> }
                
               <span id="identityTitle">  {title} </span>
      </div>
    )
}