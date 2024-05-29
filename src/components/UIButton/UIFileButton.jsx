import React, { useRef } from "react";
import { Input, UIBoxInput, UILoadingBox, UIStyledInputButton } from "./ui";
import { Box, CircularProgress, Stack } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import UITypography from "../UITypography/UITypography";
import uploadIcon from "../../assets/icons/uploadIcon.svg";

const UIFileButton = ({
  data,
  _handleChangeImage,
  isImageUploading,
  isFileUpload,
}) => {
  const fileInputRef = useRef(null);

  const _handleInputClick = (e) => {
    fileInputRef.current.click();
  };
  return (
    <>
      <UIStyledInputButton data={data} disableRipple fullWidth={true}>
        <Stack direction="column" spacing={0} sx={{ width: "100%" }}>
          <Input
            accept="application/pdf"
            ref={fileInputRef}
            type="file"
            onChange={_handleChangeImage}
          />
          {isImageUploading ? (
            <UILoadingBox>
              <CircularProgress sx={{ height: 100, width: 100 }} />
            </UILoadingBox>
          ) : (
            <Box onClick={_handleInputClick} sx={{ width: "100%" }}>
              {!data?.imagePath && !isFileUpload && (
                <Box
                  sx={{
                    // backgroundColor: (theme) => theme.palette.primary.main,
                    backgroundColor: "transparent",
                    border: "1px solid #B7B7B7",
                    padding: "30px 20px",
                    borderRadius: "16px",
                    transition: "all 0.5s ease",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    "&:hover": {
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                    },
                  }}
                >
                  <UITypography
                    type="subheading"
                    sx={{ textTransform: "capatlize" }}
                    title="Add new Documents"
                  />
                  <UITypography title="Only (.PDF) Supported" />
                  <img src={uploadIcon} alt="uploadIcon" />
                </Box>
              )}
            </Box>
          )}
        </Stack>
      </UIStyledInputButton>
    </>
  );
};

export default UIFileButton;
