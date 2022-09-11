import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
   return (
      <Stack
         direction="row"
         sx={{
            overflowY: "auto",
            height: { xs: "auto", md: "85%" },
            flexDirection: { md: "column" },
         }}
      >
         {categories.map((category) => (
            <button
               key={category.name}
               className="category-btn"
               style={{
                  background: category.name === selectedCategory && "#fc1503",
                  color: "white",
               }}
               onClick={() => setSelectedCategory(category.name)}
            >
               <span
                  style={{
                     color:
                        category.name === selectedCategory ? "white" : "red",
                     marginRight: "15px",
                  }}
               >
                  {category.icon}
               </span>
               <span
                  style={{ opacity: category.selectedCategory ? "1" : "0.8" }}
               >
                  {category.name}
               </span>
            </button>
         ))}
      </Stack>
   );
};

export default SideBar;
