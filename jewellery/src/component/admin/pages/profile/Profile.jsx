import React, { useEffect, useLayoutEffect, useState } from "react";

import profileImage from "../../../../assets/img/userLogo.jpg";

import UserLogo from "../../../../assets/img/download.jfif";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";

import useRedirectLoggedOutUser from "../../../../customHook/useRedirectLoggedOutUser";
import { useDispatch, useSelector } from "react-redux";

import {
  getUser,
  selectUser,
  updateUser,
} from "../../../../redux/features/auth/authSlice";

import Loader from "../../../loader/Loader";
import { toast } from "react-toastify";

import PageMenu from "../../../pageMenu/PageMenu";

import Notification from "../../../../component/notification/Notification";

const cloud_name = import.meta.env.VITE_APP_CLOUD_NAME;
const upload_preset = import.meta.env.VITE_APP_UPLOAD_PRESET;

export const shortenText = (text, n) => {
  return text.length > n ? text.substring(0, n).concat("...") : text;
};

const Profile = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((state) => state.auth);

  const initialState = {
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    bio: user?.bio || "",
    photo: user?.photo || "",
    role: user?.role || "",
    isVerified: user?.isVerified || false,
  };

  const [profile, setProfile] = useState(initialState);
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const saveProfile = async (e) => {
    e.preventDefault();
    let imageURL;
    try {
      if (
        profileImage &&
        (profileImage.type === "image/jpeg" ||
          profileImage.type === "image/jpg" ||
          profileImage.type === "image/png")
      ) {
        const image = new FormData();
        image.append("file", profileImage);
         image.append("cloud_name", cloud_name);
        image.append("upload_preset", upload_preset);

        // Save image to Cloudinary
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/djogbntnb/image/upload",
          { method: "post", body: image }
        );
        const imgData = await response.json();
        imageURL = imgData.url.toString();
      }

      // Save profile to MongoDB
      const userData = {
        name: profile.name,
        phone: profile.phone,
        bio: profile.bio,
        photo: profileImage ? imageURL : profile.photo,
      };

      dispatch(updateUser(userData));
    } catch (error) {
      toast.error(error.message);
    }
  };

  useLayoutEffect(() => {
    if (user) {
      setProfile({
        ...profile,
        name: user.name,
        email: user.email,
        phone: user.phone,
        photo: user.photo,
        bio: user.bio,
        role: user.role,
        isVerified: user.isVerified,
      });
    }
  }, [user]);

  return (
    <Box component="section" sx={{ padding: 3 }}>
      {isLoading && <Loader />}
      {!profile.isVerified && <Notification />}
      <div className="container">
        <PageMenu />
        <Typography variant="h4" display="flex" justifyContent="center">
          Profile
        </Typography>
        <Box display="flex" justifyContent="center">
          <Card
            variant="outlined"
            sx={{ padding: 3, width: "100%", maxWidth: 600 }}
          >
            <CardContent>
              {!isLoading && user && (
                <>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <img
                      src={imagePreview || user?.photo || profileImage}
                      alt="Profile"
                      style={{
                        borderRadius: "50%",
                        width: "150px",
                        height: "150px",
                      }}
                    />
                    <Typography variant="h6">Role: {profile.role}</Typography>
                  </Box>
                  <form onSubmit={saveProfile}>
                    <Box sx={{ marginTop: 2 }}>
                      <Typography variant="body1">Change Photo:</Typography>
                      <input
                        type="file"
                        accept="image/*"
                        name="image"
                        onChange={handleImageChange}
                      />
                    </Box>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={profile?.name}
                      onChange={handleInputChange}
                      sx={{ marginTop: 2 }}
                      size="small"
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      value={profile?.email}
                      onChange={handleInputChange}
                      disabled
                      sx={{ marginTop: 2 }}
                      size="small"
                    />
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={profile?.phone}
                      onChange={handleInputChange}
                      sx={{ marginTop: 2 }}
                      size="small"
                    />
                    <TextField
                      fullWidth
                      label="Bio"
                      name="bio"
                      value={profile?.bio}
                      onChange={handleInputChange}
                      multiline
                      rows={4}
                      sx={{ marginTop: 2 }}
                      size="small"
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{ marginTop: 2, width: "100%" }}
                    >
                      Update Profile
                    </Button>
                  </form>
                </>
              )}
            </CardContent>
          </Card>
        </Box>
      </div>
    </Box>
  );
};

export const UserName = () => {
  const user = useSelector(selectUser);
  const username = user?.name || "...";
  return <p className="--color-white">Hi, {shortenText(username, 9)} |</p>;
};

export default Profile;

