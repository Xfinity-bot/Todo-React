import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 0 }}>
      <AppBar position="static">
        <Typography variant="h5" sx={{ padding: 1 }} component="div">
          Todo-App
        </Typography>
      </AppBar>
    </Box>
  );
};

export default Navbar;
