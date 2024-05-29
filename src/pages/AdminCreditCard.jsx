import { Grid } from "@mui/material";
import React, { useState } from "react";
import UITypography from "../components/UITypography/UITypography";
import UIButton from "../components/UIButton/UIButton";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import UITable from "../components/UITable/UITable";
import AdminCCTable from "../containers/AdminCC/AdminCCTable";
import UIModal from "../components/UIModal/UIModal";
import UISimpleTextField from "../components/UITextField/UISimpleTextField";

const AdminCreditCard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <UITypography type="heading" title="Credit Card" />
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="flex-end">
          <UIButton
            variant="contained"
            label="Add User"
            startIcon={<AddBoxOutlinedIcon />}
            onClick={() => setModalOpen(true)}
          />
        </Grid>
        <Grid item xs={12}>
          <AdminCCTable />
        </Grid>
      </Grid>
      <UIModal open={modalOpen} setOpen={setModalOpen} isBlur={false}>
        <Grid container p={3} gap={2}>
          <Grid item xs={12}>
            <UITypography type="heading" title="Enter User Email" />
          </Grid>
          <Grid item xs={12}>
            <UISimpleTextField placeholder="example@gmail.com" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <UITypography title="Credit Card Number" />
          </Grid>
          <Grid item xs={12}>
            <UISimpleTextField placeholder="******" fullWidth />
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <UIButton variant="contained" label="Submit" />
          </Grid>
        </Grid>
      </UIModal>
    </>
  );
};

export default AdminCreditCard;
