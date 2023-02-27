import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const handleSubmit = (e) => {
  alert("Submitted");
  e.preventDefault();
};

const ResetPassword = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{ mt: 3, mb: 3 }}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h1>Reset Password</h1>
        <p>We'll email you instructions to reset your MyApp password</p>
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <Button
          size="large"
          variant="contained"
          disableElevation
          type="submit"
          fullWidth
        >
          Reset Password
        </Button>
      </Box>
    </Container>
  );
};

export default ResetPassword;
