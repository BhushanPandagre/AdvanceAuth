import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

// import { AdminAuthorLink } from "../protect/hiddenLink";

const PageMenu = () => {
  return (
    <AppBar position="static" color="secondary" sx={{ marginTop: 6 }}>
      <Toolbar
        sx={{ maxWidth: 600, margin: "0 auto", justifyContent: "center" }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button component={NavLink} to="/profile" color="inherit">
            Profile
          </Button>
          <Button component={NavLink} to="/changePassword" color="inherit">
            Change Password
          </Button>
          {/* <AdminAuthorLink> */}
            <Button component={NavLink} to="/users" color="inherit">
              Users
            </Button>
          {/* </AdminAuthorLink> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default PageMenu;
