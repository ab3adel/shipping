import {Navbar} from '../../navbar/navbar'
import './home-section-one.scss'
import Wave from '../../../images/homepage/wave.svg'

export const HomeSectionOne =()=>{


    return (
        <div className="homeOneContainer">
      
            <div className="body">
             <div className="textContainer">
                <div className="text">
                    <h3>  أهلا بك في مرسال  </h3>
                    <div>اشحن معنا بكل سهولة وامان</div>
               </div>
             </div>
             <img src={Wave} />
            </div>
        </div>
    )
}