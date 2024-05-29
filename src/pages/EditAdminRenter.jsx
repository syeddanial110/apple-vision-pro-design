import { Grid } from "@mui/material";
import React from "react";
import UITypography from "../components/UITypography/UITypography";
import EditAdminRenterForm from "../containers/AdminRenter/EditAdminRenterForm";

const EditAdminRenter = () => {
  return (
    <>
      <Grid container gap={1}>
        <Grid item xs={12} display="flex" alignItems="flex-end">
          <UITypography type="heading" title="Edit User Data" />
          <sub>CC</sub>
        </Grid>
        <Grid item xs={12}>
          <EditAdminRenterForm />
        </Grid>
      </Grid>
    </>
  );
};

export default EditAdminRenter;
