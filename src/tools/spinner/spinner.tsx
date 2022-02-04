import './spinner.scss'
import {CircularProgress} from '@mui/material'

export const Spinner =()=>{


    return (
        <div className="spinnerContainer">
            <CircularProgress 
                                 size={68}
                              />

        </div>
    )
}