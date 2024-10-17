//========================================================//

import React from "react";
import ReactDOM from "react-dom";
import loaderImg from "../../assets/img/loader.gif";
import { Box } from "@mui/material"; // Import Material-UI's Box

const Loader = () => {
  const loaderElement = document.getElementById("loader");

  if (!loaderElement) {
    // If the #loader div doesn't exist, don't render the portal
    return null;
  }

  return ReactDOM.createPortal(
    <Box
      sx={{
        position: "fixed", // Ensure the loader is fixed on the screen
        top: 0,
        left: 0,
        width: "100vw", // Full width and height
        height: "100vh",
        display: "flex", // Use flexbox for centering
        alignItems: "center", // Vertically center
        justifyContent: "center", // Horizontally center
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Optional: light overlay background
        zIndex: 1300, // Ensure it's on top of other elements
      }}
    >
      <img src={loaderImg} alt="Loading..." style={{ width: "100px" }} />
    </Box>,
    loaderElement
  );
};

export const Spinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Make sure spinner is centered in the viewport
      }}
    >
      <img src={loaderImg} alt="Loading..." style={{ width: "100px" }} />
    </Box>
  );
};

export default Loader;
