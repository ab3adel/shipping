
import {AddressList} from './addresslist'
import {NewAddress} from './newaddress'
import {useState} from 'react'
import {SortButton} from '../../../tools/formfields/sortbutton/sortbutton'
export const SentAddress =({formFields,setFormFields}:{formFields:any,setFormFields:Function}) =>{
  
    const [newAddress,setNewAddress]= useState(false)
    const [index,setIndex]=useState(-1)
    const [addresses] =useState(["NewYork , SABAEL,1001 McDowell Street"
                                 ,"NewYork , SABAEL,1001 McDowell Street",
                                 "NewYork , SABAEL,1001 McDowell Street",
                                 "NewYork , SABAEL,1001 McDowell Street",
                                 "NewYork , SABAEL,1001 McDowell Street"])
 
    const focusHandler=(e:React.MouseEvent,num:number) =>{
         setIndex(num)
    }
    return (
        <div className="sentAddressContainer" >
        
            <div className="sortButtonContainer" >
                <SortButton  />
            </div>
    
            <div className="sentAddressBody">
                
                <div className="addressList">
                   {newAddress ?   
                           <NewAddress  formFields={formFields} setFormFields={setFormFields} 
                           undo={()=>setNewAddress(false)} />:
                          addresses.map((ele:string,num:number)=>{ 
                            return(<AddressList 
                                  key={num}
                                  ele={ele}
                                  num={num}
                                  setNewAddress={ setNewAddress}
                                  focusHandler={focusHandler}
                                  index={index} /> )
                   })
                
                          }
                </div>
            </div>
        </div>
    )
}