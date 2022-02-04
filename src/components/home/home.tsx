
import './home.scss'
import {HomeSectionOne} from './home-section-one/home-section-one'
import {HomeSectionTwo} from './home-section-two/home-section-two'
import {HomeSectionThree} from './home-section-three/home-section-three'
import {HomeSectionFour} from './home-section-four/home-section-four'
import {Outlet} from 'react-router-dom'

export const Home =() =>{


    return (
        <div className="homeMainContainer">
        <HomeSectionOne />
        <HomeSectionTwo />
        <HomeSectionThree />
        <HomeSectionFour />

    
 </div>
    )
}