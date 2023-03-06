import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Dashboard = () => {
  // Show layout default without placeholder and blank information in case that collection was not created

  // If not user document in users collection show form to create one

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 3, mb: 3 }}>
        <h1>Dashboard</h1>
        <p>Welcome</p>
      </Box>
    </Container>
  );
};

export default Dashboard;
