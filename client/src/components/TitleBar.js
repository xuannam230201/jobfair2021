import React from "react";
import { Grid } from '@mui/material';
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Button from './Button';
import { useState } from "react";

const TitleBar = (props) => {
  return(
    <Grid container
      direction="row"
      sx={{
        bgcolor:'#ffffff',
        width:'1000px',
        height: {
          md:'70px',
        }
      }}
    >
      <Grid container item
        direction='row'
        md={7} xs={7}
      >
        <Grid container item
          justifyContent='flex-end'
          alignItems='center'
          md={1} xs={2}
        >
          <Box 
            sx={{
              bgcolor: props.circleColor, border:1, borderRadius:'50%',
              width: {
                xs:'10px',
                sm:'15px',
                md:'20px',
              },
              height: {
                xs:'10px',
                sm:'15px',
                md:'20px',
              }
            }}>
          </Box>
        </Grid>
        <Grid container item
          alignItems='center'
          md={11} xs={10}
        >
          <Typography sx={{
            marginLeft:'3%',
            fontWeight:'bold',
            fontSize: {
              xs:'13px',
              sm:'18px',
              md:'25px',
            }
          }}>
            {props.title}
          </Typography> 
        </Grid>  
      </Grid>
      <Grid container item
        justifyContent='center'
        alignItems='center'
        md={5} xs={5}
      >
        {props.type === "attendance" &&
          <Grid container
            direction="row"
          >
            <Grid container item
              justifyContent='center'
              alignItems='center'
              md={6} xs={6}
            >
              <Button
                bgColor={`${props.buttonIn ? "#4A9456" : "#3C90CC"}`}
                color="#FFFFFF"
                content="Điểm danh vào"
                onClick={() => props.setButtonIn(true)}
              />
            </Grid>
            <Grid container item
              justifyContent='center'
              alignItems='center'
              md={6} xs={6}
            >
              <Button
                bgColor={`${props.buttonIn ? "#3C90CC" : "#4A9456"}`}
                color="#FFFFFF"
                content="Điểm danh ra"
                onClick={() => props.setButtonIn(false)}
              />
            </Grid>
          </Grid>
        }
      </Grid>

    </Grid>
  )
}

export default TitleBar;