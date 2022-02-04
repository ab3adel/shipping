
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
import Web from '../../../images/homepage/web.svg'
import Email from '../../../images/homepage/email.svg'
import Phone from '../../../images/homepage/phone.svg'

export const HomeSectionFour =()=>{


    return (

        <div className="homeFourContainer">
            <img src={Wave } />
            <div className="body">
                <div className="leftCol">
                    <div className="phonesContainer">
                        <img className="mobile1" src={Mobile1} />
                        <img className='mobile2' src={Mobile2} />
                    </div>
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
            <div className="diagram">
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
            <div className="preFooter" >
               
                <div className="element">
                    <img id="email" src={Email}/>
                    <span className="head1">
                        Email
                    </span>
                    <span className="head2">
                        service@ikoniks.de
                    </span>
                </div>
                <div className="element">
                    <img id ="phone" src={Phone}/>
                    <span className="head1">
                        Phone
                    </span>
                    <span className="head2">
                        + (49) 173-9354932
                    </span>
                </div>
                <div className="element">
                    <img className="earthImage" src={Web}/>
                    <span className="head1">
                        Adress
                    </span>
                    <span className="head2">
                        Filderahplatz.35 70567 stuttgart
                    </span>
                </div>
            </div>
           
        </div>
    )
}