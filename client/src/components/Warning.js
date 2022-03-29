import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

const Warning = (props) => {
  return (
    <Grid container
      direction='row'
      justifyContent='center'
      alignItems='center'
      sx={{
        height: {
          md: '100px',
        },
        width: {
          md: '350px'
        },
        bgcolor: '#FCEDE9'
      }}
    >
      <Grid item
        md={1.5}
        justifyContent='center'
        alignItems='center'
      >
        <WarningRoundedIcon 
          sx={{
            height: {
              md: '40px',
            },
            width: {
              md: '40px',
            },
            bgcolor: '##FCEDE9',
          }}
        />
      </Grid>
      <Grid item
        md={10.5}
        justifyContent='flex-start'
        alignItems='center'
      >
        <Typography
          sx={{
            fontSize:'18px',
          }}
        >
          {props.action}
        </Typography>
        <Typography
          sx={{
            fontSize:'18px',
          }}
        >
          {props.content}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Warning;