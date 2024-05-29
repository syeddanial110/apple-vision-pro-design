import React, { useEffect, useState } from "react";
import UIBox from "../components/UIBox/UIBox";
import { Box, Grid, Stack } from "@mui/material";
import UITypography from "../components/UITypography/UITypography";
import profileAvatar from "../assets/icons/person.svg";
import UIButton from "../components/UIButton/UIButton";
import UIRadioButton from "../components/UIRadioButton/UIRadioButton";
import UICheckbox from "../components/UICheckBox/UICheckBox";
import UIDivider from "../components/UIDivider/UIDivider";
import PDFViewer from "../containers/CreditCard/PDFViewer";
import pdf1 from "../assets/somefile.pdf";
import pdf2 from "../assets/1.pdf";
import PDFBox from "../components/PDFBox/PDFBox";
import { useNavigate } from "react-router-dom";
import { pathLocations } from "../utils/pathLocations";

const CreditCard = () => {
  const navigate = useNavigate();

  const invoiceData = [
    {
      monthName: "February Transaction",
      pdf: pdf1,
    },
    {
      monthName: "March Transaction",
      pdf: pdf2,
    },
  ];

  const [currentPdf, setCurrentPdf] = useState("");

  const handlePdf = (item) => {
    setCurrentPdf(item.pdf);
  };

  useEffect(() => {
    setCurrentPdf(pdf1);
  }, []);

  return (
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
      <Grid container justifyContent="space-between" mt={5} gap={2}>
        <Grid item xs={12} md={3.7}>
          <UIBox elevation={1}>
            <Stack gap={2}>
              <UITypography
                type="subheading"
                title="Remaining Statement Balance"
                textAlign="center"
              />
              <UITypography type="heading" title="$0.00" textAlign="center" />
              <UITypography
                title="The amount of $975.70 is set to be auto drafted from your account on 04/01/2024"
                textAlign="center"
              />
              <UIButton
                variant="contained"
                label="Make Payment"
                onClick={() => navigate(pathLocations.makePayment)}
              />
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
                  title="New Balance for This Month"
                  textAlign="center"
                />
                <UITypography
                  type="heading"
                  title="$0.00"
                  textAlign="center"
                  sx={{ mt: 3 }}
                />
              </Box>
              <UICheckbox label="Auto Pay off" />
            </Stack>
          </UIBox>
        </Grid>
        <Grid item xs={12} md={3.7}>
          <UIBox elevation={1}>
            <Stack gap={2} sx={{ height: "100%" }}>
              <UITypography
                type="subheading"
                title="Total Balance"
                textAlign="center"
              />
              <UITypography type="heading" title="$136.00" textAlign="center" />
              <Box
                display="flex"
                alignItems="center"
                gap={2}
                justifyContent="center"
                mt={3}
              >
                <UITypography title="Spending Limit:" textAlign="center" />
                <UITypography
                  title="$150.00"
                  textAlign="center"
                  sx={{
                    border: (theme) =>
                      `1px solid ${theme.palette.primary.greyShade7}`,
                    padding: "6px 18px",
                    borderRadius: "6px",
                  }}
                />
              </Box>
            </Stack>
          </UIBox>
        </Grid>
        <Grid item xs={12}>
          <UIDivider />
        </Grid>
        <Grid item xs={12}>
          <UITypography
            type="mainDescription"
            title="Recent Transaction ( Since Jan 23 Closing Mar 18 )"
          />
        </Grid>
        <Grid item xs={12}>
          <PDFViewer pdf={currentPdf} />
        </Grid>
        <Grid item xs={12} display="flex" gap={2} mt={4}>
          {invoiceData.map((item) => {
            return (
              <PDFBox
                monthName={item.monthName}
                onClick={() => handlePdf(item)}
              />
            );
          })}
        </Grid>
      </Grid>
    </UIBox>
  );
};

export default CreditCard;
