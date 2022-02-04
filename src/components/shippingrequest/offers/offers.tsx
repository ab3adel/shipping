import Fedex from '../../../images/fedex.svg'
import Dhl from '../../../images/dhl.svg'
import Ups from '../../../images/ups.svg'
import './offers.scss'
import {useNavigate} from 'react-router-dom'
import {Offer} from './offer'
export const Offers =() =>{
let navigate = useNavigate()
const chooseOffer =(num:number)=>{
   navigate(`/shippingrequest/offers/details:${num}`)
}
    return  (
        <div className="offersMainContainer">
            <div className="offersUpperPart">
            
            <p> اختار أفضل العروض المتوفرة</p>
            
            </div>
                <div className="offersLowerPart">
                    
                    <div className="fedexContainer">
                            <Offer img={Fedex} company='Fedex'
                        num={1}
                        offerValue={300} chooseOffer={chooseOffer}/>
                    </div>
                    <div className="dhlContainer">
                        <Offer img={Dhl} company='DHL'
                        num={2}
                        offerValue={300} chooseOffer={chooseOffer}/>
                    </div>
                    <div className="upsContainer">
                        <Offer img={Ups} company='UPS'
                        num={3}
                        offerValue={300} chooseOffer={chooseOffer}/>
                    </div>
            </div>  
        </div>    
    )
}