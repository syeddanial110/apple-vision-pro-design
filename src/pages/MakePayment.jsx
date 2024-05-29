import { Grid } from "@mui/material";
import React from "react";
import UITypography from "../components/UITypography/UITypography";
import AddMakePayment from "../containers/MakePayment/AddMakePayment";

const MakePayment = () => {
  return (
    <Grid container gap={3}>
      <Grid item xs={12}>
        <UITypography type="heading" title="Make Payment" />
      </Grid>
      <Grid item xs={12}>
        <AddMakePayment />
      </Grid>
    </Grid>
  );
};

export default MakePayment;
