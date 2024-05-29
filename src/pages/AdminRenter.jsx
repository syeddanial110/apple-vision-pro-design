import { Grid } from "@mui/material";
import React, { useState } from "react";
import UITypography from "../components/UITypography/UITypography";
import UIBox from "../components/UIBox/UIBox";
import UIButton from "../components/UIButton/UIButton";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import AdminRenterTable from "../containers/AdminRenter/AdminRenterTable";
import UIModal from "../components/UIModal/UIModal";
import UISimpleTextField from "../components/UITextField/UISimpleTextField";

const AdminRenter = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <UITypography type="heading" title="Renter" />
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="flex-end">
          <UIButton
            variant="contained"
            label="Add User"
            startIcon={<AddBoxOutlinedIcon />}
            onClick={() => {
              setIsDelete(false);
              setModalOpen(true);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <AdminRenterTable
            setIsDelete={setIsDelete}
            setModalOpen={setModalOpen}
          />
        </Grid>
      </Grid>
      <UIModal open={modalOpen} setOpen={setModalOpen} isBlur={false}>
        {isDelete ? (
          <Grid
            container
            alignItems="center"
            sx={{ height: "100%", padding: "20px 25px" }}
            gap={2}
          >
            <Grid item xs={12}>
              <UITypography type="heading" title="Delete Renter User" />
            </Grid>
            <Grid item xs={12}>
              <UITypography title="Are you sure you want to delete this user?" />
            </Grid>
            <Grid item xs={3}>
              <UIButton
                variant="contained"
                label="Delete"
                fullWidth
                sx={{
                  backgroundColor: (theme) => theme.palette.secondary.error,
                  "&:hover": {
                    backgroundColor: (theme) =>
                      theme.palette.secondary.error,
                    color: (theme) => theme.palette.secondary.white,
                  },
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <UIButton label="Cancel" fullWidth />
            </Grid>
          </Grid>
        ) : (
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
              <UISimpleTextField
                placeholder="******"
                fullWidth
                type="password"
              />
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center">
              <UIButton variant="contained" label="Submit" />
            </Grid>
          </Grid>
        )}
      </UIModal>
    </>
  );
};

export default AdminRenter;
