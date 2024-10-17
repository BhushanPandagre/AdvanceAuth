// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import Header from "./component/schema/Header";
// import Navbar from "./component/schema/Navbar";
// // import Sidebar from "./component/schema/Sidebar";
// import Login from "./component/auth/Login";
// // import SignUp from "./component/auth/SignUp";
// import SignUp from "./component/auth/SignUp";
// // import AdminDashboard from "./component/admin/pages/dashboard/AdminDashboard";
// import Home from "./component/admin/pages/home/Home";
// import Layout from "./component/layout/Layout";
// import ForgotPassword from "./component/auth/ForgotPassword";
// import ResetPassword from "./component/auth/ResetPassword";
// import Verify from "./component/auth/Verify";
// // import LoginWithCode from "./component/auth/src/pages/auth/LoginWithCode";
// import LoginWithCode from "./component/auth/LoginWithCode";
// // import Profile from "./component/auth/src/pages/profile/Profile";
// import Profile from "./component/admin/pages/profile/Profile";
// // import ChangePassword from "./component/auth/src/pages/changePassword/ChangePassword";
// import ChangePassword from "./component/admin/pages/changePassword/ChangePassword";
// import UserList from "./component/admin/pages/userList/UserList";
// import { ToastContainer } from "react-toastify";

// import "react-toastify/dist/ReactToastify.css";

// // import {
// //   getLoginStatus,
// //   getUser,
// //   selectIsLoggedIn,
// //   selectUser,
// // } from "./redux/features/auth/authSlice";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getLoginStatus,
//   getUser,
//   selectIsLoggedIn,
//   selectUser,
// } from "./redux/features/auth/authSlice";
// import axios from "axios";

// // import PasswordInput from "./component/passwordInput/PasswordInput";
// import { GoogleOAuthProvider } from "@react-oauth/google";

// axios.defaults.withCredentials = true;

// function App() {
//   const dispatch = useDispatch();
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const user = useSelector(selectUser);

//   useEffect(() => {
//     dispatch(getLoginStatus());
//     if (isLoggedIn && user === null) {
//       dispatch(getUser());
//     }
//   }, [dispatch, isLoggedIn, user]);

//   return (
//     <>
//       <BrowserRouter>
//         <ToastContainer />
//         <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <Layout>
//                   <Home />
//                 </Layout>
//               }
//             />
//             <Route
//               path="/profile"
//               element={
//                 <Layout>
//                   <Profile />
//                 </Layout>
//               }
//             />
//             <Route
//               path="/verify/:verificationToken"
//               element={
//                 <Layout>
//                   <Verify />
//                 </Layout>
//               }
//             />
//             <Route
//               path="/changePassword"
//               element={
//                 <Layout>
//                   <ChangePassword />
//                 </Layout>
//               }
//             />
//             <Route
//               path="/users"
//               element={
//                 <Layout>
//                   <UserList />
//                 </Layout>
//               }
//             />

//             <Route path="/login" element={<Login />} />
//             <Route path="/sign_up" element={<SignUp />} />
//             {/* <Route path="/password" element={<PasswordInput />} /> */}
//             <Route path="/forgot_password" element={<ForgotPassword />} />
//             <Route
//               path="/resetPassword/:resetToken"
//               element={<ResetPassword />}
//             />
//             {/* <Route path="/verify" element={<Verify />} />  */}
//             <Route path="/loginWithCode/:email" element={<LoginWithCode />} />

//             {/* Admin Dashboard Start  */}
//             {/* <Route path="/admin_dashboard" element={<AdminDashboard />} /> */}

//             {/* Sub Admin start */}
//           </Routes>
//         </GoogleOAuthProvider>
//       </BrowserRouter>
//       {/* <ToastContainer /> */}
//     </>
//   );
// }

// export default App;




import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";

// Import components
import Layout from "./component/layout/Layout";
import Home from "./component/admin/pages/home/Home";
import Profile from "./component/admin/pages/profile/Profile";
import Verify from "./component/auth/Verify";
import ChangePassword from "./component/admin/pages/changePassword/ChangePassword";
import UserList from "./component/admin/pages/userList/UserList";
import Login from "./component/auth/Login";
import SignUp from "./component/auth/SignUp";
import ForgotPassword from "./component/auth/ForgotPassword";
import ResetPassword from "./component/auth/ResetPassword";
import LoginWithCode from "./component/auth/LoginWithCode";

// Redux auth slice
import { getLoginStatus, getUser, selectIsLoggedIn, selectUser } from "./redux/features/auth/authSlice";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getLoginStatus());
    if (isLoggedIn && user === null) {
      dispatch(getUser());
    }
  }, [dispatch, isLoggedIn, user]);

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/profile"
              element={
                <Layout>
                  <Profile />
                </Layout>
              }
            />
            <Route
              path="/verify/:verificationToken"
              element={
                <Layout>
                  <Verify />
                </Layout>
              }
            />
            <Route
              path="/changePassword"
              element={
                <Layout>
                  <ChangePassword />
                </Layout>
              }
            />
            <Route
              path="/users"
              element={
                <Layout>
                  <UserList />
                </Layout>
              }
            />

            <Route path="/login" element={<Login />} />
            <Route path="/sign_up" element={<SignUp />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
            <Route path="/resetPassword/:resetToken" element={<ResetPassword />} />
            <Route path="/loginWithCode/:email" element={<LoginWithCode />} />
          </Routes>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

