import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import fetchFromAPI from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  console.log(channel, videos);

  useEffect(() => {
    fetchFromAPI(
      `channels?part=snippet,statistics,brandingSettings&id=${id}`
    ).then((data) => setChannel(data?.items?.[0]));

    fetchFromAPI(
      `search?part=snippet&channelId=${id}&order=date&maxResults=20`
    ).then((data) => setVideos(data?.items || []));
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 238, 247, 1) 0%, rgba(206, 3, 184, 1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />

        <ChannelCard channelDetail={channel} marginTop="-110px" />
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
