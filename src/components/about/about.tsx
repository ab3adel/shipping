import './about.scss'
import Packing from '../../images/Faqs/packing.png'
import Box from '../../images/Faqs/boxes.png'
import Box1 from '../../images/Faqs/boxes2.png'
import Eye from '../../images/Faqs/eye.svg'
import {Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {ImageContainer} from '../../tools/lazyimage/imagecontainer'
import {translator} from '../../tools/translator'
 export default  function About () {

const navigate =useNavigate()

    return (
        <div className="aboutContainer">
            <div className="aboutHeader">
                {translator('AboutPage','mainTitle')}
            </div>
            <div className="aboutBody">
                <div className="topRow">
                    <div className="intro">
                    {translator('AboutPage','body','section1')}
                    </div>
                
                    <div className="poster">
                    {translator('AboutPage','body','section2')}
                   
                        <ImageContainer src={Packing} classCss='' />
                    </div>
                      
                </div>
                <div className="middleRow">
                
                    <div className="poster">
                    {translator('AboutPage','body','section3')}
                            <ImageContainer src={Box} classCss='' />
                        </div>
                    </div>
                    
                <div className="bottomRow">
                   
                    <div className="poster">
                    {translator('AboutPage','body','section4')}
                            <ImageContainer src={Box1} classCss='' />
                          
                    </div>
                    
                </div>
            </div>
            <div className="aboutFooter">
                <div className="aboutButton">
                    <Button onClick={()=>navigate('/signup')}>
                    {translator("Buttons",'JoinUs')}
                    </Button>
                    <img src={Eye} />
                </div>
            </div>
        </div>
    )
}