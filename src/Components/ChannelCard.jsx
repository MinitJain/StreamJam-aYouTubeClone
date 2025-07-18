import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        marginTop,
        width: "100%", // spans full width for centering
      }}
    >
      <Box
        sx={{
          boxShadow: "none",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: { xs: "356px", md: "320px" },
          height: "326px",
          textAlign: "center",
        }}
      >
        <Link
          to={`/Channel/${channelDetail?.id?.channelId || channelDetail?.id}`}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // centers everything
              justifyContent: "center",
              color: "#fff",
            }}
          >
            <CardMedia
              image={
                channelDetail?.snippet?.thumbnails?.high?.url ||
                demoProfilePicture
              }
              alt={channelDetail?.snippet?.title}
              sx={{
                borderRadius: "50%",
                height: "180px",
                width: "180px",
                mb: 2,
                border: "1px solid #e3e3e3",
              }}
            />
            <Typography
              variant="h6"
              fontWeight="bold"
              color="white"
              sx={{ maxWidth: "90%", overflowWrap: "break-word" }}
            >
              {channelDetail?.snippet?.title}
              <CheckCircle
                sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
              />
            </Typography>

            {channelDetail?.statistics?.subscriberCount && (
              <Typography
                sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
              >
                {parseInt(
                  channelDetail?.statistics?.subscriberCount
                ).toLocaleString("en-US")}{" "}
                Subscribers
              </Typography>
            )}
          </CardContent>
        </Link>
      </Box>
    </Box>
  );
};

export default ChannelCard;
