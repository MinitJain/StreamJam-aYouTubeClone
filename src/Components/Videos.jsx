// import React from "react";
// import { Stack, Box } from "@mui/material";
// import VideoCard from "./VideoCard";
// import ChannelCard from "./ChannelCard";

// const Videos = ({ videos }) => {
//   return (
//     <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
//       {videos.map((item, index) => (
//         <Box key={index}>
//           {item.id?.videoId && <VideoCard video={item} />}
//           {item.id?.channelId && <ChannelCard channelDetail={item} />}
//         </Box>
//       ))}
//     </Stack>
//   );
// };

// export default Videos;
import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos }) => {
  if (!videos || !Array.isArray(videos)) return <div>No videos found.</div>;

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, index) => {
        const video = item?.video;

        return (
          <Box key={index}>
            {video?.videoId && <VideoCard video={video} />}
            {video?.author?.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
