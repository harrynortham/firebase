import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import "./Register.scss";
import { useForm } from "react-hook-form";

// Check react hook form on how to validate onChange and then submit form after
// Validate that password fields match

const Register = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{ mt: 3, mb: 3 }}
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Register</h1>
        <p>Create your MyApp Account</p>
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          label="Email"
          autoFocus
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
          type="password"
          {...register("password", {
            required: "The Password field is required",
          })}
          error={!!errors?.password}
          helperText={errors?.password ? errors.password.message : null}
        />
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          label="Confirm Password"
          autoComplete="off"
          variant="outlined"
          type="password"
          {...register("confirmPassword", {
            required: "The Confirm Password field is required",
            validate: (value) => {
              const { password } = getValues();
              return password === value || "Passwords should match!";
            },
          })}
          error={!!errors?.confirmPassword}
          helperText={
            errors?.confirmPassword ? errors.confirmPassword.message : null
          }
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
