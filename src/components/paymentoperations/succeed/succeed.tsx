import './succeed.scss'
import {MyButton} from '../../../tools/formfields/button/button'
import SmileFace from '../../../images/paystate/smileface.svg'
import {CheckCircleOutline} from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'
export const Succeed =() =>{
    const navigate = useNavigate()
    return (
        <div className="succeedContainer">
            <div className="succeedTitle">
                <CheckCircleOutline fontSize='small' color="inherit"/>
                <p>الشحنة رقم 22342 تم الدفع بنجاح</p>
            </div>
            <div className="smileFace">
                <img src={SmileFace}/>
            </div>
            <div className="succeedButtons">
                <MyButton fun={()=>navigate('/')}>تم</MyButton>
            </div>
        </div>
    )
}