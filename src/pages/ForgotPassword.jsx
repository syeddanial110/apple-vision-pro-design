import React from "react";
import { Grid } from "@mui/material";
import logo from "../assets/images/Logo.png";
import UIBox from "../components/UIBox/UIBox";
import UITypography from "../components/UITypography/UITypography";
import UITextField from "../components/UITextField/UITextField";
import LoginForm from "../containers/Auth/LoginForm";
import { AuthWrapper } from "../containers/Auth/ui";
import ForgotPasswordForm from "../containers/Auth/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <AuthWrapper>
      <Grid container py={8} gap={3} justifyContent="center">
        <Grid item xs={12} display="flex" justifyContent="center">
          <img src={logo} alt="logo" style={{ height: 100 }} />
        </Grid>
        <Grid item xs={5}>
          <UIBox isWhite>
            <UITypography
              type="heading"
              title="Forgot Password"
              textAlign="center"
            />
            <UITypography
              type="mainDescription"
              title="Enter your Information"
              textAlign="center"
            />
            <ForgotPasswordForm />
          </UIBox>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default ForgotPassword;
