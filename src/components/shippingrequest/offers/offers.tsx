import Fedex from '../../../images/fedex.svg'
import Dhl from '../../../images/dhl.svg'
import Ups from '../../../images/ups.svg'
import './offers.scss'
import {useNavigate} from 'react-router-dom'
export const Offers =() =>{
let navigate = useNavigate()
const chooseOffer =(num:number)=>{
   navigate(`/offers/details:${num}`)
}
    return  (
        <div className="offersMainContainer">
            <div className="offersUpperPart">
            
            <p> اختار أفضل العروض المتوفرة</p>
            
            </div>
                <div className="offersLowerPart">
                    
                <div className="fedexContainer">
                    <div className='imgContainer'>
                        <img src={Fedex}  />
                    </div>
                    <div className="offersInfo">
                        <div className="line">
                            <span>اسم الشركة</span>  <span className='value'>fedex</span>
                        </div>
                        <div className="line"> 
                            <span> قيمة العرض</span>  <span className='value'>300</span>
                        </div>
                    </div>
                    <div className="offersBtn">
                        <button onClick={()=>chooseOffer(1)}> اختار العرض</button>
                    </div>
                </div>
                <div className="dhlContainer">
                    <div className='imgContainer'>
                        <img src={Dhl} />
                        </div>  
                    <div className="offersInfo">
                    <div className="line">
                            <span>اسم الشركة</span>  <span className='value'>fedex</span>
                        </div>
                        <div className="line"> 
                            <span> قيمة العرض</span>  <span className='value'>300</span>
                        </div>
                    </div>
                    <div className="offersBtn">
                        <button onClick={()=>chooseOffer(2)}> اختار العرض</button>
                    </div>
                </div>
                <div className="upsContainer">
                    <div className='imgContainer'>
                        <img src={Ups} />
                    </div>
                    <div className="offersInfo">
                        <div className="line">
                            <span>اسم الشركة</span>  <span className='value'>fedex</span>
                        </div>
                        <div className="line"> 
                            <span> قيمة العرض</span>  <span className='value'>300</span>
                        </div>
                    </div>
                    <div className="offersBtn">
                        <button onClick={()=>chooseOffer(3)}> اختار العرض</button>
                    </div>
                </div>
            </div>  
        </div>    
    )
}