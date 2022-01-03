
import './home-section-three.scss'
import Location from '../../../images/homepage/location.svg'

export const HomeSectionThree =()=>{


    return (
        <div className="homeThreeContainer">
            <div className="title">
                معرفة موقع شحنتك على الخريطة عن طريق الرقم الخاص
            </div>
            <div className="map">

            </div>
            <div className="body">
               <img src={Location} />
               <div className="input">
                    <input type="text" />
                    <button>تتبع شحنتي</button>
               </div>
              
            </div>


        </div>
    )
}