import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./Home.scss";

const Register = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 3, mb: 3 }}>
        <h1>Register</h1>
        <Button variant="contained">Submit</Button>
      </Box>
    </Container>
  );
};

export default Register;
