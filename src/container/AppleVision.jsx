import { Box, Fade, Grid, IconButton } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import bubble from "../assets/images/Bubble.png";
import appStore from "../assets/images/appStore.png";
import ion_people from "../assets/images/ion_people.png";
import icon3 from "../assets/images/icon3.png";

const AppleVision = ({ setIsMenuClick, isMenuClick }) => {
  return (
    <Fade in={isMenuClick}>
      <Box
        sx={{
          height: "100%",
          width: "98.7vw",
          position: "absolute",
          top: 0,
          background: "rgba(255, 255, 255, 0.19)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(3.6px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          overflow: "hidden !important",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            minWidth: 40,
            minHeight: 80,
            //   border: "1px solid red",
            top: "50%",
            left: "8%",
            background: "rgb(79,79,79)",
            background:
              "linear-gradient(29deg, rgba(79,79,79,1) 0%, rgba(79,79,79,1) 0%, rgba(126,126,126,1) 33%, rgba(79,79,79,1) 100%)",
            borderRadius: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "12px 6px",
            gap: 3,
          }}
        >
          <img src={appStore} alt="appStore" height={30} />
          <img src={ion_people} alt="appStore" height={30} />
          <img src={icon3} alt="appStore" height={30} />
        </Box>
        <Grid container>
          <Grid item xs={6}>
            Apple Vision
          </Grid>
          <Grid item xs={6} display="flex" justifyContent="flex-end">
            <IconButton onClick={() => setIsMenuClick(false)}>
              <CloseIcon sx={{ color: "white" }} />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center" gap={3} mt={9}>
              <Grid
                item
                xs={2}
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                  transition: "all 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    cursor: "pointer",
                    "& > img": {
                      boxShadow: "rgba(255, 255, 255, 0.5) 0px 2px 8px 0px",
                    },
                  },
                }}
              >
                <img
                  src={bubble}
                  aly="bubble"
                  height={80}
                  style={{
                    borderRadius: "50%",
                  }}
                />
                <p>Lorem ipsum</p>
              </Grid>
              <Grid
                item
                xs={2}
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                  transition: "all 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    cursor: "pointer",
                    "& > img": {
                      boxShadow: "rgba(255, 255, 255, 0.5) 0px 2px 8px 0px",
                    },
                  },
                }}
              >
                <img
                  src={bubble}
                  style={{
                    borderRadius: "50%",
                  }}
                  aly="bubble"
                  height={80}
                />
                <p>Lorem ipsum</p>
              </Grid>
              <Grid
                item
                xs={2}
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                  transition: "all 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    cursor: "pointer",
                    "& > img": {
                      boxShadow: "rgba(255, 255, 255, 0.5) 0px 2px 8px 0px",
                    },
                  },
                }}
              >
                <img
                  src={bubble}
                  style={{
                    borderRadius: "50%",
                  }}
                  aly="bubble"
                  height={80}
                />
                <p>Lorem ipsum</p>
              </Grid>
              <Grid
                item
                xs={2}
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                  transition: "all 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    cursor: "pointer",
                    "& > img": {
                      boxShadow: "rgba(255, 255, 255, 0.5) 0px 2px 8px 0px",
                    },
                  },
                }}
              >
                <img
                  src={bubble}
                  style={{
                    borderRadius: "50%",
                  }}
                  aly="bubble"
                  height={80}
                />
                <p>Lorem ipsum</p>
              </Grid>
            </Grid>
            <Grid container justifyContent="center" gap={3} mt={9}>
              <Grid
                item
                xs={2}
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                  transition: "all 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    cursor: "pointer",
                    "& > img": {
                      boxShadow: "rgba(255, 255, 255, 0.5) 0px 2px 8px 0px",
                    },
                  },
                }}
              >
                <img
                  src={bubble}
                  style={{
                    borderRadius: "50%",
                  }}
                  aly="bubble"
                  height={80}
                />
                <p>Lorem ipsum</p>
              </Grid>
              <Grid
                item
                xs={2}
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                  transition: "all 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    cursor: "pointer",
                    "& > img": {
                      boxShadow: "rgba(255, 255, 255, 0.5) 0px 2px 8px 0px",
                    },
                  },
                }}
              >
                <img
                  src={bubble}
                  style={{
                    borderRadius: "50%",
                  }}
                  aly="bubble"
                  height={80}
                />
                <p>Lorem ipsum</p>
              </Grid>
              <Grid
                item
                xs={2}
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                  transition: "all 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    cursor: "pointer",
                    "& > img": {
                      boxShadow: "rgba(255, 255, 255, 0.5) 0px 2px 8px 0px",
                    },
                  },
                }}
              >
                <img
                  src={bubble}
                  style={{
                    borderRadius: "50%",
                  }}
                  aly="bubble"
                  height={80}
                />
                <p>Lorem ipsum</p>
              </Grid>
            </Grid>
            <Grid container justifyContent="center" gap={3} mt={9}>
              <Grid
                item
                xs={2}
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                  transition: "all 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    cursor: "pointer",
                    "& > img": {
                      boxShadow: "rgba(255, 255, 255, 0.5) 0px 2px 8px 0px",
                    },
                  },
                }}
              >
                <img
                  src={bubble}
                  style={{
                    borderRadius: "50%",
                  }}
                  aly="bubble"
                  height={80}
                />
                <p>Lorem ipsum</p>
              </Grid>
              <Grid
                item
                xs={2}
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                  transition: "all 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    cursor: "pointer",
                    "& > img": {
                      boxShadow: "rgba(255, 255, 255, 0.5) 0px 2px 8px 0px",
                    },
                  },
                }}
              >
                <img
                  src={bubble}
                  style={{
                    borderRadius: "50%",
                  }}
                  aly="bubble"
                  height={80}
                />
                <p>Lorem ipsum</p>
              </Grid>
              <Grid
                item
                xs={2}
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                  transition: "all 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    cursor: "pointer",
                    "& > img": {
                      boxShadow: "rgba(255, 255, 255, 0.5) 0px 2px 8px 0px",
                    },
                  },
                }}
              >
                <img
                  src={bubble}
                  style={{
                    borderRadius: "50%",
                  }}
                  aly="bubble"
                  height={80}
                />
                <p>Lorem ipsum</p>
              </Grid>
              <Grid
                item
                xs={2}
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                  transition: "all 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    cursor: "pointer",
                    "& > img": {
                      boxShadow: "rgba(255, 255, 255, 0.5) 0px 2px 8px 0px",
                    },
                  },
                }}
              >
                <img
                  src={bubble}
                  style={{
                    borderRadius: "50%",
                  }}
                  aly="bubble"
                  height={80}
                />
                <p>Lorem ipsum</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Fade>
  );
};

export default AppleVision;
