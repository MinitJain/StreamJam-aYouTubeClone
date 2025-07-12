import React from "react";
import { Stack, Box } from "@mui/material";

const Videos = ({ videos }) => {
  return (
    <Stack direction="" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoID && <VideoCard video={item} />}
          {item.id.channelID && <ChannelCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
