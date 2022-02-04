
import 
{Copyright,YouTube,Instagram,Twitter,Facebook}
from '@mui/icons-material'
import './footer.scss'

export const Footer =()=>{

    return (
        <div className="footer ">
        <div className="icons">
            <Facebook fontSize='medium'/> 
            <Twitter fontSize="medium" />
            <YouTube fontSize="medium" />
            <Instagram fontSize="medium" />

        </div>
        <p>Copyright <Copyright fontSize="small" />  2021 Engitech by IkoniksThemes. All Rights Reserved.</p>
    </div>
    )
}