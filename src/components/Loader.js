import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./Loader.scss";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <CircularProgress size="4em" />
    </Box>
  );
};

export default Loader;
