import {Navbar} from '../../navbar/navbar'
import './home-section-one.scss'
import Wave from '../../../images/homepage/wave.svg'
import {translator} from '../../../tools/translator'
export const HomeSectionOne =()=>{


    return (
        <div className="homeOneContainer">
      
            <div className="body">
             <div className="textContainer">
                <div className="text">
                    {translator('HomePage','HomePageSection1','body','section1')}
               </div>
             </div>
             <img src={Wave} />
            </div>
        </div>
    )
}