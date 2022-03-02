
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
import {translator} from '../../tools/translator'
export const Profile =()=>{

 
         return (       
               
            <div className="listContainer">
                        <div className="list">
                                <Link to="/profile/personalinfo"  >
                                    <p>{translator('ProfilePage','PersonalInfo')} </p>
                                    <Avatar>
                                        <img src={MyProfile}/>
                                    </Avatar>
                                
                                </Link>
                                <Link to="/profile/security">
                                    <p>{translator('ProfilePage','Security')}</p>
                                    <Avatar>
                                        <img src={Security}/>
                                    </Avatar>
                                
                                </Link>
                                <Link to="/profile/archive">
                                    <p>{translator('ProfilePage','BillsArchive')} </p>
                                    <Avatar>
                                        <img src={Archive}/>
                                    </Avatar>
                                
                                </Link>
                                <Link to="/profile/addresses">
                                    <p>{translator('ProfilePage','MyAddresses')}</p>
                                    <Avatar>
                                        <img src={Address}/>
                                    </Avatar>
                                
                                </Link>
                        </div>
             
                    <div className="buttonContainer">
                       <Button >{translator('Buttons','SignOut')} </Button>
                    </div>
            </div>
               )
}