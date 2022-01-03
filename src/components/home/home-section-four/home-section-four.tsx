
import './home-section-four.scss'
import Wave from '../../../images/homepage/wave3.svg'
import Mobile1 from '../../../images/homepage/mobile1.png'
import Mobile2 from '../../../images/homepage/mobile2.png'
export const HomeSectionFour =()=>{


    return (

        <div className="homeFourContainer">
            <img src={Wave } />
            <div className="body">
                <div className="leftCol">
                    <img className="mobile1" src={Mobile1} />
                    <img className='mobile2' src={Mobile2} />
                </div>
                <div className="rightCol"></div>
            </div>
            <div className="footer">

            </div>
        </div>
    )
}