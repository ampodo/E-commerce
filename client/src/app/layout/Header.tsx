
import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge,IconButton, List, ListItem, Toolbar, Typography, useMediaQuery,useTheme} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";
import DrawerComp from "./DrawerComp";
import SignedInMenu from "./SignedInMenu";
import "./styles.css"



const midLinks = [

   {title: 'catalog', path: '/catalog'},
   {title: 'about', path: '/about'},
   {title: 'contact', path: '/contact'},
]

const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'},
]



export default function Header() {

   const {basket} = useAppSelector(state => state.basket);
   const {user} = useAppSelector(state => state.account);
   const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0)
   const theme = useTheme();
   console.log(theme);
   const isMatch = useMediaQuery(theme.breakpoints.down("md"));
   console.log(isMatch);

    return (
         <AppBar position='static' style={{backgroundColor: "white"}}>
             <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Typography variant='h6' component={NavLink}
                to='/'
                sx={{textDecoration: 'none'}}>
                <div className="header_logo">
                <img className="logo" src="/icons/logo.png" alt=""/>
                </div>
                </Typography>

                <IconButton component = {Link} to='/basket' size='large' sx={{color:'black'}}>
                    <Badge badgeContent={itemCount} color='primary'>
                         <ShoppingCart />
                    </Badge>
               </IconButton>

               {
                      isMatch ? (
                          <>
                             <Typography>       
                             </Typography>
                             <DrawerComp/>  
                          </>
                      ) : (
            
                            <>  
                     

                         
                     
                <List sx={{display: 'flex', ml: 8}}>
                    {midLinks.map(({title, path}) => (
                        <ListItem
                           component={NavLink}
                           to={path}
                           key={path}
                           sx={{color: 'black', fontWeight: 'bold',
                           '&:hover': {
                               color: 'grey.500'
                           },
                           '&.active': {
                               color: 'grey.400'
                           }
                        }}
                        >
                           {title.toUpperCase()}
                       </ListItem>
                    
                    ))}
                </List>

                {user ? (
                       <SignedInMenu />
                ) : (


                    <List sx={{display: 'flex'}}>
                    {rightLinks.map(({title, path}) => (
                        <ListItem
                           component={NavLink}
                           to={path}
                           key={path}
                           sx={{color: 'black',  fontWeight: 'bold',
                           '&:hover': {
                            color: 'grey.500'
                          },
                        '&.active': {
                            color: 'grey.400'
                            }  
                        }}
                        >
                           {title.toUpperCase()}
                       </ListItem>
                    ))}
                </List>



                )}

                
                          
                      </>
                     )}                           

             </Toolbar> 
         </AppBar>
    )

}







