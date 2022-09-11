import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "./components";

const Feed = () => {
   return (
      <Stack
         sx={{
            flexDirection: {
               xs: "column",
               md: "row",
            },
         }}
      >
         <Box
            sx={{
               height: { xs: "auto", md: "92vh" },
               borderRight: "1px solid #3d3d3d",
               px: { xs: 0, md: 2 },
            }}
         >
            <SideBar />
            <Typography
               className="copyrigth"
               variant="body2"
               sx={{ mt: 1.5, color: "#fff" }}
            >
               Copyright 2002 JSM Media
            </Typography>
         </Box>
         <Box
            p={2}
            sx={{
               overflowY: "auto",
               height: "90vh",
               flex: 2,
            }}
         >
            <Typography
               variant="h4"
               fontWeight="bold"
               mb={2}
               sx={{ color: "white" }}
            >
               New <span style={{ color: "#f31503" }}>videos</span>
            </Typography>
            <Videos />
         </Box>
      </Stack>
   );
};

export default Feed;
