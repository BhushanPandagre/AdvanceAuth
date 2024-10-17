import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { BsCheck2All } from "react-icons/bs";
import { TiUserAddOutline } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  TextField,
  Button,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import PasswordInput from "../passwordInput/PasswordInput";

import { toast } from "react-toastify";
import { validateEmail } from "../../redux/features/auth/authService";

import { useDispatch, useSelector } from "react-redux";

import {
  register,
  RESET,
  sendVerificationEmail,
} from "../../redux/features/auth/authSlice";

import Loader from "../../component/loader/Loader";

const defaultTheme = createTheme();

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

const SignUp = () => {
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, password2 } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isLoggedIn, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [uCase, setUCase] = useState(false);
  const [num, setNum] = useState(false);
  const [sChar, setSChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const timesIcon = <FaTimes color="red" size={15} />;
  const checkIcon = <BsCheck2All color="green" size={15} />;

  const switchIcon = (condition) => {
    if (condition) {
      return checkIcon;
    }
    return timesIcon;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    // Check Lower and Uppercase
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setUCase(true);
    } else {
      setUCase(false);
    }
    // Check for numbers
    if (password.match(/([0-9])/)) {
      setNum(true);
    } else {
      setNum(false);
    }
    // Check for special character
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setSChar(true);
    } else {
      setSChar(false);
    }
    // Check for PASSWORD LENGTH
    if (password.length > 5) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }
  }, [password]);

  const registerUser = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return toast.error("All fields are required");
    }
    if (password.length < 6) {
      return toast.error("Password must be up to 6 characters");
    }
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }
    if (password !== password2) {
      return toast.error("Passwords do not match");
    }

    const userData = {
      name,
      email,
      password,
    };

    console.log(userData);
    await dispatch(register(userData));
    await dispatch(sendVerificationEmail());
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/login");
    }

    dispatch(RESET());
  }, [isLoggedIn, isSuccess, dispatch, navigate]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {isLoading && <Loader />}
        <Box
          sx={{
            border: "1px solid #ccc",
            borderRadius: 2,
            padding: 3,
            mt: 8,
            maxHeight: "90vh", // Adjust this value as needed
            overflow: "hidden", // Prevent scrollbar
          }}
        >
          <Box textAlign="center">
            <Typography variant="h5">Register</Typography>
          </Box>
          <Box component="form" onSubmit={registerUser} sx={{ mt: 1 }}>
            <div className="col-xl-12 ">
              <TextField
                fullWidth
                // margin="normal"
                label="Name"
                required
                name="name"
                value={name}
                onChange={handleInputChange}
                size="small"
              />
            </div>

            <div className="col-xl-12">
              <TextField
                fullWidth
                margin="normal"
                label="Email"
                type="email"
                required
                name="email"
                value={email}
                onChange={handleInputChange}
                size="small"
              />
            </div>

            <div className="col-xl-12 mt-2">
              <PasswordInput
                label="Password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-xl-12 mt-2">
              <PasswordInput
                label="Confirm Password"
                name="password2"
                value={password2}
                onChange={handleInputChange}
                onPaste={(e) => {
                  e.preventDefault();
                  toast.error("Cannot paste into input field");
                }}
                size="small"
              />
            </div>

            {/* Password Strength */}

            <Card variant="outlined" sx={{ marginTop: 1, padding: 1 }}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    {uCase ? (
                      <BsCheck2All color="green" />
                    ) : (
                      <FaTimes color="red" />
                    )}
                  </ListItemIcon>
                  <ListItemText primary="Lowercase & Uppercase" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    {num ? (
                      <BsCheck2All color="green" />
                    ) : (
                      <FaTimes color="red" />
                    )}
                  </ListItemIcon>
                  <ListItemText primary="Number (0-9)" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    {sChar ? (
                      <BsCheck2All color="green" />
                    ) : (
                      <FaTimes color="red" />
                    )}
                  </ListItemIcon>
                  <ListItemText primary="Special Character (!@#$%^&*)" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    {passLength ? (
                      <BsCheck2All color="green" />
                    ) : (
                      <FaTimes color="red" />
                    )}
                  </ListItemIcon>
                  <ListItemText primary="At least 6 Characters" />
                </ListItem>
              </List>
            </Card>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ marginTop: 1 }}
            >
              Register
            </Button>
          </Box>

          <Box textAlign="center" marginTop={2}>
            <Link to="/">Home</Link>
            <Typography component="span">
              {" "}
              &nbsp; Already have an account? &nbsp;
            </Typography>
            <Link to="/login">Login</Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
