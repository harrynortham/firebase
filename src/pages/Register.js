import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 3, mb: 3 }} component="form" noValidate autoComplete="off">
        <h1>Register</h1>
        <p>Create your MyApp Account</p>
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
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
        />
        <Button variant="contained" size="large" disableElevation>
          Next
        </Button>
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </Box>
    </Container>
  );
};

export default Register;
