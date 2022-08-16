
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useForm, FieldValues} from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../app/store/configureStore';
import { signInUser } from './accountSlice';


const theme = createTheme();


export default function Login() {
    const history = useHistory();
    const location = useLocation<any>();
    const dispatch = useAppDispatch();

    const {register, handleSubmit, formState: {isSubmitting, errors, isValid}} = useForm({
    mode: 'all'
});

    
    async function submitForm(data: FieldValues) {
      try {
        await dispatch(signInUser(data));
        history.push(location.state?.from?.pathname ||  '/catalog');
    } catch (error) {
        console.log(error);
    }
}

    return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{px:4, mb:6, py:6}}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/creamwavy.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'black' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit(submitForm)} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Username"
                autoFocus
                {...register('username', {required: 'Username is required'})}
                error={!!errors.username}
                helperText={errors?.username?.message}

              />

              <TextField
                margin="normal"
                fullWidth
                label="Password"
                type="password"
                {...register('password', {required: 'Password is required'})}
                error={!!errors.password}
                helperText={errors?.password?.message}
                />

             
              <LoadingButton loading={isSubmitting}
                   disabled={!isValid}
                   type="submit" 
                   fullWidth 
                   variant="contained" sx={{mt:3, mb:2}} 
                   >
                     SIGN IN
              </LoadingButton>

              <Grid container justifyContent="center"
                              alignItems="center">
                <Grid item>
                  <Link to='/register'>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

