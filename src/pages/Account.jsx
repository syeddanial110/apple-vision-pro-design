import { Grid } from "@mui/material";
import React from "react";
import UITypography from "../components/UITypography/UITypography";
import UIBox from "../components/UIBox/UIBox";
import UISimpleTextField from "../components/UITextField/UISimpleTextField";
import UIButton from "../components/UIButton/UIButton";
import UITextField from "../components/UITextField/UITextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { changePasswordSchema } from "../containers/Auth/schema";

const Account = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const handleChangePassword = (data) => {};

  return (
    <Grid container gap={2}>
      <Grid item xs={12}>
        <UITypography type="heading" title="User Account" />
      </Grid>
      <Grid item xs={12}>
        <UIBox isWhite>
          <Grid container justifyContent="space-evenly" py={8}>
            <Grid item xs={5}>
              <UIBox isWhite={false}>
                <Grid container gap={3}>
                  <Grid item xs={12}>
                    <UITypography title="Name" />
                    <UISimpleTextField fullWidth={true} />
                  </Grid>
                  <Grid item xs={12}>
                    <UITypography title="User Name" />
                    <UISimpleTextField fullWidth={true} />
                  </Grid>
                  <Grid item xs={12}>
                    <UIButton
                      variant="contained"
                      label="Update Details"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </UIBox>
            </Grid>
            <Grid item xs={5}>
              <UIBox isWhite={false}>
                <form onSubmit={handleSubmit(handleChangePassword)}>
                  <Grid container gap={3}>
                    <Grid item xs={12}>
                      <UITypography title="Current Password" />
                      <UITextField
                        control={control}
                        errorMessage={errors?.oldPassword?.message}
                        name="oldPassword"
                        fullWidth={true}
                        type="password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <UITypography title="New Password" />
                      <UITextField
                        control={control}
                        errorMessage={errors?.newPassword?.message}
                        name="newPassword"
                        fullWidth={true}
                        type="password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <UITypography title="Re-enter Password" />
                      <UITextField
                        control={control}
                        errorMessage={errors?.confirmPassword?.message}
                        name="confirmPassword"
                        fullWidth={true}
                        type="password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <UIButton
                        variant="contained"
                        label="Update Password"
                        fullWidth
                        type="submit"
                      />
                    </Grid>
                  </Grid>
                </form>
              </UIBox>
            </Grid>
          </Grid>
        </UIBox>
      </Grid>
    </Grid>
  );
};

export default Account;
