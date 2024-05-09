import { AppBar, Container, Toolbar, Typography } from "@mui/material";

import BookIcon from "@mui/icons-material/Book";

export default function Header() {
  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography component="h1" variant="h5" fontWeight="bold" flex={1}>
              LiteraryLegendsHub Blog
            </Typography>
            <BookIcon />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
