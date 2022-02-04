import './trackshipping.scss'
import {TrackingForm} from './trackingform'


export const TrackShipping =() =>{


    return (
        <div className="trackContainer">
            <div className="trackHeader">
                <h2>تتبع شحناتي</h2>
            </div>
            <div className="trackBody">
                <TrackingForm/>
            </div>
        </div>
    )
}