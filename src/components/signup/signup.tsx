
import './signup.scss'
import {MyButton} from '../../tools/formfields/button/button'
import {ArrowRightAlt, FourGMobiledataRounded} from '@mui/icons-material'
import {SignUpForm} from './signupform'
import axios from '../../tools/api/axios/axios'
import {Notify,severity} from '../../tools/notification/notification'
import {Ifield} from '../../tools/formfields/interfaces'
import React from 'react'
import { AxiosError } from 'axios'
import {AddressForm} from './addressform'
import {connect,MapDispatchToProps,MapStateToProps,DispatchProp} from 'react-redux'
import {getCities,getCountries} from '../../store/features/addresses'
import {Apis} from '../../tools/api/apis'
import {translator} from '../../tools/translator'
interface Istate {index:number,formFields:Ifield,open:boolean
                ,isNotified:boolean,severity:severity,message:string}
 class  SignUp extends React.Component<any,Istate> {

    constructor (props:any) {
        super (props)
        this.state= {
            open:false,
            isNotified:false,
            severity:'success',
            message:'',
            index :1,
            formFields : {
                    Name:'',NameError:false,
                    Password:'',PasswordError:false,
                    Email:'',EmailError:false,
                    Account:'',AccountError:false,
                    IBANN:'',IBANNError:false,
                    Spec:'',SpecError:false,
                    Address:'',AddressError:false,
                    Bank:'',BankError:false,
                    Agreement:false,AgreementError:false,
                    PasswordConfirmation:'',PasswordConfirmationError:false
            }
        }
        
        this.fun= this.fun.bind(this)
    }
    componentDidMount() {
        this.props.getCountries()
    }
handlerNotification = (message:string,openState:boolean,severity:severity) =>{
this.setState (pre=>({...pre,isNotified:openState,severity:severity,message:message}))
}
setIsNotified = () =>{
    this.setState(pre=>({...pre,openState:false}))
}
setIndex = () => {
    this.setState (pre => ({...pre,index:pre.index + 1}))
}
checkError =(num:number) =>{
    let start=0;
    let end =0;

if (num ===1) {
    start=0 
    end=4
 
}

    for (let i of ['NameError','PasswordError','EmailError',
                  "PasswordConfirmationError"
                ,'AccountError','IBANNError'
                ,"SpecError","AddressError",
                "BankError"]) {
               
                    if (this.state.formFields[i]) {
         
                        return true
                    }
                   
                    
                }
   for (let i of ['Name','Password',"Email","PasswordConfirmation","Agreement"].slice(start,end)) {
       if (!Boolean(this.state.formFields[i])) {
       
           return true
       }
       
   }       
   return false      
}
 fun () {

     if (this.state.index ===3) return
     //if (this.checkError(this.state.index)) return
    else if (this.state.index <3) {
        this.setIndex ( )
     }
}
setFormFields = (name:string,value:string,error:string) => {
    
    const fields = {...this.state.formFields}
    fields[name]=value
    fields[`${name}Error`]=error
    if (name === "Password")fields['PasswordConfirmation']=""
    this.setState({...this.state,formFields:{...fields}})
}
signUp =()=>{
   
    let form1 = new FormData()
    form1.append('IBAN','1233')
    form1.append('bank_name','east')
    form1.append('bank_account_number','123')
    form1.append('company','addidas')
    form1.append('address','')
    form1.append('phone','12')
    let customer:Ifield = {IBAN_number:this.state.formFields['IBANN'],
        bank_name:this.state.formFields['Bank'],bank_account_number:this.state.formFields['Account'],
        company:'',address:this.state.formFields['Address'],phone:''}
  let form = new FormData()
  form.append('name',(this.state.formFields['Name']as string))
  form.append('email',(this.state.formFields['Email']as string))
  form.append('password',(this.state.formFields['Password']as string))
  form.append('password_confirmation',(this.state.formFields['PasswordConfirmation']as string))
  for (let key of Object.keys(customer)) {
      form.append(`customer[${key}]`,'1')
  }

    axios({url:'register',
       method:'POST',
        headers:{"Content-Type": "multipart/form-data"},
        data:form}
    )
         .then(res=> {
            let {name,id,active,access_token}=res.data.payload
           localStorage.setItem('user',JSON.stringify({name,id,active,access_token}) )
           this.handlerNotification(`تم تسجيل الدخول بنجاح`,true,'success')
           window.location.href="https://backend.wodex.online/api/"
         })
         .catch((err:AxiosError)=>{
             this.handlerNotification(err.message,true,'error')
         })
}
setOpen= (val:boolean)=>{
    this.setState(pre=>({...pre,open:val}))
}
getCities=()=>{
    this.props.getCities()
}
getCountries=async()=>{

 
}
render () {
  let  {fun,state,setFormFields,setIsNotified,setOpen,props}=this
  let countriesName=props.countries?.map ((ele:any)=>ele.Name) as string[]

    return (
        <div className="signUpContainer">
            <div className="signUpTitle">
                <div className="titleText">
                    {translator('SignUpPage','mainTitle')}
                </div>

            </div>
            <div className="signUpBody">
                <div className="continueButton">
                    {state.index <3 ?
                    <MyButton fun={()=>fun()}>
                        <>
                        {translator('Buttons','Continue')}
                        <ArrowRightAlt fontSize='inherit'/>
                        </>
                    </MyButton>:
                    <MyButton 
                    disabled={state.formFields['Agreement'] ? false:true}
                    fun={()=>this.signUp()}
                    >
                        <>
                        {translator('Buttons','Done')}</>
                        </MyButton>}
                </div>
                <SignUpForm index={state.index} 
                 formFields={state.formFields}
                 setOpen={setOpen}
                 setFormFields={setFormFields}/>
                
            </div>
           {state.isNotified && (
               <Notify isNotified={state.isNotified}
                       setIsNotified={setIsNotified}
                       severity={state.severity}
                       children={state.message}/>
           )}
         {state.open && (
            <AddressForm open={state.open} setOpen={setOpen}
            cities={['']} countriesName={countriesName}
             formFields={state.formFields} setFormFields={setFormFields}/>
        )}
        </div>
       
    )
}
}
const mapDispatchToProps:MapDispatchToProps<any,any>=(dispatch:any)=>{
    return {
        getCities:(str:string)=>dispatch(getCities(str)),
        getCountries:()=>dispatch(getCountries())
    }
}
const mapStateToProps=(state:any)=>({
addresses:state.addresses
})
export default connect(mapStateToProps,mapDispatchToProps)( SignUp);