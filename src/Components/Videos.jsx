import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction }) => {
  if (!videos || !Array.isArray(videos))
    return <div>No videos found or maybe loading.</div>;

  return (
    <Stack
      direction={{ xs: "column", sm: direction || "row" }}
      flexWrap={{ xs: "nowrap", sm: "wrap" }}
      justifyContent="start"
      gap={2}
      width="100%"
    >
      {videos.map((item, index) => {
        const isVideo = item.id?.videoId;
        const isChannel = item.id?.channelId;

        return (
          <Box key={index}>
            {isVideo && <VideoCard video={item} />}
            {isChannel && <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
