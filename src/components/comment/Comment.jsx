import { useMutation } from "@apollo/client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { SEND_COMMENT } from "../../graphql/mutations";

export default function Comment({ slug }) {
  const [name, setName] = useState("");
  const [email, setEamil] = useState("");
  const [text, setText] = useState("");

  const [sendComment, { errors, data, loading }] = useMutation(SEND_COMMENT, {
    variables: { name, email, slug, text },
  });

  const sendHandler = () => {
    if (name && email && text) {
        sendComment()
    }
  }

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0,1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          فرم ارسال کامنت
        </Typography>
      </Grid>
      <Grid item xs={12} m={3}>
        <TextField
          label="نام کاربری"
          variant="outlined"
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="ایمیل شما"
          variant="outlined"
          sx={{ width: "100%", marginTop: "8px" }}
          value={email}
          onChange={(e) => setEamil(e.target.value)}
        />
        <TextField
          label="متن کامنت"
          variant="outlined"
          sx={{ width: "100%", marginTop: "8px" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          minRows={4}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <Button variant="contained">ارسال</Button>
      </Grid>
    </Grid>
  );
}
