import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Container } from "./style";
import { useForm, Controller } from "react-hook-form";
function Login(props) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
    setValue,
  } = useForm();
  const height = window.screen.width;
  const userData = (data) => {
    console.log(data);
  };
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
        <from onClick={handleSubmit(userData)}>
          <Stack direction="column" spacing={4}>
            <div className="centerAlign">
              <Typography variant="h4">UserLogin</Typography>
            </div>

            <Controller
              {...register("username", {
                required: "type userName",
              })}
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, ref } }) => (
                <TextField
                  label="useName"
                  color="primary"
                  size="small"
                  value={value}
                  onChange={(e) => {
                    onChange(e.target.value);
                  }}
                />
              )}
            />
            <Controller
              {...register("password", {
                required: "type password",
              })}
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value, ref },
                fieldState: { invalid, isTouched, isDirty, error },
              }) => (
                <TextField
                  label="password"
                  type="password"
                  size="small"
                  color="primary"
                  value={value}
                  onChange={(e) => {
                    onChange(e.target.value);
                  }}
                  // error={value.length === 0}
                  // helperText={isDirty && "incorrect"}
                />
              )}
            />

            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSubmit(userData)}
            >
              LogIn
            </Button>
          </Stack>
        </from>
      </Box>
    </Container>
  );
}

export default Login;
