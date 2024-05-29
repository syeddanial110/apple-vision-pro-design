import { Box, Paper } from "@mui/material";
import React from "react";

const UIBox = ({ isWhite, elevation, children, sx }) => {
  return (
    <Paper
      elevation={elevation ? elevation : 8}
      square={false}
      sx={{
        backgroundColor: (theme) =>
          isWhite
            ? theme.palette.primary.white
            : theme.palette.primary.greyShade1,
        padding: "20px 30px",
        borderRadius: "12px",
        width: "100%",
        height: "100%",
        ...sx,
      }}
    >
      {children}
    </Paper>
  );
};

export default UIBox;
