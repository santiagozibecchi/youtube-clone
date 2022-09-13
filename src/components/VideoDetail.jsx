import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { CheckCircle } from "@mui/icons-material";

const VideoDetail = () => {
   const { id } = useParams();
   const [videoDetail, setVideoDetail] = useState(null);
   const [videos, setVideos] = useState(null);

   useEffect(() => {
      fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
         setVideoDetail(data.items[0])
      );

      fetchFromAPI(
         `search?part=snippet&relatedToVideoId=${id}&type=video`
      ).then((data) => setVideos(data.items));
   }, [id]);

   if (!videoDetail?.snippet) return "Loading...";

   const {
      snippet: { channelId, channelTitle, title },
      statistics: { likeCount, viewCount },
   } = videoDetail;

   return (
      <Box minHeight="95vh">
         <Stack direction={{ xs: "column", md: "row" }}>
            <Box flex={1} pl={2} sx={{ height: "500px" }}>
               <Box
                  sx={{
                     width: "100%",
                     position: "sticky",
                     top: "110px",
                  }}
               >
                  <ReactPlayer
                     url={`https://www.youtube.com/watch?v=${id}`}
                     className="react-player"
                     controls
                  />
                  <Typography color="#fff" variant="h5" fontWeight="bold">
                     {title}
                  </Typography>
                  <Stack
                     direction="row"
                     justifyContent="space-between"
                     color="#FFF"
                     py={1}
                     px={2}
                  >
                     <Link to={`/channel/${channelId}`}>
                        <Typography
                           varian={{ sm: "subtitle1", md: "h6" }}
                           color="#FFF"
                        >
                           {channelTitle}
                           <CheckCircle
                              sx={{
                                 fontSize: "12px",
                                 color: "gray",
                                 ml: "5px",
                              }}
                           />
                        </Typography>
                     </Link>
                     <Stack direction="row" gap="16px" alignItems="center">
                        <Typography variant="body1" sx={{ opacity: 0.7 }}>
                           {parseInt(viewCount).toLocaleString()} views
                        </Typography>
                        <Typography variant="body1" sx={{ opacity: 0.7 }}>
                           {parseInt(likeCount).toLocaleString()} views
                        </Typography>
                     </Stack>
                  </Stack>
               </Box>
            </Box>
            <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center">
               <Videos videos={videos} direction="column" />
            </Box>
         </Stack>
      </Box>
   );
};

export default VideoDetail;
