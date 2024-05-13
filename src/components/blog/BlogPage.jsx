import { useQuery } from "@apollo/client";
import { GET_POST_INFO } from "../../graphql/graphQl";

import { useNavigate, useParams } from "react-router-dom";

import Loader from "../shared/Loader";
import Comment from "../comment/Comment";

import { Container } from "@mui/system";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Comments from "../comment/Comments";

export default function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { errors, data, loading } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;

  if (errors) return <h1>We have some Errors</h1>;

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} mt={9}>
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {data.post.title}
          </Typography>
          <ArrowBackIcon onClick={() => navigate(-1)} />
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={data.post.coverPhoto.url}
            alt={data.post.slug}
            width="100%"
            style={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid item xs={12} mt={7} display="flex" alignItems="center">
          <Avatar
            src={data.post.author.avatar.url}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700}>
              {data.post.author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {data.post.author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{ __html: data.post.content.html }}
          ></div>
        </Grid>
        <Grid item xs={12}>
          <Comment slug={slug} />
        </Grid>
        <Grid item xs={12}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
}
