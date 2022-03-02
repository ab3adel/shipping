import Wave from '../../../images/homepage/wave2.svg'
import './home-section-two.scss'
import Boxes from '../../../images/homepage/boxes.png'
import Packing from '../../../images/homepage/packing.png'
import Sending from '../../../images/homepage/sending.png'
import Shipping1 from '../../../images/homepage/shipping1.png'
import Shipping2 from '../../../images/homepage/shipping2.png'
import Shipping3 from '../../../images/homepage/shipping3.png'
import { useEffect, useState,useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {translator,arr3} from '../../../tools/translator'
export const HomeSectionTwo =() =>{
let [jNumber,setJNumber]= useState(0)
let imgRef= useRef<HTMLImageElement|null>(null)
let num = useRef(0)
let arr:string[]=[Boxes,Packing,Sending]
let arr1:string[]=[Shipping1,Shipping2,Shipping3]

let navigate =useNavigate()
const animateRightCol = (j:number) => {

    let img = document.querySelector('#rightCol') as HTMLImageElement
    let img1 = document.querySelector('#leftCol') as HTMLImageElement
    let edg1 =document.querySelector('.edg1') as HTMLDivElement
    let edg2=document.querySelector('.edg2') as HTMLDivElement
    let edg3=document.querySelector('.edg3') as HTMLDivElement
    let dots = document.querySelectorAll('.dot') as NodeListOf<HTMLDivElement>
    let txt = document.querySelector("#text") as HTMLHeadingElement 
        img.src=arr[j];
        img1.src=arr1[j];
        txt.innerHTML=arr3[j];
        let imgHeight = (imgRef.current as HTMLImageElement).height
    
        /*
        edg1.style.height=`${imgHeight }`+'px';
        edg2.style.height=imgHeight .toString()+'px';
        edg3.style.height=imgHeight .toString()+'px';
        */
    
        dots.forEach((ele,index)=>{
            if (j === index) {
                ele.style.background="#00A4DE";
            }
            else {
                ele.style.background="grey";
            }
        })
       

}
useEffect(()=>{
  let isMounted= true;
 setInterval( ()=>{
    if (isMounted){
        if (num.current > 2 ) num.current=0;
        animateRightCol(num.current)
        num.current +=1
        setJNumber(num.current)

       }
    },3000 )

   return ()=>{isMounted=false}
    },[jNumber])

    return (
            <div className="homeTwoContainer">
                <div className="title">
                  {translator('HomePage','HomePageSection2','mainTitle')}
                    
                </div>
                <div className="body">
                    <div className="leftCol">
                           <div className="imagesContainer">
                                <div className="edg1"></div>
                                <div className="edg2"></div>
                                <div className="edg3"></div>
                                <img ref={imgRef}  id="leftCol" src={Shipping1}  />
                                <div className='circles'> 
                                    <div className="dot" />
                                    <div className="dot" />
                                    <div className="dot" />
                                </div>
                            </div>
                    </div>
                    <div className="rightCol">
                        <button onClick={()=>navigate('/shippingrequest')}> {translator('HomePage','HomePageSection2','buttonTitle')} </button>
                     
                        <div className="imgs">
                          <h5 id="text"></h5>
                          <img id="rightCol" src={Packing} />
                        </div>
                    </div>
                </div>
                <div className="footer2">
                    <img src={Wave} />
                </div>
            </div>
    )
}