import './about.scss'
import Packing from '../../images/Faqs/packing.png'
import Box from '../../images/Faqs/boxes.png'
import Box1 from '../../images/Faqs/boxes2.png'
import Eye from '../../images/Faqs/eye.svg'
import {Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {ImageContainer} from '../../tools/lazyimage/imagecontainer'
 export default  function About () {

const navigate =useNavigate()

    return (
        <div className="aboutContainer">
            <div className="aboutHeader">
                <h2>من نحن</h2>
            </div>
            <div className="aboutBody">
                <div className="topRow">
                    <div className="intro">
                     <p>   في  نهتم براحة و سلامة عملائنا </p>
                        <br/>
                     <p>  كل ما عليك فعله هو الانضمام الينا
                     </p> 
                    </div>
                
                    <div className="poster">
                        <p>اختر ما تريد ودعنا نحزمه </p>
                   
                        <ImageContainer src={Packing} classCss='' />
                    </div>
                      
                </div>
                <div className="middleRow">
                
                    <div className="poster">
                            <p>   نوصله الى وجهتك </p>
                            <ImageContainer src={Box} classCss='' />
                        </div>
                    </div>
                    
                <div className="bottomRow">
                   
                    <div className="poster">
                            <p>أو نقوم بتخزينه لوقت لاحق </p>
                            <ImageContainer src={Box1} classCss='' />
                          
                    </div>
                    
                </div>
            </div>
            <div className="aboutFooter">
                <div className="aboutButton">
                    <Button onClick={()=>navigate('/signup')}>
                        الانضمام الينا
                    </Button>
                    <img src={Eye} />
                </div>
            </div>
        </div>
    )
}