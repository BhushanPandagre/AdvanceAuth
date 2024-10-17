import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CircularProgress, Button, Typography, Box } from "@mui/material";

import { RESET, verifyUser } from "../../redux/features/auth/authSlice";

const Verify = () => {
  const dispatch = useDispatch();
  const { verificationToken } = useParams();
  const { isLoading } = useSelector((state) => state.auth);

  const verifyAccount = async () => {
    await dispatch(verifyUser(verificationToken));
    await dispatch(RESET());
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      {isLoading && <CircularProgress />}
      <Typography variant="h4" gutterBottom>
        Account Verification
      </Typography>
      <Typography variant="body1" gutterBottom>
        To verify your account, click the button below...
      </Typography>
      <Button
        onClick={verifyAccount}
        variant="contained"
        color="primary"
        disabled={isLoading}
      >
        Verify Account
      </Button>
    </Box>
  );
};

export default Verify;
