
import { Button, Menu, Fade, MenuItem } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { signOut } from "../../features/account/accountSlice";
import { clearBasket } from "../../features/basket/basketSlice";
import { Link } from "react-router-dom";


export default function SignedInMenu() {
    const dispatch = useAppDispatch();
    const {user} = useAppSelector(state => state.account);
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button 
                  sx={{color:'black', typography: 'body2', fontWeight: 'bold'}}
                  onClick={handleClick}
            >
                  {user?.email}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >  
               
               <MenuItem component={Link} to='/orders'>My orders</MenuItem>
               <MenuItem onClick={() => {
                    dispatch(signOut());
                    dispatch(clearBasket());
               }}>Log out</MenuItem>  
            </Menu>
        </>
    );
}



