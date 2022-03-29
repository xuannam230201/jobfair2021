import React from "react";
import { Grid } from "@mui/material";

const Footer = () => {
  return(
    <Grid container
      rowSpacing={0} columnSpacing={0}
      sx={{
        width: {
          md:'100%',
        },
        height: {
          md: '150px',
        },
        backgroundImage: "url('/images/footer.png')",
        backgroundSize: 'cover',
      }}
    >
    </Grid>
  )
}

export default Footer;