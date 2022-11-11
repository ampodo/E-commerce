import "./Cards.css";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

const Cards = () => {
  return (
    <div className="card-grid">
      <Grid
        container
        direction={{ xs: "column", md: "row", lg: "row" }}
        spacing={6}
        alignItems="center"
        justifyContent="center"
        
        sx={{ mt: 6, mb: 6 , p:4 }}
      >
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}       >
          <Card
            sx={{ maxWidth: 345, borderRadius: "16px" }}
            style={{ backgroundColor: "#e3e3e3" }}
          >
            <CardMedia
              component="img"
              alt="needle"
              image="/icons/needle.png"
              sx={{p:4}}
              
            />
            <CardContent  
            
            style={{
             
                    minHeight: "200px"
                    

               }}
               
            >
              <Typography
                gutterBottom
                variant="h7"
                component="div"
                sx={{ color: "#585858", fontWeight: 'bold', mt:2 }}
                align="center"
              >
                Mesotherapy
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "#072227", mt:2}}
                 align="center"
              >
                My service includes the injection of amino acids, minerals, enzymes and vitamins into the middle layer of the skin.
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}     >
          <Card
            sx={{ maxWidth: 345, borderRadius: "16px"  }}
            style={{ backgroundColor: "#e3e3e3" }}
          >
            <CardMedia
              component="img"
              alt="clinic"
              image="/icons/clinic.png"
              sx={{p:4}}
            
            />
            <CardContent
            
            style={{
              
              minHeight: "200px"
              
               }}
            
            
            
            >
              <Typography
                gutterBottom
                variant="h7"
                component="div"
                sx={{color: "#585858", fontWeight: 'bold', mt:2}}
                align="center"
              >
                Skincare procedures
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "#072227",  mt:2 }}
                align="center"
              >
              I provide different skincare procedures. From peeling to mechanical cleaning. Fervently, waiting you in my cabinet. 
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}   >
          <Card
            sx={{ maxWidth: 345, borderRadius: "16px" }}
            style={{ backgroundColor: "#e3e3e3" }}
          >
            <CardMedia
              component="img"
              alt="creams"
              image="/icons/cream256.png"
              sx={{p:4}}
           
            />
            <CardContent
            
            style={{
              
              
              minHeight: "200px"
              
             
               }}
            
            
            
            >
              <Typography
                gutterBottom
                variant="h7"
                component="div"
                sx={{color: "#585858", fontWeight: 'bold', mt:2 }}
                align="center"
              >
                Products for sale
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "#072227" ,  mt:2}}
                 align="center"
              >
              Choose from variety of skincare products. From serums to exfoliating creams. For sure, French quality is guaranteed.
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
