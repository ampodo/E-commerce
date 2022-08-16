
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {useFormContext } from 'react-hook-form';
import AppTextInput from '../../app/components/AppTextInput';


export default function AddressForm() {

  const { control  } = useFormContext();
  return (
    <>
      <Typography variant="h6" gutterBottom sx={{mb:4}}>
        Shipping address
      </Typography>
      
       <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
             <AppTextInput control={control} name='fullName' label='Full name' />
        </Grid>
        <Grid item xs={12} sm={6}>
             <AppTextInput control={control} name='address1' label='Address' />
        </Grid>
        <Grid item xs={12} sm={6}>
            <AppTextInput control={control} name='city' label='City' />
        </Grid>    
        <Grid item xs={12} sm={6}>
        <AppTextInput 
          control={control} 
          name='zip' 
          label='Zipcode'
           
          />
        </Grid>
        <Grid item xs={12}  sm={6}>
        <AppTextInput control={control} name='country' label='Country' />
           </Grid>
     </Grid>
    </>
  );
}
