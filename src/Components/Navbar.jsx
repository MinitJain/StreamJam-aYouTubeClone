import { Stack, Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const navigate = useNavigate();

  const handleRelocation = () => {
    navigate("/?category=New");
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
        zIndex: 1000,
        backgroundColor: "rgba(18, 18, 18, 0.3)",
        backdropFilter: "blur(20px) saturate(180%)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Box
        onClick={handleRelocation}
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          minWidth: "200px",
          "&:hover": {
            opacity: 0.8,
          },
        }}
      >
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
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          mx: 3,
        }}
      >
        <SearchBar />
      </Box>

      <Box sx={{ minWidth: "200px" }}></Box>
    </Stack>
  );
};

export default Navbar;
