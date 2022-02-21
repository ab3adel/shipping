import axios from '../../tools/api/axios/axios'
import {Apis} from '../../tools/api/apis'
import {Iauth} from '../../tools/authentication/interfaces'
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { rejects } from 'assert'
type ThunkApiType = {
    
    rejectValue: string
  }
interface Iinitial{data:any[],status:'idle'|'succeed'|'failed'|'loading',error:string,
 updatingBankStatus:'idle'|'succeed'|'failed'|'loading',updatingUserStatus:'idle'|'succeed'|'failed'|'loading'}
const user=JSON.parse( localStorage.getItem('user') as string ) as Iauth

export const updateUsreName=createAsyncThunk('profile/updateUserName',async(userData:any)=>{
   
  const res= await axios.post(Apis.UserName(userData.id),{
    ...userData.form
        
    })
    .then(res=>res.data)
    .catch(err=>console.log(err))
    
    return res
})

export const UpdateBankName=createAsyncThunk('profile/updateBank',async(userData:any)=>{
    
   const res= await axios({
        url:Apis.BankUpdate(userData.id)
    ,
    method:"POST",
    data:{
        ...userData.form  
    },
    headers:{'Authorization':`Bearer ${user.access_token}`}
})
    .then(res=>res.data)
    .catch(err=>console.log(err))
    return res


})
/*export const fetchProfile =createAsyncThunk <any,ThunkApiType>('profile/fetchProfile',async(_,{rejectWithValue})=>{
    console.log(user)
    if (!user.name) return
        try {
           
            const res = await  axios.get(Apis.Profild,{headers:{
                'Authorization':`Bearer ${user.access_token}`
            }})
           
            return res.data.payload
        }
        catch (err:any) {
            if (!err.response) {
                throw err
            }
            return rejectWithValue(err.response.data)
        }

}
)*/

const initialState:Iinitial={data:[
    {name:'',email:'',nickName:'',customer:{
        bank_name:'',bank_account_number:'',IBAN_number:'',phone:'',address:'',

    }}
]
,status:'idle',error:'',updatingBankStatus:'idle',updatingUserStatus:'idle'}
const profileSlicer = createSlice ({
  name:'profile',
  initialState ,
  reducers:{
      fetchingProfile (state) {
          state.status='loading'
      },
      addProfile(state,action){
          
        let {payload}=action
        state.updatingBankStatus="idle"
        state.updatingUserStatus="idle"
        state.status="succeed"
        let [userName,nickName]=(payload.name as string).split(' ')
        state.data[0]={name:userName,nickName:nickName || "",email:payload.email,customer:{
            bank_name: payload.customer? payload.customer['bank_name'] : '' ,
            bank_account_number: payload.customer? payload.customer['bank_account_number']: 0,
            IBAN_number:payload.customer? payload.customer['IBAN_number'] :0,
            phone:payload.customer? payload.customer['phone'] : 0,
            address:payload.customer? payload.customer['addrss'] : ""
        }}
      
      },
      fetchingProfileFailed(state) {
          state.status="failed"
      }
  },
  extraReducers(builder){
      builder
     

      .addCase(updateUsreName.fulfilled,(state,action)=>{

          let{payload}=action.payload
          let [userName,nickName]=(payload.name as string).split(' ')
          state.updatingUserStatus='succeed'
          state.data[0].name=userName
          state.data[0].nickName=nickName
      
      })
      .addCase(updateUsreName.rejected,(state,action)=>{
          state.updatingUserStatus='failed'
      })
      .addCase(updateUsreName.pending,(state,action)=>{
          state.updatingUserStatus="loading"
      })
      
      
      .addCase(UpdateBankName.fulfilled,(state,action)=>{
          let {payload}=action.payload
      
          state.updatingBankStatus='succeed'
          state.data[0].customer.bank_name=payload.bank_name
          state.data[0].customer.bank_account_number=payload.bank_account_number

      })
      .addCase(UpdateBankName.rejected,(state,action)=>{
          state.updatingBankStatus='failed'
      })
      .addCase(UpdateBankName.pending,(state,action)=>{
          state.updatingBankStatus="loading"
      })
  }
})
export const {addProfile,fetchingProfile,fetchingProfileFailed} =profileSlicer.actions
export default profileSlicer.reducer