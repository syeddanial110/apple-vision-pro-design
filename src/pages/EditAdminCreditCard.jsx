import { Grid, Stack } from "@mui/material";
import React from "react";
import UITypography from "../components/UITypography/UITypography";
import UIBox from "../components/UIBox/UIBox";
import UITextField from "../components/UITextField/UITextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { adminEditCCSchema } from "../containers/Auth/schema";
import UIButton from "../components/UIButton/UIButton";
import UIFileButton from "../components/UIButton/UIFileButton";
import PDFBox from "../components/PDFBox/PDFBox";

const EditAdminCreditCard = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(adminEditCCSchema),
    defaultValues: {
      name: "",
      email: "",
      username: "",
      interestRate: "",
      newPurchase: "",
      availableCredit: "",
      fees: "",
      addPayment: "",
      previousStatementBalance: "",
    },
  });

  const handleEditUser = (data) => {
    console.log("data", data);
  };

  const handlePdfChange = (e) => {
    console.log("e.target", e.target.files);
  };

  return (
    <>
      <Grid container gap={2}>
        <Grid item xs={12} display="flex" alignItems="flex-end">
          <UITypography type="heading" title="Edit User Data" />
          <sub>CC</sub>
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit(handleEditUser)}>
            <UIBox isWhite={true}>
              <Grid container gap={2}>
                <Grid item xs={7}>
                  <Grid container gap={2}>
                    <Grid item xs={5.8}>
                      <UITypography title="Name" />
                      <UITextField
                        control={control}
                        name="name"
                        errorMessage={errors?.name?.message}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={5.8}>
                      <UITypography title="User Name" />
                      <UITextField
                        control={control}
                        name="username"
                        errorMessage={errors?.username?.message}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={5.8}>
                      <UITypography title="Email" />
                      <UITextField
                        control={control}
                        name="email"
                        errorMessage={errors?.email?.message}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={5.8}>
                      <UITypography title="Interest Rate" />
                      <UITextField
                        control={control}
                        name="interestRate"
                        errorMessage={errors?.interestRate?.message}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={5.8}>
                      <UITypography title="New Purchase" />
                      <UITextField
                        control={control}
                        name="newPurchase"
                        errorMessage={errors?.newPurchase?.message}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={5.8}>
                      <UITypography title="Available Credit" />
                      <UITextField
                        control={control}
                        name="availableCredit"
                        errorMessage={errors?.availableCredit?.message}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={5.8}>
                      <UITypography title="Fees" />
                      <UITextField
                        control={control}
                        name="fees"
                        errorMessage={errors?.fees?.message}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={5.8}>
                      {" "}
                      <UITypography title="Add a Payment" />
                      <UITextField
                        control={control}
                        name="addPayment"
                        errorMessage={errors?.addPayment?.message}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={5.8}>
                      <UITypography title="Previous Statement Balance" />
                      <UITextField
                        control={control}
                        name="previousStatementBalance"
                        errorMessage={errors?.previousStatementBalance?.message}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={4}>
                  <Grid container gap={2}>
                    <Grid item xs={12}>
                      <UITypography type="heading" title="Upload Document" />
                    </Grid>
                    <Grid item xs={12}>
                      <UIFileButton _handleChangeImage={handlePdfChange} />
                    </Grid>
                    <Grid item xs={12}>
                      <UITypography
                        type="mainDescription"
                        title="Previous Documents"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <PDFBox monthName="February Transaction" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <UIButton
                    variant="contained"
                    label="Update"
                    fullWidth
                    type="submit"
                  />
                </Grid>
              </Grid>
            </UIBox>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default EditAdminCreditCard;
