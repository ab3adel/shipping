
import './home-section-four.scss'
import Wave from '../../../images/homepage/wave3.svg'
import Mobile1 from '../../../images/homepage/mobile1.png'
import Mobile2 from '../../../images/homepage/mobile2.png'
import Download from '../../../images/homepage/download.svg'
import PlayStore from '../../../images/homepage/playstore.svg'
import AppStore from '../../../images/homepage/appstore.svg'
import  Hands from '../../../images/homepage/hands.svg'
import Speed from '../../../images/homepage/speed.svg'
import Realable from '../../../images/homepage/realability.svg'
export const HomeSectionFour =()=>{


    return (

        <div className="homeFourContainer">
            <img src={Wave } />
            <div className="body">
                <div className="leftCol">
                    <img className="mobile1" src={Mobile1} />
                    <img className='mobile2' src={Mobile2} />
                </div>
                <div className="rightCol">
                    <div className="title">
                        يمكنك ايضا تحميل التطبيق الخاص بنا من المتجر
                        <img src={Download} />
                    </div>
                    <div className="playStore">
                        <p>For Android</p>
                        <div className="playStoreLogo">
                            <img src={PlayStore}/>
                            <div className="playStoreText">
                                GETIT ON
                                <span>Google Play</span>
                            </div>
                        </div>
                    </div>
                    <div className="appStore">
                        <p>For IOS</p>
                        <div className="appStoreLogo">
                            <img src={AppStore}/>
                            <div className="appStoreText">
                                Download on the 
                                <span>App Store</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
              <img src={Speed} id="speed"/>
              <img src={Realable} id ="realable" />
              <img src={Hands} id="hands" />
              <div className="speed">
                  السرعة
              </div>
              <div className='line1Container'>
                 <div className="line1"></div>
              </div>
             
              <div className="realable">
                  الثقة
              </div>
              <div className='line2Container'>
                 <div className="line2"></div>
               </div>  
              <div className="hands">
                  الاحترافية
              </div>
            </div>
        </div>
    )
}