import { Container, Grid, Typography } from "@mui/material";
import Blog from "../blog/Blog";
import Author from "../author/Author";

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} padding={3}>
        <Grid item xs={12} md={3} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            Blogs
          </Typography>
          <Blog />
        </Grid>
        <Grid item xs={12} md={3} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            Authors
          </Typography>
          <Author />
        </Grid>
      </Grid>
    </Container>
  );
}
