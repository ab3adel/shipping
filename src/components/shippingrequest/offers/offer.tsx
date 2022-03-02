
import {ImageContainer} from '../../../tools/lazyimage/imagecontainer'
import { translator } from '../../../tools/translator'

interface Iprops {img:string,company:string,offerValue:number,chooseOffer:Function,num:number}

export const Offer =({img,company,offerValue,chooseOffer,num}:Iprops) =>{
return (
    <>
        <div className='imgContainer'>
            <ImageContainer classCss='' src={img} />
    
        </div>
        <div className="offersInfo">
            <div className="line">
            {translator('ShippingPage','body','OffersSection','companyName')} <span className='value'>{company}</span>
            </div>
            <div className="line"> 
            {translator('ShippingPage','body','OffersSection','offerValue')}   <span className='value'>{offerValue}</span>
            </div>
        </div>
        <div className="offersBtn">
            <button onClick={()=>chooseOffer(num)}> 
            {translator('ShippingPage','body','OffersSection','buttonTitle')}  
            </button>
        </div>
     </>
)

}