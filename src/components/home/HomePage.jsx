import { Container, Grid, Typography } from "@mui/material"
import Blog from "../blog/Blog"
import Author from "../author/Author"


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
             <Author/>
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
             <Blog/>
        </Grid>
    </Grid>
  </Container>
  )
}

export default HomePage
