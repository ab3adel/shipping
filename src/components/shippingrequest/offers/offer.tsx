
import {ImageContainer} from '../../../tools/lazyimage/imagecontainer'

interface Iprops {img:string,company:string,offerValue:number,chooseOffer:Function,num:number}

export const Offer =({img,company,offerValue,chooseOffer,num}:Iprops) =>{
return (
    <>
        <div className='imgContainer'>
            <ImageContainer classCss='' src={img} />
    
        </div>
        <div className="offersInfo">
            <div className="line">
                <span>اسم الشركة</span>  <span className='value'>{company}</span>
            </div>
            <div className="line"> 
                <span> قيمة العرض</span>  <span className='value'>{offerValue}</span>
            </div>
        </div>
        <div className="offersBtn">
            <button onClick={()=>chooseOffer(num)}> اختار العرض</button>
        </div>
     </>
)

}