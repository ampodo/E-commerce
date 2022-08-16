import { Button, Container, Divider, Paper, Typography} from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <Container component={Paper} sx={{height: 400}}>
            <Typography gutterBottom variant='h5'>Sorry, we could not find what are you looking for.</Typography>
            <Divider />
            <Button fullWidth component={Link} to='/catalog'>Go back to catalog.</Button>
        </Container>
    )
}

