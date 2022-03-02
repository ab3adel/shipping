import axios from '../../tools/api/axios/axios'
import {Apis} from '../../tools/api/apis'
import {Iauth} from '../../tools/authentication/interfaces'
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'


interface Iaddress {line_1:string,line_2:string,
                    line_3:string,city:string,state_code:string
                    ,post_code:string,country_code:string
                ,type:'work'|'home'|'others',main:number}
interface Irecipient {name_ar:string,name_en:string,customer_id:number,id:number
                     ,addresses:Iaddress []}
interface Icountry {[key:string]:string|boolean}
interface Irecipients {name_ar:string,name_en:string,customer_id:number
    ,id:number}
type iStatus = 'idle'|'failed'|'succeed'|'loading'
interface Idata {status:iStatus,specificStatus:{recipientStatus:iStatus,locationStatus:{
                                                                               cityStatus:iStatus,
                                                                               countryStatus:iStatus
                                                                                  }}
                  ,data:Irecipient,countries:Icountry[],cities:string[],recipients:Irecipients[],
                  recipient:Irecipient,country:{Name:string,Code:string}
               }                     
const user=JSON.parse( localStorage.getItem('user') as string ) as Iauth     

let initialData:Idata = {status:'idle',
     specificStatus:{recipientStatus:'idle',locationStatus:{
         countryStatus:'idle',
         cityStatus:'idle'
     }
     },
    data:{name_ar:'',name_en:'',customer_id:-1,id:-1,addresses:[
    {line_1:'',line_2:'',line_3:'',city:'',state_code:''
     ,post_code:'',country_code:'',type:'home',main:-1}
]},
countries:[{'Code':''}]   ,cities:['']  ,recipients:[{name_ar:'',name_en:'',customer_id:-1,id:-1}],
recipient:{name_ar:'',name_en:'',customer_id:-1,id:-1,addresses:[
    {line_1:'',line_2:'',line_3:'',city:'',state_code:''
     ,post_code:'',country_code:'',type:'home',main:-1}]
    },country:{Name:'',Code:''}

}

export const getRecipients =createAsyncThunk('addresses/getRecipients',async()=>{
    let res = await axios({url:Apis.Recipients,
                        headers:{'Authorization':`Bearer ${user.access_token}`},
                        method:'GET'})
                       .then(res=>res.data.payload)
                       .catch(err=>console.log(err))
         return res              
})

