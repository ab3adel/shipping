import {Link } from 'react-router-dom'
import React, {useState} from 'react'
import 
{AppBar
    ,Menu
    ,MenuItem
    ,Toolbar
    ,Container
    ,Box
    ,IconButton}
from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export const Navbar =() =>{
    const [anchorElNav, setAnchorElNav] = useState <Element |null>(null);
    const [anchorElUser, setAnchorElUser] = useState <Element |null>(null);
    const handleOpenNavMenu = (event:React.MouseEvent) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleOpenUserMenu = (event:React.MouseEvent) => {
        setAnchorElUser(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
    return (
        <div className="navbar">
            <AppBar position="fixed"
                   color="inherit">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{display:{xs:'flex',md:'none'}}}>
                            <IconButton 
                             size='large'
                              aria-controls='menu-appbar'
                              onClick={handleOpenNavMenu}>
                                  <MenuIcon />
                            </IconButton>
                            <Menu 
                             id="menu-appbar"
                             anchorEl={anchorElNav}
                             keepMounted
                             anchorOrigin={{
                                 vertical:'bottom',
                                 horizontal:'left'
                             }}
                             transformOrigin={{
                                 vertical:'top',
                                 horizontal:'left'
                             }}
                             open={Boolean(anchorElNav)}
                             onClose={handleCloseNavMenu}
                             sx={{display:{xs:'block',md:'none'}}}
                             >
                                           <div className="register">
                                                <button>
                                                    تسجيل الدخول
                                                </button>
                                            </div>
                                            <MenuItem onClick={handleCloseNavMenu}>
                                               <Link to="#">
                                                الرئيسية
                                                </Link>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseNavMenu}>
                                                <Link to="#">
                                                    من نحن
                                                </Link>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseNavMenu}>
                                                <Link to="#">
                                                    تواصل معنا
                                                </Link>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseNavMenu}>
                                               <Link to="#">
                                                    FAQs
                                                </Link>
                                            </MenuItem>
                                               
                            </Menu>
                        </Box>
                        <Box sx={{flexGrow:1
                                 ,display:{xs:'none',md:'flex'}
                                 ,justifyContent:'space-evenly'
                                 ,flexDirection:'row-reverse'}}>
                                     
                                           <div className="register">
                                                <button>
                                                    تسجيل الدخول
                                                </button>
                                            </div>
                                               <Link to="#">
                                                الرئيسية
                                                </Link>
                                                <Link to="#">
                                                    من نحن
                                                </Link>
                                                <Link to="#">
                                                    تواصل معنا
                                                </Link>
                                                <Link to="#">
                                                    FAQs
                                                </Link>
                        </Box>
                    </Toolbar>

                </Container>

            </AppBar>
           
        </div>
    )
}