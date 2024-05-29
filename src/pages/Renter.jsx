import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import UIBox from "../components/UIBox/UIBox";
import UITypography from "../components/UITypography/UITypography";
import UIButton from "../components/UIButton/UIButton";
import UICheckbox from "../components/UICheckBox/UICheckBox";
import profileAvatar from "../assets/icons/person.svg";
import UIDivider from "../components/UIDivider/UIDivider";
import { pathLocations } from "../utils/pathLocations";
import { useNavigate } from "react-router-dom";

const Renter = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid container pb={2}>
        <Grid item xs={12}>
          <UITypography type="heading" title="Renter Dasboard" />
        </Grid>
      </Grid>
      <UIBox isWhite={true}>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <UITypography type="subheading" title="Membership & Billing" />
          </Grid>
          <Grid
            item
            xs={6}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            gap={1}
          >
            <img
              src={profileAvatar}
              alt="person"
              style={{
                height: 20,
                // width: 18,
              }}
            />
            <UITypography
              type="mainDescription"
              title="Knight Logan"
              sx={{ color: (theme) => theme.palette.primary.greyShade6 }}
            />
          </Grid>
        </Grid>
        <Grid container mt={5} gap={2}>
          <Grid item xs={12} md={3.7}>
            <UIBox elevation={1}>
              <Stack gap={2} alignItems="center">
                <UITypography
                  type="subheading"
                  title="Current Balance"
                  textAlign="center"
                />
                <UITypography
                  type="heading"
                  sx={{ fontWeight: 500 }}
                  title="$0.00"
                  textAlign="center"
                />
                <UITypography
                  title="The amount of $975.70 is set to be auto drafted from your account on 04/01/2024"
                  textAlign="center"
                />
                <UICheckbox label="Auto Pay off" />
              </Stack>
            </UIBox>
          </Grid>
          <Grid item xs={12} md={3.7}>
            <UIBox elevation={1}>
              <Stack
                gap={2}
                alignItems="center"
                justifyContent="space-between"
                sx={{ height: "100%" }}
              >
                <Box>
                  <UITypography
                    type="subheading"
                    title="Fees"
                    textAlign="center"
                  />
                  <UITypography
                    type="heading"
                    title="$0.00"
                    textAlign="center"
                    sx={{ mt: 3, fontWeight: 500 }}
                  />
                </Box>
                <UIButton
                  variant="contained"
                  label="Make Payment"
                  onClick={() => navigate(pathLocations.makePayment)}
                />
              </Stack>
            </UIBox>
          </Grid>
        </Grid>
      </UIBox>
    </>
  );
};

export default Renter;
