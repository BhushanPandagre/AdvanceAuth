// import React, { useState } from "react";
// // import Card from "../../components/card/Card";

// // import PageMenu from "../../components/pageMenu/PageMenu";
// import PageMenu from "../../../../pageMenu/PageMenu";
// // import PasswordInput from "../../components/passwordInput/PasswordInput";
// import PasswordInput from "../../../../passwordInput/PasswordInput";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// // import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
// import {
 
// } from "../../../../../redux/auth/authSlice";
// // import {
// //   changePassword,
// //   logout,
// //   RESET,
// // } from "../../redux/features/auth/authSlice";
// // import { Spinner } from "../../components/loader/Loader";
// // import { sendAutomatedEmail } from "../../redux/features/email/emailSlice";
// import {  } from "../../../../../redux/email/emailSlice";

// const initialState = {
//   oldPassword: "",
//   password: "",
//   password2: "",
// };

// const ChangePassword = () => {
//   // useRedirectLoggedOutUser("/login");
//   const [formData, setFormData] = useState(initialState);
//   const { oldPassword, password, password2 } = formData;

//   // const { isLoading, user } = useSelector((state) => state.auth);

//   // const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const updatePassword = async (e) => {
//     e.preventDefault();

//     if (!oldPassword || !password || !password2) {
//       return toast.error("All fields are required");
//     }

//     if (password !== password2) {
//       return toast.error("Passwords do not match");
//     }

//     const userData = {
//       oldPassword,
//       password,
//     };

//     const emailData = {
//       subject: "Password Changed - AUTH:Z",
//       send_to: user.email,
//       reply_to: "noreply@zino",
//       template: "changePassword",
//       url: "/forgot",
//     };

//     // await dispatch(changePassword(userData));
//     // await dispatch(sendAutomatedEmail(emailData));
//     // await dispatch(logout());
//     // await dispatch(RESET(userData));
//     // navigate("/login");
//   };

//   return (
//     <>
//       <section>
//         <div className="container">
//           <PageMenu />
//           <h2>Change Password</h2>
//           <div className="--flex-start change-password">
            
//               <>
//                 <form onSubmit={updatePassword}>
//                   <p>
//                     <label>Current Password</label>
//                     <PasswordInput
//                       placeholder="Old Password"
//                       name="oldPassword"
//                       value={oldPassword}
//                       onChange={handleInputChange}
//                     />
//                   </p>
//                   <p>
//                     <label>New Password:</label>
//                     <PasswordInput
//                       placeholder="Password"
//                       name="password"
//                       value={password}
//                       onChange={handleInputChange}
//                     />
//                   </p>
//                   <p>
//                     <label>confirm New Password:</label>
//                     <PasswordInput
//                       placeholder="Confirm Password"
//                       name="password2"
//                       value={password2}
//                       onChange={handleInputChange}
//                     />
//                   </p>
//                   {/* {isLoading ? (
//                     <Spinner />
//                   ) : ( */}
//                     <button
//                       type="submit"
//                       className="--btn --btn-danger --btn-block"
//                     >
//                       Change Password
//                     </button>
//                   {/* )} */}
//                 </form>
//               </>
         
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ChangePassword;



//=====================Using Material Ui  ==============================//

