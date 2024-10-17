import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const PasswordInput = ({ label, value, onChange, name, onPaste }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      label={label}
      required
      name={name}
      value={value}
      onChange={onChange}
      onPaste={onPaste}
      fullWidth
      size="small"
      variant="outlined" // or "filled" or "standard" based on your design preference
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={togglePassword} edge="end">
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordInput;
