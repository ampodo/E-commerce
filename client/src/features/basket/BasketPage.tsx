   
   import {  Button, Grid,  Typography } from "@mui/material";
   import { Link } from "react-router-dom";
   import { useAppSelector } from "../../app/store/configureStore";
   import BasketSummary from "./BasketSummary";
   import BasketTable from "./BasketTable";
   
   export default function BasketPage() {
           
    const { basket } = useAppSelector(state => state.basket);
    
     if (!basket) return <Typography variant='h3'></Typography>
     
     return (

       <>
      <BasketTable items={basket.items} />
      <Grid container>
             <Grid item xs={6}/>
             <Grid item xs={6}>
             <BasketSummary />
             <Button
             sx={{mb:14}}
             component={Link} 
             to='/checkout' 
             variant='contained' 
             size='large' 
             fullWidth>
               Check out
               </Button>
             </Grid>
       </Grid>

       </>

     )

   }

