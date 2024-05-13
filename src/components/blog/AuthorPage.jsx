import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { Avatar, Container, Grid, Typography } from "@mui/material";

import { GET_AUTHOR_INFO } from "../../graphql/graphQl";

import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

export default function AuthorPage() {
  const { slug } = useParams();

  const { loading, data, errors } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;

  if (errors) return <h1>We have some errors/</h1>;

  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar
            src={data.author.avatar.url}
            sx={{ width: 250, height: 250 }}
          />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {data.author.name}
          </Typography>
          <Typography component="p" variant="h5" text="text.secondary" mt={2}>
            {data.author.field}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div
            dangerouslySetInnerHTML={{ __html: data.author.description.html }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            مقالات {data.author.name}
          </Typography>
          <Grid container>
            {data?.author.posts?.map((post) => (
              
              <Grid item xs={12} sm={6} md={4} key={post.id} padding={2}>
                <CardEL
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}