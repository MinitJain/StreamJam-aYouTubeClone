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
      direction={{ xs: "column", sm: "row" }}
      alignItems={{ xs: "stretch", sm: "center" }}
      p={{ xs: 1, sm: 2 }}
      spacing={{ xs: 1, sm: 0 }}
      sx={{
        position: "sticky",
        top: 0,
        justifyContent: { xs: "center", sm: "space-between" },
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
          justifyContent: { xs: "center", sm: "flex-start" },
          cursor: "pointer",
          minWidth: { xs: "auto", sm: "200px" },
          mb: { xs: 1, sm: 0 },
          "&:hover": {
            opacity: 0.8,
          },
        }}
      >
        <img src={logo} alt="logo" height={35} style={{ maxWidth: 40 }} />
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            ml: 1,
            color: "#fff",
            fontFamily: "Arial, sans-serif",
            letterSpacing: "1px",
            fontSize: { xs: "1.1rem", sm: "1.5rem" },
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
          mx: { xs: 0, sm: 3 },
          width: { xs: "100%", sm: "auto" },
        }}
      >
        <SearchBar />
      </Box>

      <Box
        sx={{
          minWidth: { xs: 0, sm: "200px" },
          display: { xs: "none", sm: "block" },
        }}
      ></Box>
    </Stack>
  );
};

export default Navbar;
