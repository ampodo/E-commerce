
import { Box,  Typography, Link } from  "@mui/material";
import Slider from "react-slick";
import "./homepage.css";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#b3becc' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



export default function Homepage() {

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      useTransform: false
  };


   
   return (
      
      <>
      <Slider {...settings}>
          
          <div className="bg-1">
              <img src="/images/hero.jpg" alt="hero"   style={{display: 'block', width:'100%',   maxHeight:650, backgroundSize: 'cover', backgroundAttachment: "fixed", backgroundRepeat: "no-repeat" }}  />
          </div>
          <div className="bg-2">
          <img src="/images/hero2.jpg" alt="hero"   style={{display: 'block', width:'100%',   maxHeight:650, backgroundSize: 'cover', backgroundAttachment: "fixed", backgroundRepeat: "no-repeat" }}  />
          </div>
          <div className="bg-3">
          <img src="/images/hero3.jpg" alt="hero"   style={{display: 'block', width:'100%',   maxHeight:650, backgroundSize: 'cover', backgroundAttachment: "fixed", backgroundRepeat: "no-repeat" }}  />
          </div>
          
      </Slider>
       
         <Box display='flex' justifyContent='center' sx={{p:4, mt:6}}>                 
          <Typography align='center' variant='h4'>Welcome to Academie online shop</Typography>
       </Box> 


       <Grid container direction={{xs:"column", md:"row"}} spacing={2} sx={{mb:8, p:2}}>
       <Grid item xs={6}>
        <Item>
           <Link href="/catalog" color="inherit" sx={{textDecoration: 'none', fontWeight: 'bold'}}>
                <div className="avatar_1">
                <img className="cream" src="/icons/cream300.png" alt=""/>
                <Typography align='center' variant='h4'>Shop online</Typography>
                </div>
                </Link>
        </Item>
         </Grid>
        <Grid item xs={6}>
            <Item>
            <Link href="/contact" color="inherit" sx={{textDecoration: 'none', fontWeight: 'bold'}}>
            <div className="avatar_2">
                <img className="chair" src="/icons/faceapply.png" alt=""/>
                <Typography  align='center' variant='h4'>Book therapy</Typography>
                </div>
                </Link>
            </Item>
          </Grid>
      </Grid> 
      
       
  </>


   )

}



