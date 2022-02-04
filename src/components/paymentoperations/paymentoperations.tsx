import './paymentoperations.scss'
import {Outlet} from 'react-router-dom'
export const PaymentOperatios = ()=>{


    return (
        <div className="paymentContainer">
            <div className="paymentHeader">
                <h2>عمليات الدفع</h2>
            </div>
            <div className="paymentBody">
                <Outlet />
            </div>
        </div>
    )
}