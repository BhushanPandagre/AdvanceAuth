// import React, { useEffect } from "react";
// import { BiUserCheck, BiUserMinus, BiUserX } from "react-icons/bi";
// import { FaUsers } from "react-icons/fa";
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   CALC_SUSPENDED_USER,
// //   CALC_VERIFIED_USER,
// // } from "../../redux/features/auth/authSlice";
// //  import InfoBox from "../infoBox/InfoBox";
// import InfoBox from "../infoBox/InfoBox";

// // Icons
// const icon1 = <FaUsers size={40} color="#fff" />;
// const icon2 = <BiUserCheck size={40} color="#fff" />;
// const icon3 = <BiUserMinus size={40} color="#fff" />;
// const icon4 = <BiUserX size={40} color="#fff" />;

// const UserStats = () => {
//   // const dispatch = useDispatch();
//   // const { users, verifiedUsers, suspendedUsers } = useSelector(
//   //   (state) => state.auth
//   // );
//   // const unverifiedUsers = users.length - verifiedUsers;

//   // useEffect(() => {
//   //   dispatch(CALC_VERIFIED_USER());
//   //   dispatch(CALC_SUSPENDED_USER());
//   // }, [dispatch, users]);

//   return (
//     <div className="user-summary">
//       <h3 className="--mt">User Stats</h3>
//       <div className="info-summary">
//         <InfoBox
//           icon={icon1}
//           title={"Total Users"}
//           // count={users.length}
//           bgColor="card1"
//         />
//         <InfoBox
//           icon={icon2}
//           title={"Verified Users"}
//           // count={verifiedUsers}
//           bgColor="card2"
//         />
//         <InfoBox
//           icon={icon3}
//           title={"Unverified Users"}
//           // count={unverifiedUsers}
//           bgColor="card3"
//         />
//         <InfoBox
//           icon={icon4}
//           title={"Suspended Users"}
//           // count={suspendedUsers}
//           bgColor="card4"
//         />
//       </div>
//     </div>
//   );
// };

// export default UserStats;

// import React, { useEffect } from "react";
// import { BiUserCheck, BiUserMinus, BiUserX } from "react-icons/bi";
// import { FaUsers } from "react-icons/fa";
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   CALC_SUSPENDED_USER,
// //   CALC_VERIFIED_USER,
// // } from "../../redux/features/auth/authSlice";
// import InfoBox from "../infoBox/InfoBox";
// import { Grid, Typography, Paper } from "@mui/material";

// // Icons
// const icon1 = <FaUsers size={40} color="#fff" />;
// const icon2 = <BiUserCheck size={40} color="#fff" />;
// const icon3 = <BiUserMinus size={40} color="#fff" />;
// const icon4 = <BiUserX size={40} color="#fff" />;

// const UserStats = () => {
//   // const dispatch = useDispatch();
//   // const { users, verifiedUsers, suspendedUsers } = useSelector(
//   //   (state) => state.auth
//   // );
//   // const unverifiedUsers = users.length - verifiedUsers;

//   // useEffect(() => {
//   //   dispatch(CALC_VERIFIED_USER());
//   //   dispatch(CALC_SUSPENDED_USER());
//   // }, [dispatch, users]);

//   return (
//     <Paper elevation={3} style={{ padding: '16px', borderRadius: '8px' }}>
//       <Typography variant="h5" className="--mt" gutterBottom>
//         User Stats
//       </Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={6} md={3}>
//           <InfoBox
//             icon={icon1}
//             title={"Total Users"}
//             // count={users.length}
//             bgColor="#3f51b5" // Customize the card color
//           />
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <InfoBox
//             icon={icon2}
//             title={"Verified Users"}
//             // count={verifiedUsers}
//             bgColor="#4caf50" // Customize the card color
//           />
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <InfoBox
//             icon={icon3}
//             title={"Unverified Users"}
//             // count={unverifiedUsers}
//             bgColor="#ff9800" // Customize the card color
//           />
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <InfoBox
//             icon={icon4}
//             title={"Suspended Users"}
//             // count={suspendedUsers}
//             bgColor="#f44336" // Customize the card color
//           />
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// };

// export default UserStats;

import React, { useEffect } from "react";
import { BiUserCheck, BiUserMinus, BiUserX } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import {
  CALC_SUSPENDED_USER,
  CALC_VERIFIED_USER,
} from "../../redux/features/auth/authSlice";

import InfoBox from "../infoBox/InfoBox";

import { Grid, Typography, Paper } from "@mui/material";

// Icons
const icon1 = <FaUsers size={40} color="#fff" />;
const icon2 = <BiUserCheck size={40} color="#fff" />;
const icon3 = <BiUserMinus size={40} color="#fff" />;
const icon4 = <BiUserX size={40} color="#fff" />;

const UserStats = () => {
  const dispatch = useDispatch();
  const { users, verifiedUsers, suspendedUsers } = useSelector(
    (state) => state.auth
  );
  const unverifiedUsers = users.length - verifiedUsers;

  useEffect(() => {
    dispatch(CALC_VERIFIED_USER());
    dispatch(CALC_SUSPENDED_USER());
  }, [dispatch, users]);

  return (
    <Paper elevation={3} style={{ padding: "16px", borderRadius: "8px" }}>
      <Typography variant="h5" className="--mt" gutterBottom>
        User Stats
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {" "}
        {/* Centering the cards */}
        <Grid item>
          <InfoBox
            icon={icon1}
            title={"Total Users"}
            count={users.length}
            bgColor="#3f51b5" // Customize the card color
          />
        </Grid>
        <Grid item>
          <InfoBox
            icon={icon2}
            title={"Verified Users"}
            count={verifiedUsers}
            bgColor="#4caf50" // Customize the card color
          />
        </Grid>
        <Grid item>
          <InfoBox
            icon={icon3}
            title={"Unverified Users"}
            count={unverifiedUsers}
            bgColor="#ff9800" // Customize the card color
          />
        </Grid>
        <Grid item>
          <InfoBox
            icon={icon4}
            title={"Suspended Users"}
            count={suspendedUsers}
            bgColor="#f44336" // Customize the card color
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserStats;
