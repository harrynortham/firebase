import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";

// Rate limit authentication Logins or registration. Check google auth docs and web

const Login = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const { logIn } = useAuth();
  const navigate = useNavigate();

  const [authError, setAuthError] = useState();

  // On submit log in user with Google auth and redirect
  async function onhandleSubmit(data) {
    try {
      await logIn(data.email, data.password);
      navigate("/");
    } catch (err) {
      setAuthError(err.message);
    }
  }

  // ADD SHOW PASSWORD FUNCTIONALITY LIKE REGISTER
  // ADD VALIDATION TO CHECK EMAIL VALID
  // ADD ERROR CODES AND CONVERT TO HUMAN FRIENDLY ERROR
  // REDIRECT LOGIN, REGISTER, FORGOT PASSWORD, IF LOGGED IN
  // CREATE DASHBOARD PAGE WITH USER PROFILE
  // CREATE DOCUMENT IN NEW COLLECTION OF USERS IN FIRESTORE AFTER REGISTER

  return (
    <Container maxWidth="sm">
      <Box
        sx={{ mt: 3, mb: 3 }}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onhandleSubmit)}
      >
        <h1>Log in</h1>
        <p>Use your MyApp Account</p>
        {authError && (
          <Alert variant="filled" severity="error" sx={{ mb: 2 }}>
            {authError}
          </Alert>
        )}

        <TextField
          sx={{ mb: 2 }}
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="outlined"
          autoComplete="on"
          autoFocus
          {...register("email", {
            required: "The Email field is required",
          })}
          error={!!errors?.email}
          helperText={errors?.email ? errors.email.message : null}
        />
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          id="outlined-basic"
          label="Password"
          variant="outlined"
          autoComplete="on"
          {...register("password", {
            required: "The Password field is required",
          })}
          error={!!errors?.password}
          helperText={errors?.password ? errors.password.message : null}
        />
        <Button
          size="large"
          variant="contained"
          disableElevation
          type="submit"
          fullWidth
        >
          Log In
        </Button>
        <p>
          Troubles logging in? <Link to="/reset-password">Reset Password</Link>
        </p>
      </Box>
    </Container>
  );
};

export default Login;
