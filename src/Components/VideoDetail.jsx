// File: src/components/VideoDetail.jsx

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box } from "@mui/material";

import fetchFromAPI from "../utils/fetchFromAPI";
import Videos from "./Videos";

const VideoDetail = () => {
  const { id } = useParams(); // Get video ID from URL
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    // Fetch video details (title, stats, etc.)
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data?.items?.[0])
    );

    // Fetch related videos
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setRelatedVideos(data?.items || [])
    );
  }, [id]);

  if (!videoDetail?.snippet)
    return <div style={{ color: "white" }}>Loading...</div>;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box
      minHeight="95vh"
      px={2}
      py={1}
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
    >
      {/* Video Player Section */}
      <Box flex={1} pr={{ md: 2 }}>
        <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
            width="100%"
            height="400px"
          />
          <Typography color="#fff" variant="h5" fontWeight="bold" mt={2}>
            {title}
          </Typography>
          <Typography variant="subtitle1" color="gray" mt={1}>
            <a
              href={`/Channel/${channelId}`}
              style={{ color: "#aaa", fontWeight: 600 }}
            >
              {channelTitle}
            </a>
          </Typography>
          <Typography variant="body2" color="gray" mt={1}>
            {parseInt(viewCount).toLocaleString()} views •{" "}
            {parseInt(likeCount).toLocaleString()} likes
          </Typography>
        </Box>
      </Box>

      {/* Related Videos Section */}
      <Box flex={1}>
        <Typography variant="h6" fontWeight="bold" color="#fff" mb={2}>
          Related Videos
        </Typography>
        <Videos videos={relatedVideos} />
      </Box>
    </Box>
  );
};

export default VideoDetail;
