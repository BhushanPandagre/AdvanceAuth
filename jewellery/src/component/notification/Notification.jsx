import React from "react";
import { useDispatch } from "react-redux";
import {
  RESET,
  sendVerificationEmail,
} from "../../redux/features/auth/authSlice";

// Import MUI Components
import { Container, Alert, Typography, Button } from "@mui/material";

const Notification = () => {
  const dispatch = useDispatch();

  const sendVerEmail = async () => {
    await dispatch(sendVerificationEmail());
    await dispatch(RESET());
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Alert severity="info" sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="body1" sx={{ flexGrow: 1 }}>
          <b>Message:</b> To verify your account, check your email for a
          verification link.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={sendVerEmail}
          sx={{ ml: 2 }}
        >
          Resend Link
        </Button>
      </Alert>
    </Container>
  );
};

export default Notification;