export const getRecipient =createAsyncThunk('addresses/getRecipient',async(recipient_id:number)=>{
    let res = await axios({url:Apis.ShowUpdateDeleteRecipients(recipient_id),
                        headers:{'Authorization':`Bearer ${user.access_token}`},
                        method:'GET'})
                       .then(res=>res.data.payload)
                       .catch(err=>console.log(err))
         return res              
})
export const storeRecipients=createAsyncThunk('addresses/storeRecipient',async(userData:any)=>{
   
    let response=await axios({
        method:'POST',
        url:Apis.Recipients,
        data:{...userData,customer_id:user.customer_id},
        headers:{'Authorization':`Bearer ${user.access_token}`}
    })
    .then(res=>res.data.payload)
    .catch(err=>console.log(err))
    return response
})
export const updateRecipient= createAsyncThunk('addresses/updateRecipient',async({userData,id}:{userData:any,id:number})=>{
  
    let response=await axios({
        url :Apis.ShowUpdateDeleteRecipients(id),
        data:{...userData},
        headers:{'Authorization':`Bearer ${user.access_token}`},
        method:'POST'
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    return response
})
export const getCountries =createAsyncThunk('address/countries',async()=>{
    let response= await axios({
                     url:Apis.Countries,
                     headers:{'Authorization':`Bearer ${user.access_token}`},
                     method:'GET'
                    })
            .then(res=>res.data.payload)
            .catch(err=>console.log(err))
    return response
})
export const getCities =createAsyncThunk('addresses/cities',async(country_code:string)=>{
    if (!country_code) return
   let response= await axios({
         url:Apis.Cities,
         headers:{'Authorization':`Bearer ${user.access_token}`},
         method:'GET',
         params:{'code':country_code}
        })
          .then(res=>res.data.payload)
          .catch(err=>console.log(err))
    return response      
})
export const getCountry = createAsyncThunk('addresses/country',async(country_code:string)=>{
  
    let response= await axios({
        url:Apis.Country,
        headers:{'Authorization':`Bearer ${user.access_token}`},
        method:'GET',
        params:{'code':country_code}
       })
         .then(res=>res.data.payload)
         .catch(err=>console.log(err))
   return response    
})
export const deleteRecipient = createAsyncThunk ('addresses/delete',async(id:number)=>{
    let response= await axios({
        url:Apis.ShowUpdateDeleteRecipients(id),
        headers:{'Authorization':`Bearer ${user.access_token}`},
        method:'DELETE'
       })
         .then(res=>res.data.payload)
         .catch(err=>console.log(err))
   return response    
})
const addressesSlicer =createSlice({
    name:'addresses',
    initialState:initialData,
    reducers :{
        isLoading(state){
            state.status='loading'
        
        },
        loadingRecipients(state){
            state.specificStatus.recipientStatus='loading'
        },
        loadingCities (state) {
            state.specificStatus.locationStatus.cityStatus='loading'
        },
        loadingCountry (state) {
            state.specificStatus.locationStatus.countryStatus='loading'
        }

       
    },
    extraReducers (builder){
        builder
        //Get Recipients //
        .addCase(getRecipients.fulfilled,(state,action)=>{
            state.status='succeed'
            state.specificStatus.recipientStatus='succeed'
            state.recipients=[...action.payload]
        })
        .addCase(getRecipients.rejected,(state,action)=>{
            state.status='failed'
            state.specificStatus.recipientStatus='failed'
        })
        //Get Recipient //
        .addCase(getRecipient.fulfilled,(state,action)=>{
            state.status='succeed'
            state.specificStatus.recipientStatus='succeed'
            state.recipient={...action.payload}
        })
        .addCase(getRecipient.rejected,(state,action)=>{
            state.status='failed'
            state.specificStatus.recipientStatus='failed'
        })
        //Store Recipients//
        .addCase(storeRecipients.fulfilled,(state,action)=>{
            state.status='succeed'
            state.specificStatus.recipientStatus='succeed'
            state.recipients.push(action.payload)
        })
        .addCase(storeRecipients.rejected,(state,action)=>{
            state.status='failed'
            state.specificStatus.recipientStatus='failed'
        })
        //Update Recipients //
        .addCase(updateRecipient.fulfilled,(state,action)=>{
            state.status='succeed'
            state.specificStatus.recipientStatus='succeed'
            // state.recipients=state.recipients.map(ele=>{
            //     if (ele.id=== action.payload.id){
            //         return action.payload
            //     }
            //     return ele
            // })
        })
        .addCase(updateRecipient.rejected,(state,action)=>{
            state.status='failed'
            state.specificStatus.recipientStatus='failed'
        })
        //Delete Recipient //
        .addCase(deleteRecipient.fulfilled,(state,action)=>{
            
            state.status='succeed'
            state.specificStatus.recipientStatus='succeed'
            state.recipients=state.recipients.filter(ele=>ele.id !== action.payload.id)
            
        })
        .addCase(deleteRecipient.rejected,(state,aciton)=>{
            state.status='failed'
            state.specificStatus.recipientStatus='failed'
        })
        //Countries// 
        .addCase (getCountries.fulfilled,(state,action)=>{
            state.countries=action.payload
            state.specificStatus.locationStatus.countryStatus='succeed'
        })
        .addCase (getCountries.rejected,(state,action)=>{
         
            state.specificStatus.locationStatus.countryStatus='failed'
        })
        //Cities//
        .addCase (getCities.fulfilled,(state,action)=>{
          state.cities=action.payload
          state.specificStatus.locationStatus.cityStatus='succeed'
        })
        .addCase (getCities.rejected,(state,action)=>{
            state.specificStatus.locationStatus.cityStatus='failed'
        })
        //Single Country//
        .addCase(getCountry.fulfilled,(state,action)=>{
            state.specificStatus.locationStatus.countryStatus='succeed'
            state.country= action.payload
        })
    }

})

export const {isLoading,loadingCities,loadingCountry,loadingRecipients} = addressesSlicer.actions
export default addressesSlicer.reducer