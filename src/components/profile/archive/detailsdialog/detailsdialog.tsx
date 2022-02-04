import './detailsdialog.scss'
import 
 {
     Dialog,
     DialogActions,
     DialogContent,
     Button,
     Avatar
 }
 from '@mui/material'
import Print from '../../../../images/profile/print.svg'
import Pdf from '../../../../images/profile/pdf.svg'


export const DetailsDialog =( {open,setOpen,unPaid}:{unPaid:boolean,open:boolean,setOpen:Function} ) =>{

    return (
        <Dialog className={'billDetailsDialog'} open={open} onClose={()=>setOpen(false)}>
            <DialogActions className="xButton">
                <p onClick={()=>setOpen(false)}>X</p>
                <div className="billDetailTitle">
                <h4> تفاصيل الفاتورة</h4>
                </div>
           
            </DialogActions>
            <DialogContent title='تفاصيل الفاتورة' >
             
                <div className="billDetailBody">
                    
                </div>
                <div className="billDetailFooter">
                    <div className="footerBody">
                      <p> 2275</p>
                      <p>رقم الشحنة</p>
                    </div>  
                   
                </div>
            </DialogContent>
            <DialogActions>
                <Button>
                    <Avatar src={Print}></Avatar>
                    طباعة
                </Button>
                {unPaid ? 
                  <Button className="greenButton"> جمع</Button>
                :""}
                <Button>
                    <Avatar  src={Pdf}></Avatar>
                    تحميل
                </Button>

            </DialogActions>
        </Dialog>
    )
}