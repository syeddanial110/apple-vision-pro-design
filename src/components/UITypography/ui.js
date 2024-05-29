"use client";

import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const UIMainHeadingTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.blueShade1,
  fontSize: "48px",
  fontFamily: "custFontTitle",
  [theme.breakpoints.down("xl")]: {
    fontSize: "50px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
  },
  fontWeight: 600,
}));

export const UIHeadingTypography = styled(Typography)(({ theme, isWhite }) => ({
  color: isWhite
    ? theme.palette.primary.white
    : theme.palette.primary.blueShade1,
  fontWeight: 700,
  fontSize: "30px",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
}));
export const UISubHeadingTypography = styled(Typography)(
  ({ theme, isWhite }) => ({
    color: isWhite
      ? theme.palette.primary.white
      : theme.palette.primary.blueShade2,

    fontSize: "18px",
    fontWeight: 600,
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
    },
  })
);

export const UIMainDescriptionTypography = styled(Typography)(
  ({ theme, isWhite }) => ({
    color: isWhite
      ? theme.palette.primary.white
      : theme.palette.primary.blackShade1,
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
    },
  })
);
export const UIDescriptionTypography = styled(Typography)(
  ({ theme, isWhite }) => ({
    color: isWhite
      ? theme.palette.primary.white
      : theme.palette.primary.blackShade1,
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "14px",
    },
  })
);
