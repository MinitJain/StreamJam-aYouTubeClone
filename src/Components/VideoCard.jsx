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

const VideoCard = ({ video }) => {
  console.log(video);
  const videoId = video?.id?.videoId;
  const ChannelId = video?.snippet?.channelId;
  console.log(videoId);

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
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {video?.snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={ChannelId ? `/Channel/${ChannelId}` : demoChannelUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {video?.snippet?.channelTitle || demoChannelTitle}
            <CheckCircle
              sx={{
                fontsize: 10,
                color: "gray",
                ml: "5px",
                verticalAlign: "middle",
              }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
