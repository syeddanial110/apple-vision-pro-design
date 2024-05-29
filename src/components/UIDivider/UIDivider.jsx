import { Divider } from "@mui/material";
import React from "react";

const UIDivider = ({ ...sx }) => {
  return (
    <Divider
      sx={{
        background: (theme) => `${theme.palette.primary.greyShade7} !important`,
      }}
      {...sx}
    />
  );
};

export default UIDivider;
