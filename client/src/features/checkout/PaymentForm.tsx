
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import AppTextInput from '../../app/components/AppTextInput';
import { useFormContext } from 'react-hook-form';


export default function PaymentForm() {
  const {control} = useFormContext();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
           <AppTextInput name='nameOnCard' label='Name on card' control={control} />
        </Grid>
      </Grid>
    </>
  );
}

