import React from "react";
import { AuthWrapper } from "../containers/Auth/ui";
import { Grid } from "@mui/material";
import logo from "../assets/images/Logo.png";
import UIBox from "../components/UIBox/UIBox";
import UITypography from "../components/UITypography/UITypography";
import CreditCardSignupForm from "../containers/Auth/CreditCardSignupForm";


const CreditCardSignup = () => {
  return (
    <AuthWrapper>
      <Grid container py={8} gap={3} justifyContent="center">
        <Grid item xs={12} display="flex" justifyContent="center">
          <img src={logo} alt="logo" style={{ height: 100 }} />
        </Grid>
        <Grid item xs={6}>
          <UIBox isWhite>
            <UITypography type="heading" title="Register" textAlign="center" />
            <UITypography
              type="mainDescription"
              title="Enter your Information"
              textAlign="center"
            />
            <CreditCardSignupForm />
          </UIBox>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default CreditCardSignup;
