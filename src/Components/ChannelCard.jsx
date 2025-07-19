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
        width: { xs: "100%", sm: "356px", md: "320px" },
        minWidth: 0,
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
          width: { xs: "100%", sm: "356px", md: "320px" },
          height: { xs: "auto", sm: "326px" },
          textAlign: "center",
          p: { xs: 1, sm: 0 },
        }}
      >
        <Link
          to={`/Channel/${channelDetail?.id?.channelId || channelDetail?.id}`}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              width: "100%",
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
                height: { xs: "120px", sm: "180px" },
                width: { xs: "120px", sm: "180px" },
                mb: 2,
                border: "1px solid #e3e3e3",
                objectFit: "cover",
              }}
            />
            <Typography
              variant="h6"
              fontWeight="bold"
              color="white"
              sx={{
                maxWidth: "90%",
                overflowWrap: "break-word",
                fontSize: { xs: "1rem", sm: "1.1rem" },
              }}
            >
              {channelDetail?.snippet?.title}
              <CheckCircle
                sx={{
                  fontSize: { xs: "12px", sm: "14px" },
                  color: "gray",
                  ml: "5px",
                }}
              />
            </Typography>

            {channelDetail?.statistics?.subscriberCount && (
              <Typography
                sx={{
                  fontSize: { xs: "0.95rem", sm: "1rem" },
                  fontWeight: 500,
                  color: "gray",
                }}
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