// import React, { useState } from "react";
// import {
//   Container,
//   Typography,
//   Card,
//   CardContent,
//   TextField,
//   Button,
//   Box,
// } from "@mui/material";
// import PageMenu from "../../../../pageMenu/PageMenu";
// import PasswordInput from "../../../../passwordInput/PasswordInput"; // Assuming this component is using Material-UI TextField
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const initialState = {
//   oldPassword: "",
//   password: "",
//   password2: "",
// };

// const ChangePassword = () => {
//   const [formData, setFormData] = useState(initialState);
//   const { oldPassword, password, password2 } = formData;
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const updatePassword = async (e) => {
//     e.preventDefault();

//     if (!oldPassword || !password || !password2) {
//       return toast.error("All fields are required");
//     }

//     if (password !== password2) {
//       return toast.error("Passwords do not match");
//     }

//     const userData = {
//       oldPassword,
//       password,
//     };

//     const emailData = {
//       subject: "Password Changed - AUTH:Z",
//       send_to: user.email,
//       reply_to: "noreply@zino",
//       template: "changePassword",
//       url: "/forgot",
//     };

//     // await dispatch(changePassword(userData));
//     // await dispatch(sendAutomatedEmail(emailData));
//     // await dispatch(logout());
//     // await dispatch(RESET(userData));
//     // navigate("/login");
//   };

//   return (
//     <Container>
//       <PageMenu  />
//       <Typography variant="h4" component="h2" sx={{ marginY: 4 }} display="flex" justifyContent="center">
//         Change Password
//       </Typography>
//       <Box display="flex" justifyContent="center" className="change-password">
//         <Card sx={{ maxWidth: 400, width: '100%' }}>
//           <CardContent>
//             <form onSubmit={updatePassword}>
//               <Box marginBottom={2}>
//                 <PasswordInput
//                   fullWidth
//                   label="Current Password"
//                   name="oldPassword"
//                   type="password"
//                   value={oldPassword}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </Box>
//               <Box marginBottom={2}>
//                 <PasswordInput
//                   fullWidth
//                   label="New Password"
//                   name="password"
//                   type="password"
//                   value={password}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </Box>
//               <Box marginBottom={2}>
//                 <PasswordInput
//                   fullWidth
//                   label="Confirm New Password"
//                   name="password2"
//                   type="password"
//                   value={password2}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </Box>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//               >
//                 Change Password
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </Box>
//     </Container>
//   );
// };

// export default ChangePassword;


import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";
// import PageMenu from "../../../../pageMenu/PageMenu";
import PageMenu from "../../../pageMenu/PageMenu";
// import PasswordInput from "../../../../passwordInput/PasswordInput"; // Assuming this component is using Material-UI TextField
import PasswordInput from "../../../passwordInput/PasswordInput";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  oldPassword: "",
  password: "",
  password2: "",
};

const ChangePassword = () => {
  const [formData, setFormData] = useState(initialState);
  const { oldPassword, password, password2 } = formData;
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const updatePassword = async (e) => {
    e.preventDefault();

    if (!oldPassword || !password || !password2) {
      return toast.error("All fields are required");
    }

    if (password !== password2) {
      return toast.error("Passwords do not match");
    }

    const userData = {
      oldPassword,
      password,
    };

    // Uncomment the following lines for actual functionality
    // await dispatch(changePassword(userData));
    // await dispatch(sendAutomatedEmail(emailData));
    // await dispatch(logout());
    // await dispatch(RESET(userData));
    // navigate("/login");
  };

  return (
    <Container>
      <Box sx={{ marginTop: 8 }}>
        <PageMenu />
      </Box>
      <Typography variant="h4" component="h2" sx={{ marginY: 4 }} textAlign="center">
        Change Password
      </Typography>
      <Box display="flex" justifyContent="center" className="change-password">
        <Card sx={{ maxWidth: 400, width: '100%' }}>
          <CardContent>
            <form onSubmit={updatePassword}>
              <Box marginBottom={2}>
                <PasswordInput
                  fullWidth
                  label="Current Password"
                  name="oldPassword"
                  type="password"
                  value={oldPassword}
                  onChange={handleInputChange}
                  required
                />
              </Box>
              <Box marginBottom={2}>
                <PasswordInput
                  fullWidth
                  label="New Password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleInputChange}
                  required
                />
              </Box>
              <Box marginBottom={2}>
                <PasswordInput
                  fullWidth
                  label="Confirm New Password"
                  name="password2"
                  type="password"
                  value={password2}
                  onChange={handleInputChange}
                  required
                />
              </Box>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Change Password
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default ChangePassword;

