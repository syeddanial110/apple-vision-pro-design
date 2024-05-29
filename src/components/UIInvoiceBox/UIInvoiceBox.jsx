import { Box } from "@mui/material";
import React from "react";
import UITypography from "../UITypography/UITypography";

const UIInvoiceBox = ({ title, children }) => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.primary.greyShade1,
        height: 120,
        // width: 100,
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.primary.blueShade3,
          padding: 3,
          borderTopRightRadius: "10px",
          borderTopLeftRadius: "10px",
        }}
      >
        <UITypography title={title} isWhite={true} textAlign="center" />
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default UIInvoiceBox;
