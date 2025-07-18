import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({ video, stripHashtags = true }) => {
  const videoId = video?.id?.videoId || video?.id;
  const channelId = video?.snippet?.channelId;

  const title = video?.snippet?.title || demoVideoTitle;
  const displayTitle = stripHashtags
    ? title
        .split(" ")
        .filter((word) => !word.startsWith("#"))
        .join(" ")
    : title;

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={video?.snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>

      <CardContent sx={{ backgroundColor: "black", height: "95px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {displayTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link to={channelId ? `/Channel/${channelId}` : demoChannelUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#858585">
            {video?.snippet?.channelTitle || demoChannelTitle}
            <CheckCircle
              sx={{
                color: "gray",
                ml: "5px",
                verticalAlign: "middle",
                fontSize: "14px",
              }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
