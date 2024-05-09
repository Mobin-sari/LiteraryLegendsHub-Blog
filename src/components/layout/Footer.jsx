import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <footer>
        <Typography
          component="p"
          variant="p"
          bgcolor="#f7f7f7"
          color="primary"
          padding="10px"
          textAlign="center"
          mt={10}
        >
          Weblog with GRAPQL || Developed By Mobin
        </Typography>
      </footer>
    </>
  );
}
