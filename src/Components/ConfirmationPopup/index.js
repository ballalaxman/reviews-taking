import { Button, Stack, Typography } from "@mui/material";
import React from "react";
const Index = ({ title, message, onCancel, onSubmit }) => {
  return (
    <React.Fragment>
      <Stack direction="column" spacing={1} justifyContent="center">
        <Typography variant="h6" fontWeight="600" align="center">
          {title}
        </Typography>
        <Typography variant="body1" align="center">
          {message}
        </Typography>
        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          sx={{
            width: "100%",
            pt: 2,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              width: "100px",
            }}
            onClick={onCancel}
          >
            NO
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "100px",
            }}
            onClick={onSubmit}
          >
            YES
          </Button>
        </Stack>
      </Stack>
    </React.Fragment>
  );
};

export default Index;
