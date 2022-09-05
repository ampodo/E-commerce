
import { Button } from "@mui/material";
import "./Homepage.css";
import { Link } from 'react-router-dom';

const HomePage = () => {

  return (
    <div className='hero'>
           <div className='content'>
          
                   <Button className='button' color="primary"
                   component={Link}
                   variant="contained"
                            sx={{my:4}}
                            size="large"
                            to="/catalog"
                             >
                   Shop online
                </Button>  
               
            </div>
    </div>
  )
}

export default HomePage