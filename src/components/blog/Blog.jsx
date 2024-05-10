import { useQuery } from "@apollo/client";
import {  GET_BLOGS_INFO } from "../../graphql/graphQl";
import { Grid } from "@mui/material";
import CardEL from "../shared/CardEL";

export default function Blog() {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);

  if (loading) return <h1>Loading ...</h1>;
  if (errors) return <h1>We have some errors</h1>;
  
  return (
    <Grid container spacing={2}>
      {data?.posts.map((post) => (
        <Grid key={post.id} item xs={12} sm={6} md={4}>
          <CardEL {...post} />
        </Grid>
      ))}
    </Grid>
  );
}
