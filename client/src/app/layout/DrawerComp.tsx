

import React, {useState}  from "react"
import {Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";



   const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'},
]

const midLinks = [

    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'},
    {title: 'my orders', path: '/orders'},
 ]



const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
return (

   <React.Fragment>
      
      <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
          <List>
                {
                    rightLinks.map(({title, path}) => (
                                   
                        <ListItemButton onClick={() => setOpenDrawer(false)} 
                           component={NavLink} to={path} key={path}>
                        <ListItemIcon>
                        <ListItemText>{title.toUpperCase()}</ListItemText>
                         </ListItemIcon>      
                         </ListItemButton>
                         
                    ))

                }
          </List>

          <List>
                {
                    midLinks.map(({title, path}) => (
                                   
                        <ListItemButton onClick={() => setOpenDrawer(false)}          
                         component={NavLink} to={path} key={path}>
                        <ListItemIcon>
                        <ListItemText>{title.toUpperCase()}</ListItemText>
                         </ListItemIcon>      
                         </ListItemButton>
                         
                    ))

                }
          </List>
      </Drawer>
          <IconButton onClick={()=> setOpenDrawer(!openDrawer)}>
                 <MenuIcon sx={{color: 'black'}}/>
          </IconButton>
   </React.Fragment>


)}


export default DrawerComp;
