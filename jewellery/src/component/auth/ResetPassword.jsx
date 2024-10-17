import React, { useEffect, useState } from "react";
import { MdPassword } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Card, TextField, Button, Box, Typography } from "@mui/material";
import { RESET, resetPassword } from "../../redux/features/auth/authSlice";
import PasswordInput from "../passwordInput/PasswordInput";
import Loader from "../loader/Loader";

const initialState = {
  password: "",
  password2: "",
};

const ResetPassword = () => {
  const [formData, setFormData] = useState(initialState);
  const { password, password2 } = formData;
  const { resetToken } = useParams();

  const { isLoading, isSuccess, message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const reset = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      return toast.error("Password must be up to 6 characters");
    }
    if (password !== password2) {
      return toast.error("Passwords do not match");
    }

    const userData = {
      password,
    };

    await dispatch(resetPassword({ userData, resetToken }));
  };

  useEffect(() => {
    if (isSuccess && message.includes("Reset Successful")) {
      navigate("/login");
    }

    dispatch(RESET());
  }, [dispatch, navigate, message, isSuccess]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f7f7f7",
      }}
    >
      {isLoading && <Loader />}
      <Card sx={{ padding: 3, width: 400, boxShadow: 3 }}>
        <Box textAlign="center" mb={2}>
          <MdPassword size={40} color="#1976d2" />
        </Box>
        <Typography variant="h5" gutterBottom>
          Reset Password
        </Typography>

        <form onSubmit={reset}>
          <div className="col-xl-12 ">
            <PasswordInput
              label="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-xl-12 mt-3 ">
            <PasswordInput
              label="Confirm Password"
              name="password2"
              value={password2}
              onChange={handleInputChange}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Reset Password
          </Button>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
            <Typography variant="body2" sx={{ marginRight: 4 }}>
              <Link to="/">- Home</Link>
            </Typography>
            <Typography variant="body2" sx={{ marginRight: 4 }}>
              <Link to="/login">- Login</Link>
            </Typography>
          </Box>
        </form>
      </Card>
    </Box>
  );
};

export default ResetPassword;
