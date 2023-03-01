import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

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

  // List of firebase error messages https://stackoverflow.com/questions/67617502/what-are-the-error-codes-for-flutter-firebase-auth-exception

  // On submit log in user with Google auth and redirect
  async function onhandleSubmit(data) {
    try {
      await logIn(data.email, data.password);
      navigate("/dashboard");
    } catch (error) {
      const errorCode = {
        "auth/wrong-password": "You have entered an invalid Email or Password",
        "auth/invalid-email": "You have entered an invalid Email or Password",
        "auth/user-disabled": "Account has been disabled",
        "auth/user-not-found": "You have entered an invalid Email or Password",
      };
      setAuthError(errorCode[error.code]);
    }
  }

  // REDIRECT LOGIN, REGISTER, FORGOT PASSWORD, IF LOGGED IN

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
          label="Email"
          variant="outlined"
          autoComplete="on"
          autoFocus
          {...register("email", {
            required: "Please enter your email address",
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
          autoComplete="on"
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
            required: "Please enter your password",
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
