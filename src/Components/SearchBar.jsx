// File: src/components/SearchBar.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm.trim()}`);
      setSearchTerm(""); // optional: clears the input
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%", // responsive width from parent
        maxWidth: "600px", // optional: limits it from being too big
        borderRadius: "20px",
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          fontSize: "16px",
          backgroundColor: "transparent",
          color: "#000",
          height: "100%",
        }}
      />
      <IconButton type="submit" sx={{ color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
