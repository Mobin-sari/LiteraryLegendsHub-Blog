import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/graphQl";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Author() {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <h1>Loading ...</h1>;
  if (errors) return <h1>We have some errors</h1>;

  const { authors } = data;

  console.log(data);
  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
    >
      {authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={1}>
            <Link
              to={`/authors/${author.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Avatar src={author.avatar.url} sx={{ marginRight: 2 }} />
              <Typography componet="p" variant="p" color="text.scondary">
                {author.name}
              </Typography>
            </Link>
          </Grid>
          {index !== author.lenght - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
}
