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
    <Stack sx={{ flexDirection: { xs: "column", md: "row" }, width: "100%" }}>
      <Box
        sx={{
          width: { xs: "100%", md: "240px" },
          height: { xs: "auto", md: "92vh" },
          px: { xs: 0, md: 2 },
          mb: { xs: 1, md: 0 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={handleCategoryChange}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            mt: 1.5,

            color: "#aaa",
            fontSize: "0.85rem",
            textAlign: "center",
            letterSpacing: "0.5px",
          }}
        >
          © {new Date().getFullYear()} StreamJAM. All rights reserved.
        </Typography>
      </Box>

      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: { xs: "auto", md: "90vh" },
          flex: 2,
          width: "100%",
        }}
      >
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
