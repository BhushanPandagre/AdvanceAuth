// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// import DeleteIcon from "@mui/icons-material/Delete";
// // import Tooltip from "@mui/material/Tooltip";

// import { styled } from "@mui/material/styles";
// import MuiDrawer from "@mui/material/Drawer";
// import MuiAppBar from "@mui/material/AppBar";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Grid from "@mui/material/Grid";

// import { Link } from "react-router-dom";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Backdrop from "@mui/material/Backdrop";
// import Modal from "@mui/material/Modal";
// import Fade from "@mui/material/Fade";
// import Button from "@mui/material/Button";

// import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Stack from "@mui/material/Stack";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// import {
//   FormControl,
//   InputLabel,
//   Select,
//   IconButton,
//   TableSortLabel,
// } from "@mui/material";
// import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
// import AddIcon from "@mui/icons-material/Add";
// import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";

// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Header from "../../../schema/Header";
// import { keyframes } from "@mui/system";
// import { FaRegSmileWink } from "react-icons/fa";

// import { Card, CardContent, Grow } from "@mui/material";

// import PersonIcon from "@mui/icons-material/Person";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import StoreIcon from "@mui/icons-material/Store";
// import WorkIcon from "@mui/icons-material/Work";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

// const blue = {
//   100: "#DAECFF",
//   200: "#b6daff",
//   400: "#3399FF",
//   500: "#007FFF",
//   600: "#0072E5",
//   900: "#003A75",
// };

// const grey = {
//   50: "#F3F6F9",
//   100: "#E5EAF2",
//   200: "#DAE2ED",
//   300: "#C7D0DD",
//   400: "#B0B8C4",
//   500: "#9DA8B7",
//   600: "#6B7A90",
//   700: "#434D5B",
//   800: "#303740",
//   900: "#1C2025",
// };

// const Textarea = styled(BaseTextareaAutosize)(
//   ({ theme }) => `
//     box-sizing: border-box;
//     width: 320px;
//     font-family: 'IBM Plex Sans', sans-serif;
//     font-size: 0.875rem;
//     font-weight: 400;
//     line-height: 1.5;
//     padding: 8px 12px;
//     border-radius: 8px;
//     color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
//     background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
//     border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
//     box-shadow: 0px 2px 2px ${
//       theme.palette.mode === "dark" ? grey[900] : grey[50]
//     };

//     &:hover {
//       border-color: ${blue[400]};
//     }

//     &:focus {
//       border-color: ${blue[400]};
//       box-shadow: 0 0 0 3px ${
//         theme.palette.mode === "dark" ? blue[600] : blue[200]
//       };
//     }

//     // firefox
//     &:focus-visible {
//       outline: 0;
//     }
//   `
// );

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
// }));

// const bounceAnimation = keyframes`
//   0%, 20%, 50%, 80%, 100% {
//     transform: translateY(0);
//   }
//   40% {
//     transform: translateY(-10px);
//   }
//   60% {
//     transform: translateY(-5px);
//   }
// `;

// import {
//   PieChart,
//   Tooltip,
//   Pie,
//   Cell,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import Footer from "../../../footer/Footer";

// // import { styled } from '@mui/system';

// const COLORS = [
//   "#0088FE",
//   "#00C49F",
//   "#FFBB28",
//   "#FF8042",
//   "#FF6347",
//   "#6A5ACD",
// ];

// // Blinking text animation
// const BlinkingText = styled(Typography)`
//   // animation: blinker 1.5s linear infinite;
//   // @keyframes blinker {
//   //   50% {
//   //     opacity: 0;
//   //   }
//   // }
// `;

// const Home = () => {
//   return (
//     <>
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-xl-12 mb-3">
//             <Box sx={{ display: "flex" }}>
//               <CssBaseline />
//               <Header />
//               <Box component="main" sx={{ flexGrow: 1 }}>
//                 <DrawerHeader />
//                 <div className="container-fluid">
//                   <div className="row">
//                     <div className="col-xl-12 mt-0 mb-1">
//                       <Grid item xs={12}>
//                         <Box
//                           display="flex"
//                           justifyContent="left"
//                           alignItems="left"
//                           sx={{ padding: 2 }}
//                         >
//                           <FaRegSmileWink
//                             style={{
//                               marginRight: "8px",
//                               color: "orange",
//                               fontSize: "24px",
//                               animation: `${bounceAnimation} 2s infinite`,
//                             }}
//                           />
//                           <BlinkingText
//                             variant="h6"
//                             className="fw-bold text-secondary"
//                           >
//                             Welcome to Home Page
//                           </BlinkingText>
//                         </Box>
//                       </Grid>
//                     </div>
//                   </div>

//                   <div className="row mt-2">
//                     <div className="col-xl-12">
//                       <Grid container spacing={3}></Grid>
//                     </div>
//                   </div>
//                 </div>
//               </Box>
//             </Box>
//             <Footer />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

//===================================working ===============================//

// import React from "react";

// import Footer from "../../../footer/Footer";

// import Header from "../../../schema/Header";

// import loginImg from "../../../../assets/img/login.svg";

// import { Link } from "react-router-dom";
// import { Box, Typography, Button, Grid } from "@mui/material";

