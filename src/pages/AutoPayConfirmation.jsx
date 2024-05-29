import { Grid } from "@mui/material";
import React from "react";
import UITypography from "../components/UITypography/UITypography";
import AutoPayConfirmationForm from "../containers/AutoPayConfirmation/AutoPayConfirmationForm";


const AutoPayConfirmation = () => {
  return (
    <Grid container gap={3}>
      <Grid item xs={12}>
        <UITypography type="heading" title="AutoPay Confirmation" />
      </Grid>
      <Grid item xs={12}>
        <AutoPayConfirmationForm />
      </Grid>
    </Grid>
  );
};

export default AutoPayConfirmation;
