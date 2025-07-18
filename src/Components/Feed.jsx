import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import SideBar from "./SideBar";
import Videos from "./Videos";
import FetchFromAPI from "../utils/fetchFromAPI";

const Feed = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const categoryFromURL = searchParams.get("category");
    if (categoryFromURL) {
      setSelectedCategory(categoryFromURL);
    } else {
      setSelectedCategory("New");
      setSearchParams({ category: "New" });
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    FetchFromAPI(
      `search?part=snippet&q=${selectedCategory}&type=video&maxResults=20`
    ).then((data) => {
      console.log(data);
      setVideos(data?.items || []);
    });
  }, [selectedCategory]);

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
    setSearchParams({ category: newCategory });
  };

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },

          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={handleCategoryChange}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#ffff" }}
        >
          copyright@2025 Minit
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "white",
          }}
        >
          {/* {selectedCategory}
          <span style={{ color: "#ff0027" }}> videos </span> */}
        </Typography>
        <Videos videos={videos} stripHashtags={false} />
      </Box>
    </Stack>
  );
};

export default Feed;
