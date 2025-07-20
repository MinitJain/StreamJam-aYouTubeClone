import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import fetchFromAPI from "../utils/fetchFromAPI";
import Videos from "./Videos";
import CommentList from "./CommentList";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      const video = data?.items?.[0];
      setVideoDetail(video);

      if (video?.snippet?.channelId) {
        fetchFromAPI(
          `search?part=snippet&channelId=${video.snippet.channelId}&type=video&maxResults=20`
        )
          .then((channelData) => {
            const relatedVideos =
              channelData?.items?.filter((item) => item.id?.videoId !== id) ||
              [];
            setVideos(relatedVideos);
          })
          .catch((error) => {
            console.error("Error fetching related videos:", error);
            fetchFromAPI(
              `search?part=snippet&q=popular&type=video&maxResults=20`
            )
              .then((fallbackData) => setVideos(fallbackData?.items || []))
              .catch(() => setVideos([]));
          });

        fetchFromAPI(
          `commentThreads?part=snippet&videoId=${id}&maxResults=10`
        ).then((data) => setComments(data?.items || []));
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
    <Box minHeight="95vh" width="100%">
      <Stack direction={{ xs: "column", md: "row" }} width="100%">
        <Box flex={1} width={{ xs: "100%", md: "auto" }}>
          <Box
            sx={{
              width: "100%",
              position: { xs: "static", md: "sticky" },
              top: { md: "86px" },
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography
              color="#fff"
              variant="h5"
              fontWeight="bold"
              mt={2}
              sx={{
                fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                ml: { xs: 1, sm: 2, md: 3 },
              }}
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                color: "fff",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 1, sm: 0 },
              }}
              py={1}
              px={2}
            >
              <Link to={`/Channel/${channelId}`}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                    ml: { xs: 1, sm: 2, md: 3 },
                  }}
                  color="white"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{
                      fontSize: { xs: "12px", sm: "14px" },
                      color: "gray",
                      ml: "5px",
                    }}
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
              </Stack>
            </Stack>
          </Box>
          {/* Comment count heading and comments now inside main video area */}
          <Box
            px={{ xs: 1, sm: 2, md: 3 }}
            mt={4}
            maxWidth={{
              xs: "100%",
              md: "calc(100vw - 420px)",
              lg: "calc(100vw - 420px)",
            }}
            mx="auto"
            sx={{ textAlign: "left", ml: { xs: 0.5, sm: 1.5, md: 2.5 } }}
          >
            <Typography
              variant="h4"
              color="white"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" },
                mb: 2,
                textAlign: "left",
              }}
            >
              {parseInt(commentCount).toLocaleString()} Comments
            </Typography>
            <CommentList comments={comments} />
          </Box>
        </Box>
        <Box
          width={{ xs: "100%", md: "360px" }}
          px={2}
          py={{ md: 1, xs: 2 }}
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="body1"
            sx={{ opacity: 0.8, mb: 1, fontSize: { xs: "1rem", sm: "1.1rem" } }}
          >
            Related Videos
          </Typography>
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
