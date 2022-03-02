import {Link } from 'react-router-dom'
import React, {useState,useContext,useEffect} from 'react'
import './navbar.scss'
import {Auth} from '../../tools/authentication/authprovider'
import 
{AppBar
    ,Toolbar
    ,Container
    ,Box
    ,IconButton
    ,List
    ,ListItem
    ,Drawer
    ,Avatar
    ,Button
    ,Switch
}
from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import {SignUpDialog} from '../home/signupdialog/signupdialog'
import {translator} from '../../tools/translator'
import { Login } from '@mui/icons-material'
import {MultiSwitch} from '../../tools/formfields/switch/switch'
export const Navbar =() =>{
    const [anchorElNav, setAnchorElNav] = useState <Element |null>(null);
    const [anchorElUser, setAnchorElUser] = useState <Element |null>(null);
    const [open,setOpen] = useState(false)
    const [auth,setAuth] =useState<null|string>(null)
    const [imgUrl,setImgUrl] =useState<string|undefined> (undefined)
    const {user,login,logOut,img} = useContext(Auth)
    const [checked,setChecked]= useState(false)
    useEffect(()=>{
   
    if (user) {
        setAuth(user.name)
    }
    if (img) {
        setImgUrl(img)
    }
    },[user,img])
    useEffect(()=>{
    let lang =localStorage.getItem('lang')
    if (lang === 'ar') setChecked(false)
    else {
        setChecked(true)
    }
    },[])
    const handleOpenNavMenu = (event:React.MouseEvent) => {
        setAnchorElNav(event.currentTarget);
       
      };
     
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    
     
      const Login=() =>{
         
          setOpen(true)
      }
     const handleChange=(str:string)=>{

         setChecked(!checked)
         localStorage.setItem('lang',`${str}`)
         window.location.reload()
     }
    return (
        <>
        <div className="navbar">
            <AppBar position="fixed"
                   color="inherit">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{display:{xs:'flex',sm:'none',md:'none',justifyContent:'space-evenly'}}}>
                            <IconButton 
                             size='large'
                              aria-controls='menu-appbar'
                              onClick={handleOpenNavMenu}>
                                  <MenuIcon />
                            </IconButton>
                         
                            <Drawer 
                              anchor='left'
                              open={Boolean(anchorElNav)}
                              onClose={handleCloseNavMenu} 
                             >
                                  <List sx={{display:'flex',alignItems:'cetnter'}}>
                                          <ListItem onClick={handleCloseNavMenu}>
                                               <div className="register">{
                                                   auth?
                                                 
                                               <Link className='myProfile' to="/profile">
                                                    <span>{auth}</span>
                                                  {imgUrl? <img src={imgUrl} 
                                                  
                                                  style={{width:"25px",height:"25px",borderRadius:"50%"}} /> 
                                                    : <Avatar color="inherit"/>}
                                                </Link>
                                               :
                                                    ""}
                                                </div>
                                           </ListItem>
                                            <ListItem button onClick={handleCloseNavMenu}>
                                               <Link to="/">
                                                 {translator('Navbar','Home')}
                                                </Link>
                                            </ListItem>
                                            {auth&& (<>
                                                 <ListItem button onClick={handleCloseNavMenu}>
                                                 <Link to="/shippingrequest">
                                                 {translator('Navbar','OrderShipment')}
                                                  </Link>
                                              </ListItem >
                                             
                                            </>
                                            )}
                                            <ListItem button onClick={handleCloseNavMenu}>
                                                <Link to="/about">
                                                {translator('Navbar','AboutUs')}
                                                </Link>
                                            </ListItem >
                                            <ListItem button onClick={handleCloseNavMenu}>
                                                <Link to="/contactus">
                                                {translator('Navbar','ContactUs')}
                                                </Link>
                                            </ListItem >
                                            <ListItem button onClick={handleCloseNavMenu}>
                                               <Link to="/faqs">
                                                    FAQs
                                                </Link>
                                            </ListItem >
                                            
                                            <ListItem>
                                                    <div className="register">{
                                                        auth?
                                                        
                                                        <Button  onClick={()=>logOut()}>
                                                         {translator('Buttons','SignOut')} 
                                                    </Button>
                                                
                                                    :
                                                            <Button  onClick={()=>Login()}>
                                                                  {translator('Buttons','SignIn')}
                                                            </Button>}
                                                        </div>
                                            </ListItem>
                                            <ListItem button onClick={handleCloseNavMenu} 
                                              >
                                              <MultiSwitch leftLabel='ar' rightLabel='en'
                                                   checked={checked} setChecked={handleChange}/>
                                            </ListItem >
                                </List>
                            </Drawer>
                        </Box>
                        <Box sx={{flexGrow:1
                                 ,display:{xs:'none',md:'flex',sm:'flex',alignItems:'center'}
                                 ,justifyContent:'space-evenly'
                                 ,flexDirection:'row-reverse'}}>
                                     
                                     
                                           <div className="register">{
                                                   auth?
                                                   
                                                   <>
                                                <Link className='myProfile' to="/profile">
                                                    <span>{auth.length>11 ? auth.slice(0,11) +'...':auth}</span>
                                                    {imgUrl? <img src={imgUrl} 
                                                    style={{width:"25px",height:"25px",borderRadius:"50%"}} /> 
                                                    : <Avatar color="inherit"/>}
                                                </Link>
                                                <Button  onClick={()=>logOut()}>
                                                {translator('Buttons','SignOut')} 
                                               </Button>
                                              
                                               </>:
                                                    <Button  onClick={()=>Login()}>
                                                      {translator('Buttons','SignIn')} 
                                                    </Button>}
                                            </div>
                                          
                                            <Link to="/">
                                            {translator('Navbar','Home')}
                                            </Link>
                                            {auth&& (
                                          
                                                <Link to="/shippingrequest">
                                                      {translator('Navbar','OrderShipment')}
                                                </Link>
                                               
                                            
                                            )}
                                             <Link to="/about">
                                             {translator('Navbar','AboutUs')}
                                            </Link>
                                            <Link to="/contactus">
                                            {translator('Navbar','ContactUs')}
                                            </Link>
                                            <Link to="/faqs">
                                                    FAQs
                                            </Link>
                                            <MultiSwitch leftLabel='ar' rightLabel='en'
                                                   checked={checked} setChecked={handleChange}/>
                        </Box>
                    </Toolbar>

                </Container>

            </AppBar>
           
        </div>
         <SignUpDialog 
         open={open} 
         setOpen={setOpen}/>
         </>
    )
}