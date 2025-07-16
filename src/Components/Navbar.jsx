import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import { Box, Typography } from "@mui/material";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      top: 0,
      justifyContent: "space-between",
      zIndex: 1000,
      background: "rgba(0, 0, 0, 0.15)",
      backdropFilter: "blur(20px)",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          ml: 1,
          color: "#fff",
          fontFamily: "Arial, sans-serif",
          letterSpacing: "1px",
        }}
      >
        StreamJAM
      </Typography>
    </Link>
    <Box sx={{ flex: 1, mx: 5 }}>
      <SearchBar />
    </Box>
  </Stack>
);

export default Navbar;
