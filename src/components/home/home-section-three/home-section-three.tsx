
import './home-section-three.scss'
import Location from '../../../images/homepage/location.svg'
import {useNavigate} from 'react-router-dom'
import {translator} from '../../../tools/translator'
export const HomeSectionThree =()=>{
const navigate =useNavigate()

    return (
        <div className="homeThreeContainer">
            <div className="title">
                {translator('HomePage','HomePageSection3','mainTitle')}
            </div>
            <div className="map">

            </div>
            <div className="body">
               <img src={Location} />
               <div className="input">
                    <input type="text" />
                    <button onClick={()=>navigate('/trackmyshipping')}> {translator('HomePage','HomePageSection3','buttonTitle')}</button>
               </div>
              
            </div>


        </div>
    )
}