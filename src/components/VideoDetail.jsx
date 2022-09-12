import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { Video } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
   const { id } = useParams();
   const [videoDetail, setVideoDetail] = useState(null);

   useEffect(() => {
      fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
         setVideoDetail(data.items[0])
      );
   }, [id]);

   if (!videoDetail) return;

   const {
      snippet: { channelId, channelTitle, title },
      statistics: { likeCount, viewCount },
   } = videoDetail;

   return (
      <Box minHeight="95vh">
         <Stack direcction={{ xs: "column", md: "row" }}>
            <Box flex={1}>
               <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
                  <ReactPlayer
                     url={`https://www.youtube.com/watch?v=${id}`}
                     className="react-playaer"
                     controls
                  />
                  <Typography color="#fff" variant="h5" fontWeight="bold">
                     {title}
                  </Typography>
               </Box>
            </Box>
         </Stack>
      </Box>
   );
};

export default VideoDetail;
