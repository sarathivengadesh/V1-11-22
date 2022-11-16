import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Container } from "./style";
function Login(props) {
  const height = window.screen.width;
  return (
    <Container height={height} className="App">
      <Box
        component="span"
        sx={{
          // background: "blue",
          height: "auto",
          width: "auto",
          minWidth: "250px",
          padding: "16px",
          borderRadius: "5px",
          border: "0.5px solid black",
        }}
      >
        <Stack direction="column" spacing={4}>
          <div className="centerAlign">
            <Typography variant="h4">UserLogin</Typography>
          </div>
          <TextField label="useName" color="primary" size="small" />

          <TextField
            label="password"
            type="password"
            size="small"
            color="primary"
          />
          <Button variant="contained" color="primary">
            LogIn
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default Login;
