import React, { useEffect, useState } from "react";
import { GrInsecure } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

// MUI Components
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Grid,
} from "@mui/material";

import Loader from "../loader/Loader";
import {
  loginWithCode,
  RESET,
  sendLoginCode,
} from "../../redux/features/auth/authSlice";

const LoginWithCode = () => {
  const [loginCode, setLoginCode] = useState("");
  const { email } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isLoggedIn, isSuccess } = useSelector(
    (state) => state.auth
  );

  const sendUserLoginCode = async () => {
    await dispatch(sendLoginCode(email));
    await dispatch(RESET());
  };

  const loginUserWithCode = async (e) => {
    e.preventDefault();

    if (loginCode === "") {
      return toast.error("Please fill in the login code");
    }
    if (loginCode.length !== 6) {
      return toast.error("Access code must be 6 characters");
    }

    const code = {
      loginCode,
    };

    await dispatch(loginWithCode({ code, email }));
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/profile");
    }

    dispatch(RESET());
  }, [isLoggedIn, isSuccess, dispatch, navigate]);

  return (
    <Container maxWidth="sm">
      {isLoading && <Loader />}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 8,
          padding: 4,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <GrInsecure size={35} color="#999" />
        </Box>
        <Typography component="h2" variant="h5">
          Enter Access Code
        </Typography>

        <form onSubmit={loginUserWithCode} style={{ width: "100%" }}>
          <TextField
            label="Access Code"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            name="loginCode"
            value={loginCode}
            onChange={(e) => setLoginCode(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, mb: 2 }}
          >
            {isLoading ? <CircularProgress size={24} /> : "Proceed To Login"}
          </Button>

          <Typography variant="body2" align="center" color="textSecondary">
            Check your email for login access code
          </Typography>

          <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
            <Grid item>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body2" color="primary">
                  - Home
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                color="primary"
                sx={{ cursor: "pointer" }}
                onClick={sendUserLoginCode}
              >
                <b>Resend Code</b>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default LoginWithCode;
