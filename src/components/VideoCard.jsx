import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import {
   demoThumbnailUrl,
   demoVideoUrl,
   demoVideoTitle,
   demoChannelUrl,
   demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({ video }) => {
   const {
      id: { videoId },
      snippet,
   } = video;

   return (
      <Card
         sx={{
            width: { sm: "250px", xs: "100%" },
            boxShadow: "none",
            borderRadius: 0,
         }}
      >
         <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia
               alt={snippet?.title}
               sx={{
                  width: 358,
                  height: 180,
               }}
               image={snippet?.thumbnails?.high?.url}
            />
         </Link>
         <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
               <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                  {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
               </Typography>
            </Link>
            <Link
               to={
                  snippet?.channelId
                     ? `/channel/${snippet?.channelId}`
                     : demoChannelUrl
               }
            >
               <Typography variant="subtitle2" fontWeight="bold" color="gray">
                  {snippet?.channelTitle || demoChannelTitle}
                  <CheckCircle
                     sx={{ fontSize: 12, color: "gray", ml: "5px" }}
                  />
               </Typography>
            </Link>
         </CardContent>
      </Card>
   );
};

export default VideoCard;
