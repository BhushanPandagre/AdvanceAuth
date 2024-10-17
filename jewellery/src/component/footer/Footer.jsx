import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Divider sx={{ backgroundColor: "darkgrey" }} />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        py={2}
        bgcolor="primary.main" // Change to your desired color
      >
        <Typography variant="body2" color="white">
          All Rights Reserved. &copy; 2024
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