// const Home = () => {
//   return (
//     <>
//       <Box sx={{ flexGrow: 1 }}>
//         <Header />
//         <Grid container spacing={3} sx={{ padding: 4 }}>
//           <Grid
//             item
//             xs={12}
//             md={6}
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//             }}
//           >
//             <Typography variant="h2">
//               Ultimate MERN Stack Authentication System
//             </Typography>
//             <Typography variant="body1" sx={{ marginBottom: 2 }}>
//               Learn and Master Authentication and Authorization using MERN
//               Stack.
//             </Typography>
//             <Typography variant="body1" sx={{ marginBottom: 4 }}>
//               Implement User Registration, Login, Password Reset, Social Login,
//               User Permissions, Email Notifications, etc.
//             </Typography>
//             <Box sx={{ display: "flex", gap: 2 }}>
//               <Button
//                 variant="contained"
//                 color="error"
//                 component={Link}
//                 to="/register"
//               >
//                 Register
//               </Button>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 component={Link}
//                 to="/login"
//               >
//                 Login
//               </Button>
//             </Box>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <img
//               src={loginImg}
//               alt="Auth"
//               style={{ width: "100%", height: "auto" }}
//             />
//           </Grid>
//         </Grid>
//         <Footer />
//       </Box>
//     </>
//   );
// };

// export default Home;

//====================================Final one =============================//

// import React from "react";
// import Footer from "../../../footer/Footer";
// import Header from "../../../schema/Header";
// import loginImg from "../../../../assets/img/login.svg";
// import { Link } from "react-router-dom";
// import { Box, Typography, Button, Grid, CssBaseline } from "@mui/material";

// const Home = () => {
//   return (
//     <>
//       <Box sx={{ display: "flex", flexGrow: 1 }}>
//         <CssBaseline />
//         <Header />
//         <Box component="main" sx={{ flexGrow: 1 }}>
//           <Grid container spacing={3} sx={{ padding: 4 }}>
//             <Grid
//               item
//               xs={12}
//               md={6}
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//               }}
//             >
//               <Typography variant="h3">
//                 Ultimate MERN Stack Authentication System
//               </Typography>
//               <Typography variant="body1" sx={{ marginBottom: 2 }}>
//                 Learn and Master Authentication and Authorization using MERN Stack.
//               </Typography>
//               <Typography variant="body1" sx={{ marginBottom: 4 }}>
//                 Implement User Registration, Login, Password Reset, Social Login,
//                 User Permissions, Email Notifications, etc.
//               </Typography>
//               <Box sx={{ display: "flex", gap: 2 }}>
//                 <Button
//                   variant="contained"
//                   color="error"
//                   component={Link}
//                   to="/sign_up"
//                 >
//                   Register
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   component={Link}
//                   to="/login"
//                 >
//                   Login
//                 </Button>
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <img
//                 src={loginImg}
//                 alt="Auth"
//                 style={{ width: "100%", height: "100%" }}
//               />
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//       <Footer />
//     </>
//   );
// };

// export default Home;

//====================================== New One 6/10/2024 =========================//

// import React from "react";
// import Footer from "../../../footer/Footer";
// import Header from "../../../schema/Header";
// import loginImg from "../../../../assets/img/login.svg";
// import { Link } from "react-router-dom";
// import { Box, Typography, Button, Grid, CssBaseline } from "@mui/material";

// const Home = () => {
//   return (
//     <>
//       <Box
//         sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
//       >
//         <CssBaseline />
//         <Header />
//         <Box
//           component="main"
//           sx={{
//             flexGrow: 1,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             padding: 4,
//           }}
//         >
//           <Grid
//             container
//             spacing={3}
//             sx={{ maxWidth: "1200px", width: "100%" }}
//           >
//             <Grid
//               item
//               xs={12}
//               md={6}
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//               }}
//             >
//               <Typography variant="h3">
//                 Ultimate MERN Stack Authentication System
//               </Typography>
//               <Typography variant="body1" sx={{ marginBottom: 2 }}>
//                 Learn and Master Authentication and Authorization using MERN
//                 Stack.
//               </Typography>
//               <Typography variant="body1" sx={{ marginBottom: 4 }}>
//                 Implement User Registration, Login, Password Reset, Social
//                 Login, User Permissions, Email Notifications, etc.
//               </Typography>
//               <Box sx={{ display: "flex", gap: 2 }}>
//                 <Button
//                   variant="contained"
//                   color="error"
//                   component={Link}
//                   to="/sign_up"
//                 >
//                   Register
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   component={Link}
//                   to="/login"
//                 >
//                   Login
//                 </Button>
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <img
//                 src={loginImg}
//                 alt="Auth"
//                 style={{ width: "100%", height: "auto" }}
//               />
//             </Grid>
//           </Grid>
//         </Box>
//         <Footer />
//       </Box>
//     </>
//   );
// };

// export default Home;

import React from "react";

import loginImg from "../../../../assets/img/login.svg";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Grid, CssBaseline } from "@mui/material";

const Home = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <CssBaseline />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 4,
          }}
        >
          <Grid
            container
            spacing={3}
            sx={{ maxWidth: "1200px", width: "100%" }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h3">
                Ultimate MERN Stack Authentication System
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 2 }}>
                Learn and Master Authentication and Authorization using MERN
                Stack.
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 4 }}>
                Implement User Registration, Login, Password Reset, Social
                Login, User Permissions, Email Notifications, etc.
              </Typography>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  color="error"
                  component={Link}
                  to="/sign_up"
                >
                  Register
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/login"
                >
                  Login
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src={loginImg}
                alt="Auth"
                style={{ width: "100%", height: "auto", marginTop: "30px" }} // Adjust margin as needed
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Home;
