import { AppBar, Container, Toolbar, Typography } from "@mui/material"
import BookIcon from '@mui/icons-material/Book';

function Header() {
  return (
    <AppBar>
        <Container maxWidth="lg">
            <Toolbar>
                <Typography 
                component="h3" 
                variant="h5" 
                fontWeight="bold"
                flex={1}
                >
                    وبلاگ
                </Typography>
                <BookIcon/>
            </Toolbar>

        </Container>
    </AppBar>
   
  )
}

export default Header
