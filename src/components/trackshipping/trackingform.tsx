import {InputField} from '../../tools/formfields/input/inputfield'
import {MyButton} from '../../tools/formfields/button/button'
import Map from '../../images/homepage/map.png'
import {ArrowRightAlt} from '@mui/icons-material'

export const TrackingForm =()=>{

    return (
        <div className="trackForm">
            <div className="trackFormBody">
                <InputField name='ShippNumber' label='ادخل رقم الشحنة' type='number'
                          formFields={{}} setFormFields={()=>{}} validator={()=>{}}/>
                <MyButton fun={()=>{}} >
                    تتبع
                </MyButton>
            </div>
            <div className="trackMap">
                <img src={Map} />
                <div className="showMap">
                    <p>رؤية الخريطة كاملة</p>
                    <ArrowRightAlt fontSize='inherit' color='inherit'/>
                </div>
            </div>
        </div>
    )
}