import { styled } from "@mui/system";
import { Select } from "@mui/material";

export const UIStyledSelect = styled(Select)(({ theme }) => ({
  backgroundColor: theme.palette.primary.white,
  color: theme.palette.primary.black,
  // minWidth: "200px",
  borderRadius: "12px",
  "> svg": {
    fill: `${theme.palette.primary.black}`,
    fontSize: "30px",
  },
}));
