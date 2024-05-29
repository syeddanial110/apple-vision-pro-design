import { Box } from "@mui/material";
import React from "react";
import UITypography from "../UITypography/UITypography";
import pdfIcon from "../../assets/icons/pdfIcon.svg";

const PDFBox = ({ monthName, onClick }) => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.primary.greyShade1,
        padding: 2,
        borderRadius: "12px",
        minWidth: "150px",
        "&:hover": {
          cursor: "pointer",
        },
      }}
      onClick={onClick}
    >
      <img src={pdfIcon} alt="pdfIcon" style={{ height: 30 }} />
      <UITypography title={monthName} />
    </Box>
  );
};

export default PDFBox;
