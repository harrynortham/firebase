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
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Register</h1>
        <p>Create your MyApp Account</p>
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="outlined"
          {...register("email", { required: "Required" })}
          error={!!errors?.email}
          helperText={errors?.email ? errors.email.message : null}
        />
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
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
