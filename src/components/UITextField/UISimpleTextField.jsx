import React, { useState } from "react";
import { UIStyledContainedField } from "./ui";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const UISimpleTextField = ({
  value,
  label,
  handleChange,
  onChange,
  name,
  fullWidth,
  type,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  return (
    <>
      {type == "password" ? (
        <UIStyledContainedField
          type={showPassword ? "text" : "password"}
          value={value}
          variant="outlined"
          label={label}
          onChange={onChange}
          name={name}
          fullWidth={fullWidth}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  sx={{ padding: "10px !important" }}
                >
                  {!showPassword ? (
                    <VisibilityOff
                      sx={{
                        color: (theme) => theme.palette.primary.greyShade6,
                      }}
                    />
                  ) : (
                    <Visibility
                      sx={{
                        color: (theme) => theme.palette.primary.greyShade6,
                      }}
                    />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          // error={errorMessage && true}
          {...props}
        />
      ) : (
        <UIStyledContainedField
          // type={type}
          value={value}
          variant="outlined"
          label={label}
          onChange={onChange}
          name={name}
          fullWidth={fullWidth}
          // error={errorMessage && true}
          {...props}
        />
      )}
    </>
  );
};

export default UISimpleTextField;
