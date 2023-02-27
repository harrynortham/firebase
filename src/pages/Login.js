import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 3, mb: 3 }} component="form" noValidate autoComplete="off">
        <h1>Sign in</h1>
        <p>Use your MyApp Account</p>
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />
        <Button size="large" variant="contained" disableElevation>
          Next
        </Button>
        <p>
          Troubles signing in? <Link to="/reset-password">Reset Password</Link>
        </p>
      </Box>
    </Container>
  );
};

export default Login;
