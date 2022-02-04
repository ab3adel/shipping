import './profile.scss'
import {Outlet} from 'react-router-dom'
import {
    Avatar,
    CircularProgress
     
  } from '@mui/material'
  import {Edit} from '@mui/icons-material'
  import {ChangeEvent, ChangeEventHandler,useContext,useState} from 'react'
  import {Auth} from '../../tools/authentication/authprovider'
  import {useDispatch,useSelector} from 'react-redux'
  import {fetchingProfile,addProfile,fetchingProfileFailed} from '../../store/features/profile'
  import {useEffect} from 'react'
  import {RootState} from '../../store/store'
  import axios from '../../tools/api/axios/axios'
  import {Apis} from '../../tools/api/apis'
  import {timer} from '../../tools/timer'
  import {Notify,severity} from '../../tools/notification/notification'

interface Ifield  {[key:string]:string|boolean}

export const ProfileLayout= ()=>{
    const {setImg,user} = useContext(Auth)

    const [imgAttr ,setImageAttr] =useState<string|undefined> (undefined)
    const [monitor,setMonitor]=useState({count:2,time:0})
    const [not,setNot] =useState({isLoading:false,message:'',severity:"error",isNotified:false})

    const dispatch = useDispatch()
    const {status,error,data} = useSelector((state:RootState)=>state.profile)

  useEffect(()=>{

      if (status === 'loading' && timer(3,monitor.time) && monitor.count>0){
        setNot(pre=>({...pre,isLoading:true}))
        setMonitor(pre=>({count:pre.count -1,time:new Date().getSeconds()}))
      }
      else {
        setNot(pre=>({...pre,isLoading:false}))
      }
   
  },[status])
     
    useEffect (()=>{
  
      
        const fetchProfile= async ()=>{
           await  axios({
                url:Apis.Profild,
                headers:{'Authorization':`Bearer ${user.access_token}`},
                method:'GET',
                
            })
            .then(res=>{
               
                dispatch(addProfile(res.data.payload))
               
            })
            .catch(err=>{
             
                dispatch(fetchingProfileFailed())
            })
        }
        if (status === 'idle' || status==='failed' && user.active){
            dispatch(fetchingProfile())
            fetchProfile()
            setNot(pre=>({...pre,isNotified:false}))
        }
      
    },[user,status])

    const inputClick =() =>{
        let input = document.querySelector ('#profileImageInput') as HTMLInputElement
        input.click ()

    }

    const editImage:ChangeEventHandler =(e:ChangeEvent) =>{
       let img = document.querySelector("#profileImage") as HTMLImageElement
       let input =e.currentTarget as HTMLInputElement
       
       if (input.files !== null) {
           let imgUrl = URL.createObjectURL(input.files[0]);
           img.src=imgUrl;
           img.style.display="block";
           setImageAttr(imgUrl)
           setImg(imgUrl)
       }
    }

    return (
        <div className="profileMain">
            <div className="header">
               <div className="avatar">
                        <div className='avatarContainer'>
                      {  !imgAttr && (<Avatar  color="inherit" sizes='small' src={imgAttr?imgAttr:''}/>)}
                          <img id="profileImage" style={{display:'none'}} />
                           
                          <div className="edit" onClick={inputClick}>
                              <Edit fontSize="inherit" color="inherit" className="smallPen" />
                              <span>  ...تعديل الصورة </span>
                              <input type='file' style={{display:"none"}} 
                                  onChange={editImage}
                                  id="profileImageInput" />
                          </div>
                        </div>           
                </div>
                <div className="profileTitle">
                        <h3>حسابي</h3>
                </div> 

            </div>
            <div className="profileContainer">
                   
                    <Outlet  />
            </div>        
           {not.isLoading && (<CircularProgress 
                                 size={68}
                                  sx={{
                                      position:'absolute',
                                      left:'0',
                                      bottom:'0'
                                  }}/>
                                  )}
                                  
          {not.isNotified && (
              <Notify isNotified={not.isNotified}
                       children={not.message}
                       severity={'error'}
                       setIsNotified={()=>setNot(pre=>({...pre,isNotified:false}))}/>
          )}                        
        </div>
    )
}