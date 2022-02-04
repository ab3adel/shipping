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
}
from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import {SignUpDialog} from '../home/signupdialog/signupdialog'
import { Login } from '@mui/icons-material'

export const Navbar =() =>{
    const [anchorElNav, setAnchorElNav] = useState <Element |null>(null);
    const [anchorElUser, setAnchorElUser] = useState <Element |null>(null);
    const [open,setOpen] = useState(false)
    const [auth,setAuth] =useState<null|string>(null)
    const [imgUrl,setImgUrl] =useState<string|undefined> (undefined)
    const {user,login,logOut,img} = useContext(Auth)
    useEffect(()=>{
   
    if (user) {
        setAuth(user.name)
    }
    if (img) {
        setImgUrl(img)
    }
    },[user,img])
    const handleOpenNavMenu = (event:React.MouseEvent) => {
        setAnchorElNav(event.currentTarget);
       
      };
     
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    
     
      const Login=() =>{
         
          setOpen(true)
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
                                                الرئيسية
                                                </Link>
                                            </ListItem>
                                            {auth&& (<>
                                                 <ListItem button onClick={handleCloseNavMenu}>
                                                 <Link to="/shippingrequest">
                                                      اطلب شحنة
                                                  </Link>
                                              </ListItem >
                                             
                                            </>
                                            )}
                                            <ListItem button onClick={handleCloseNavMenu}>
                                                <Link to="/about">
                                                    من نحن
                                                </Link>
                                            </ListItem >
                                            <ListItem button onClick={handleCloseNavMenu}>
                                                <Link to="/contactus">
                                                    تواصل معنا
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
                                                        تسجيل الخروج
                                                    </Button>
                                                
                                                    :
                                                            <Button  onClick={()=>Login()}>
                                                                تسجيل الدخول
                                                            </Button>}
                                                        </div>
                                            </ListItem>
                                           
                                </List>
                            </Drawer>
                        </Box>
                        <Box sx={{flexGrow:1
                                 ,display:{xs:'none',md:'flex',sm:'flex'}
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
                                                   تسجيل الخروج
                                               </Button>
                                              
                                               </>:
                                                    <Button  onClick={()=>Login()}>
                                                        تسجيل الدخول
                                                    </Button>}
                                            </div>
                                          
                                            <Link to="/">
                                                الرئيسية
                                            </Link>
                                            {auth&& (
                                          
                                                <Link to="/shippingrequest">
                                                      اطلب شحنة
                                                </Link>
                                               
                                            
                                            )}
                                             <Link to="/about">
                                                    من نحن
                                            </Link>
                                            <Link to="/contactus">
                                                    تواصل معنا
                                            </Link>
                                            <Link to="/faqs">
                                                    FAQs
                                            </Link>
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