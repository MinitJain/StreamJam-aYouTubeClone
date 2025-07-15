// File: src/components/SearchFeed.jsx

import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import FetchFromAPI from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    FetchFromAPI(
      `search?part=snippet&q=${searchTerm}&type=video&maxResults=20`
    ).then((data) => {
      setVideos(data?.items || []);
    });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for:
        <span style={{ color: "#ff0027" }}> {searchTerm} </span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

// ✅ Fixed incorrect export name
export default SearchFeed;
