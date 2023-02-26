import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <Container maxWidth="xl" sx={{ mt: 3, mb: 3, textAlign: "center" }}>
        <Box>Copyright &copy; 2023</Box>
      </Container>
    </div>
  );
};
export default Footer;
