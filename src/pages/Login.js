import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const handleSubmit = (e) => {
  alert("Submitted");
  e.preventDefault();
};

// Rate limit authentication Logins or registration. Check google auth docs and web

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{ mt: 3, mb: 3 }}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h1>Log in</h1>
        <p>Use your MyApp Account</p>
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="outlined"
          autoFocus
        />
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          id="outlined-basic"
          label="Password"
          variant="outlined"
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
