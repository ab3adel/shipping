
import {Avatar} from '@mui/material'
import FaceScanner from '../../../images/profile/facescanner.svg'
import FingerPrint from '../../../images/profile/fingerprint.svg'

export const AnotherOption = () =>{

    return (
        <>
               <div className="anotherOption">
                    <span>التعرف على الوجه</span>
                    <Avatar src={FaceScanner}/>
                </div>
                <div className="anotherOption">
                    <span>بصمة الاصبع</span>
                    <Avatar src={FingerPrint} />
               
                </div>
        </>
    )
}