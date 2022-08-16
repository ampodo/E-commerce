
import { Container, Grid, Box, Link } from  "@mui/material";

export default function Footer() {

   return <footer>
           <Box

    style={{backgroundColor: "white", color: "black"}}

      px={{xs:3, sm: 10}}

      py={{xs:5, sm: 10}}

  
        >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
              
              <Grid item  xs={12} sm={6}>
                <Box borderBottom={1}>Help</Box>
                <Box>
                <Link href="/catalog" color="inherit" sx={{textDecoration: 'none', fontSize:14}}>
                      Catalog
                   </Link>
             </Box>
             <Box>
      
      <Link href="/contact" color="inherit" sx={{textDecoration: 'none',  fontSize:14}}>
           Contact
       </Link>
          </Box>  
          <Box>
      
      <Link href="/about" color="inherit" sx={{textDecoration: 'none', fontSize:14}}>
      
          About us
       
            </Link>
                </Box>


              
  
              </Grid>


              <Grid item  xs={12} sm={6}>
                <Box borderBottom={1}>Account</Box>
                <Box>
                <Link href="/login" color="inherit" sx={{textDecoration: 'none', fontSize:14}}>
              Login
                   </Link>
             </Box>
             <Box>
      
      <Link href="/register" color="inherit" sx={{textDecoration: 'none',  fontSize:14}}>
            Register
       </Link>
          </Box>  
         
          <Grid item container direction="row" xs={12} sm={10} sx={{mt:4}}>
          <Box>
            <Link href="https://www.instagram.com/" color="inherit">
           <img className="insta_logo" src="/icons/40inst.png" alt=""/>
           </Link>
             </Box>
            <Box>
           <Link href="https://www.viber.com/" color="inherit">
            <img className="viber_logo" src="/icons/40viber.png" alt=""/>
              </Link>
                 </Box>
                 <Box>
               <Link href="https://www.facebook.com/" color="inherit">
                <img className="face_logo" src="/icons/40face.png" alt=""/>
              </Link>
                 </Box>
                 <Box sx={{p:4, fontSize:13,  fontWeight: 'bold', ml:-3}}>
                    <p>(+372) 567 897 33</p>
                    <p>cosmetologist@academielab.com</p>
                 </Box>
              </Grid>
              </Grid>
           </Grid>
        </Container>
    </Box>
   </footer>

   }


