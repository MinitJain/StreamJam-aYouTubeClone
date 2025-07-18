import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import fetchFromAPI from "../utils/fetchFromAPI";
import Videos from "./Videos";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data?.items?.[0])
    );

    // 🔧 FIXED: Instead of using relatedToVideoId (which is deprecated),
    // we'll fetch videos from the same channel
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      const video = data?.items?.[0];
      if (video?.snippet?.channelId) {
        // Fetch other videos from the same channel
        fetchFromAPI(
          `search?part=snippet&channelId=${video.snippet.channelId}&type=video&maxResults=20`
        )
          .then((channelData) => {
            // Filter out the current video from the results
            const relatedVideos =
              channelData?.items?.filter((item) => item.id?.videoId !== id) ||
              [];
            setVideos(relatedVideos);
          })
          .catch((error) => {
            console.error("Error fetching related videos:", error);
            // Fallback: fetch popular videos instead
            fetchFromAPI(
              `search?part=snippet&q=popular&type=video&maxResults=20`
            )
              .then((fallbackData) => setVideos(fallbackData?.items || []))
              .catch(() => setVideos([]));
          });
      }
    });
  }, [id]);

  if (!videoDetail?.snippet)
    return <div style={{ color: "white" }}>Loading...</div>;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount, commentCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" mt={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "fff" }}
              py={1}
              px={2}
            >
              <Link to={`/Channel/${channelId}`}>
                <Typography
                  variant="subtitle1"
                  sx={{ xs: "14px", sm: "16px", md: "18px" }}
                  color="white"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack
                direction="row"
                alignItems="center"
                gap="20px"
                color="gray"
                mt={1}
              >
                <Typography variant="body1" sx={{ opacity: 1 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 1 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
                <Typography variant="body1" sx={{ opacity: 1 }}>
                  {parseInt(commentCount).toLocaleString()} comments
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Typography variant="body1" px={2} sx={{ opacity: 0.8 }}>
          Related Videos
        </Typography>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          {!videos ? (
            <Typography color="white">Loading related videos...</Typography>
          ) : (
            <Videos videos={videos} direction="column" />
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
