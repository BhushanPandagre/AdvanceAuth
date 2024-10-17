import React from "react";
import { Card, CardContent, Typography, Icon } from "@mui/material";
import { styled } from "@mui/system";

// Styled component for InfoBox
const InfoBoxContainer = styled(Card)(({ theme, bgColor }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1), // Reduced padding for smaller box
  borderRadius: 8,
  backgroundColor: bgColor,
  width: "250px", // Set a smaller fixed width
  margin: theme.spacing(1), // Add some margin between cards
  height: "90px", // Set a smaller height
}));

const IconStyled = styled(Icon)(({ theme }) => ({
  fontSize: "3rem", // Reduced icon size
  marginRight: theme.spacing(1),
}));

const TitleStyled = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "0.9rem", // Reduced title font size
}));

const InfoBox = ({ bgColor, title, count, icon }) => {
  return (
    <InfoBoxContainer bgColor={bgColor}>
      <CardContent style={{ display: "flex", alignItems: "center" }}>
        <IconStyled>{icon}</IconStyled>
        <div>
          <TitleStyled variant="body2">{title}</TitleStyled>
          <Typography variant="h6" style={{ fontSize: "1rem" }}>
            {" "}
            {/* Reduced font size */}
            {count}
          </Typography>
        </div>
      </CardContent>
    </InfoBoxContainer>
  );
};

export default InfoBox;
