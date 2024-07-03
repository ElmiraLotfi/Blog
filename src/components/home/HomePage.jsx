import { Container, Grid, Typography } from "@mui/material"
import Blogs from "../blog/Blogs"
import Authors from "../author/Authors"


function HomePage() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} padding={3}>
        <Grid item xs={12} md={3} mt={4}>
            <Typography
             component="h3" 
             variant="h5"
             mb={3}
             fontWeight={700}
             >
                نویسندگان
             </Typography>
             <Authors/>
        </Grid>
        <Grid item xs={12} md={9} mt={4}>
            <Typography
             component="h3" 
             variant="h5"
             mb={3}
             fontWeight={700}
             >
                مقالات
             </Typography>
             <Blogs/>
        </Grid>
    </Grid>
  </Container>
  )
}

export default HomePage
