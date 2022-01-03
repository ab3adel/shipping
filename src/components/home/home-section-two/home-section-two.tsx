import Wave from '../../../images/homepage/wave2.svg'
import './home-section-two.scss'
import Boxes from '../../../images/homepage/boxes.png'
import Packing from '../../../images/homepage/packing.png'
import Sending from '../../../images/homepage/sending.png'
import Shipping1 from '../../../images/homepage/shipping1.png'
import Shipping2 from '../../../images/homepage/shipping2.png'
import Shipping3 from '../../../images/homepage/shipping3.png'
import { useEffect, useState } from 'react'
import { domainToASCII } from 'url'
export const HomeSectionTwo =() =>{
let [jNumber,setJNumber]=useState(0)
let arr:string[]=[Boxes,Packing,Sending]
let arr1:string[]=[Shipping1,Shipping2,Shipping3]
let arr3:string [] =["من موقع الشحن الى باب منزلك","مغلفة جيدا و بشكل أمن","ملتزمون بالاجراءات الصحية"]
const animateRightCol = (j:number) => {
    console.log('hi',j)
let img = document.querySelector('#rightCol') as HTMLImageElement
let img1 = document.querySelector('#leftCol') as HTMLImageElement
let dots = document.querySelectorAll('.dot') as NodeListOf<HTMLDivElement>
let txt = document.querySelector("#text") as HTMLHeadingElement 
    img.src=arr[j];
    img1.src=arr1[j];
    txt.innerHTML=arr3[j];
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
  
 setInterval( ()=>{
    
    if (jNumber>=3 ) setJNumber(jNumber=0);
animateRightCol(jNumber)


setJNumber(jNumber++)
 },3000 )

   
    },[])

    return (
            <div className="homeTwoContainer">
                <div className="title">
                    ابدأ الان بارسال السحنات بخطوات بسيطة
                </div>
                <div className="body">
                    <div className="leftCol">
                            <div className="edg1"></div>
                            <div className="edg2"></div>
                            <div className="edg3"></div>
                            <img  id="leftCol" src={Shipping1}  />
                            <div className='circles'> 
                               <div className="dot" />
                               <div className="dot" />
                               <div className="dot" />
                            </div>
                    </div>
                    <div className="rightCol">
                        <button>أبدأ الشحن</button>
                     
                        <div className="imgs">
                          <h5 id="text"></h5>
                          <img id="rightCol" src={Packing} />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <img src={Wave} />
                </div>
            </div>
    )
}