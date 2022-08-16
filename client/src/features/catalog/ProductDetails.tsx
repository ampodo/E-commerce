import { LoadingButton } from "@mui/lab";
import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from  "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../app/errors/NotFound";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { addBasketItemAsync, removeBasketItemAsync  } from "../basket/basketSlice";  
import { fetchProductAsync, productSelectors } from "./catalogSlice";


export default function ProductDetails() {
   const {basket, status} = useAppSelector(state => state.basket);
   const dispatch = useAppDispatch();
   const {id} = useParams<{id: string}>();
   const product = useAppSelector(state => productSelectors.selectById(state, id));
   const {status: productStatus} = useAppSelector(state => state.catalog);
   const [quantity, setQuantity] = useState(0);
   const item = basket?.items.find(i => i.productId === product?.id);
   

   useEffect(() => {
        if (item) setQuantity(item.quantity);
        if (!product) dispatch(fetchProductAsync(parseInt(id)))
    }, [id, item, dispatch, product]);

    
   
   function handleInputChange(event: any) {
       if (event.target.value >= 0 && event.target.value <=5 ) {
        setQuantity(parseInt(event.target.value));
       }
   }
    
   function handleUpdateCart() {
           
           if(!item || quantity > item.quantity) {
               const updatedQuantity = item ? quantity - item.quantity : quantity;
               dispatch(addBasketItemAsync({productId: product?.id!, quantity: updatedQuantity}))
           
            } else {
                const updatedQuantity = item.quantity - quantity;
                dispatch(removeBasketItemAsync({productId: product?.id!, quantity: updatedQuantity}))
                   
           }
   }
    
   if (productStatus.includes('pending')) return <LoadingComponent message='Loading product...' />
   

   if (!product) return <NotFound />

   return (
       <Grid container spacing={6} sx={{p:4}}>
         <Grid item xs={12} md={6} sx={{mt:2}}>
             <div className='detail_pic'>
            <img  src={product.pictureUrl} alt={product.name} style={{width: '100%', backgroundSize: 'contain'}} />
             </div>
         </Grid>
           <Grid item  xs={12} md={6}>
              <Typography variant='h3'>{product.name}</Typography>
              <Divider sx={{mb: 2}} />
              <Typography variant='h4' color='white'>€{(product.price).toFixed(2)}</Typography>
              <TableContainer>
                <Table>
                    <TableBody>
                       <TableRow>
                           <TableCell>Name</TableCell>
                           <TableCell>{product.name}</TableCell>  
                       </TableRow>
                       <TableRow>
                           <TableCell>Descripton</TableCell>
                           <TableCell>{product.description}</TableCell>  
                       </TableRow>
                       <TableRow>
                           <TableCell>Type</TableCell>
                           <TableCell>{product.type}</TableCell>  
                       </TableRow>
                       <TableRow>
                           <TableCell>Brand</TableCell>
                           <TableCell>{product.brand}</TableCell>  
                       </TableRow>
                       <TableRow>
                           <TableCell>Quantity in stock</TableCell>
                           <TableCell>{product.quantityInStock}</TableCell>  
                       </TableRow>
                    </TableBody>
                </Table>
              </TableContainer>

              

              <Grid container spacing={2} sx={{mt:2}}>
                 <Grid item xs={6}>
                    <TextField
                          onChange={handleInputChange}
                          variant='outlined'
                          type='number'
                          fullWidth
                          value={quantity}
                     />
                   </Grid>
                  <Grid item xs={6} sx={{mb:4}}>
                       <LoadingButton
                            disabled={item?.quantity === quantity || !item && quantity === 0}
                            loading={status.includes('pending')}
                            onClick = {handleUpdateCart}
                            sx={{height: '55px'}}
                            color='primary'
                            size='large'
                            variant='contained'
                            fullWidth
                        >
                           {item ? 'Update Amount' : 'Add to Cart'}
                        </LoadingButton>
                 </Grid>
              </Grid>
           </Grid>
       </Grid>  
       
   )

}

