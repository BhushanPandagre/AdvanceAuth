// import React from "react";
// import { BiSearch } from "react-icons/bi";


// const Search = ({ value, onChange }) => {
//   return (
//     <div className={styles.search}>
//       <BiSearch size={18} className={styles.icon} />
//       <input
//         type="text"
//         placeholder="Search Users"
//         value={value}
//         onChange={onChange}
//       />
//     </div>
//   );
// };

// export default Search;




import React from "react";
import { BiSearch } from "react-icons/bi";
import { TextField, InputAdornment } from "@mui/material";

const Search = ({ value, onChange }) => {
  return (
    <TextField
      variant="outlined"
      placeholder="Search Users"
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <BiSearch size={20} /> {/* Adjust the size of the icon here */}
          </InputAdornment>
        ),
      }}
      fullWidth // Makes the input take the full width of the container
      style={{ borderRadius: '8px' }} // Optional: to give rounded corners
    />
  );
};

export default Search;
