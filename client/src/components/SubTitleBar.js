import React from "react";
import { Grid } from '@mui/material';
import { Typography } from "@mui/material";

const SubTitleBar = (props) => {
  return (
    <Grid container 
      rowSpacing={0} columnSpacing={0}
      sx={{
        bgcolor:'#ffffff',
        width: {
          md: '1000px',
        },
        height: {
          md:'70px',
        }
      }}
      justifyContent='center'
      alignItems='center'
    >
      <Typography display='block' sx={{color:'#000000', fontWeight:'bold', textAlign: 'center',
        fontSize: {
          md:'32px',
        }
      }} >
        {props.content}
      </Typography>
    </Grid>
  )
}

export default SubTitleBar;