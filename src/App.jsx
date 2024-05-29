import { useState } from "react";
import "./App.css";

import MenuIcon from "@mui/icons-material/Menu";
import { Box, Grid, IconButton } from "@mui/material";
import AppleVision from "./container/AppleVision";
import banner from "./assets/images/banner.png";

function App() {
  const [isMenuClick, setIsMenuClick] = useState(false);

  const handleMenuClick = () => {
    setIsMenuClick(true);
  };
  return (
    <Box sx={{ height: "100vh", position: "relative" }}>
      <Grid container sx={{ background: "black" }}>
        <Grid item xs={6}>
          Logo Here
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="flex-end">
          <IconButton onClick={handleMenuClick}>
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            backgroundImage: `url('${banner}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "100vh",
            width: "100%",
          }}
        ></Grid>
      </Grid>

      {isMenuClick && <AppleVision setIsMenuClick={setIsMenuClick} isMenuClick={isMenuClick} />}
    </Box>
  );
}

export default App;

//https://www.npmjs.com/package/react-pdf
