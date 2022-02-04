
import './profile.scss'
import {
    Avatar,
    Button
     
  } from '@mui/material'

import {Link} from 'react-router-dom'
import Address from '../../images/profile/adress.svg'
import MyProfile from '../../images/profile/profile.svg'
import Security from '../../images/profile/security.svg'
import Archive from '../../images/profile/archive.svg'

export const Profile =()=>{

 
         return (       
               
            <div className="listContainer">
                        <div className="list">
                                <Link to="/profile/personalinfo"  >
                                    <p>معلومات شخصية</p>
                                    <Avatar>
                                        <img src={MyProfile}/>
                                    </Avatar>
                                
                                </Link>
                                <Link to="/profile/security">
                                    <p>الأمان</p>
                                    <Avatar>
                                        <img src={Security}/>
                                    </Avatar>
                                
                                </Link>
                                <Link to="/profile/archive">
                                    <p>ارشيف الفواتير</p>
                                    <Avatar>
                                        <img src={Archive}/>
                                    </Avatar>
                                
                                </Link>
                                <Link to="/profile/addresses">
                                    <p>عناويني</p>
                                    <Avatar>
                                        <img src={Address}/>
                                    </Avatar>
                                
                                </Link>
                        </div>
             
                    <div className="buttonContainer">
                       <Button >تسجيل الخروج</Button>
                    </div>
            </div>
               )
}