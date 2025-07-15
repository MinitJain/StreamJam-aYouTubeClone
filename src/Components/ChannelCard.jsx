import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import {
  demoProfilePicture,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const ChannelCard = ({ ChannelDetail }) => {
  const channelId = ChannelDetail?.id?.channelId || ChannelDetail?.id;
  const title = ChannelDetail?.snippet?.title || demoChannelTitle;
  const image =
    ChannelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture;
  const subscriberCount = ChannelDetail?.statistics?.subscriberCount;

  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
      }}
    >
      <Link to={`/channel/${channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={image}
            alt={title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {title}{" "}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>
          {subscriberCount && (
            <Typography variant="subtitle2" sx={{ color: "gray" }}>
              {parseInt(subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
