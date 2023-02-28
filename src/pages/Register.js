import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

import "./Register.scss";

// Validate that password fields match https://stackoverflow.com/questions/70480928/how-to-validate-password-and-confirm-password-in-react-hook-form-is-there-any-v/71429960#71429960
// REGEX rules for password https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a

const Register = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const navigate = useNavigate();

  // On submit create user with Google auth and redirect to /
  async function onhandleSubmit(data) {
    //console.log(data);

    try {
      await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
        data.name
      );
      navigate("/");
      alert("User Created Successfully");
    } catch (error) {
      console.log(error);
      alert("User created failed");
      alert(error);
    }
  }

  // Add state and click handler for hide/show password icon

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{ mt: 3, mb: 3 }}
        component="form"
        noValidate
        onSubmit={handleSubmit(onhandleSubmit)}
      >
        <h1>Register</h1>
        <p>Create your MyApp Account</p>
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          label="First Name"
          autoFocus
          autoComplete="on"
          variant="outlined"
          {...register("firstName", {
            required: "The First Name field is required",
          })}
          error={!!errors?.firstName}
          helperText={errors?.firstName ? errors.firstName.message : null}
        />
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          label="Last Name"
          autoComplete="on"
          variant="outlined"
          {...register("lastName", {
            required: "The Last Name field is required",
          })}
          error={!!errors?.lastName}
          helperText={errors?.lastName ? errors.lastName.message : null}
        />
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          label="Email"
          autoComplete="on"
          variant="outlined"
          {...register("email", {
            required: "The Email field is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          error={!!errors?.email}
          helperText={errors?.email ? errors.email.message : null}
        />
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          label="Password"
          variant="outlined"
          autoComplete="off"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          {...register("password", {
            required: "The Password field is required",
            pattern: {
              value:
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i,
              message:
                "Password must be at least 8 characters long, contain both uppercase and lowercase letters, contain at least one number and contain at least on special character",
            },
          })}
          error={!!errors?.password}
          helperText={errors?.password ? errors.password.message : null}
        />

        <Button
          variant="contained"
          size="large"
          disableElevation
          type="submit"
          fullWidth
        >
          Register
        </Button>
        <p>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </Box>
    </Container>
  );
};

export default Register;
