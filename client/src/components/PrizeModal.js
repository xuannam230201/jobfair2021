import React, { useState, useEffect } from 'react';
import { Dialog, Grid, Typography, IconButton, Stack} from '@mui/material';
import { useSelector } from 'react-redux';
import { Fireworks, useFireworks } from "fireworks-js/dist/react";

const style = {
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  position: "fixed",
}

const PrizeModal = (props) => {
  const { setEnabled, setOptions, enabled, options } = useFireworks({
    initialStart: true,
    initialOptions: {
      hue: {
        min: 0,
        max: 345
      },
      delay: {
        min: 15,
        max: 15
      },
      rocketsPoint: 50,
      speed: 10,
      acceleration: 5,
      friction: 0.96,
      gravity: 1,
      particles: 90,
      trace: 3,
      explosion: 6,
      autoresize: true,
      brightness: {
        min: 50,
        max: 80,
        decay: {
          min: 0.015,
          max: 0.03
        }
      },
      boundaries: {
        visible: false
      },
      sound: {
        enabled: true,
        files: [
          "https://fireworks.js.org/sounds/explosion0.mp3",
          "https://fireworks.js.org/sounds/explosion1.mp3",
          "https://fireworks.js.org/sounds/explosion2.mp3"
        ],
        volume: {
          min: 2,
          max: 3
        }
      },
      mouse: {
        click: true,
        move: false,
        max: 1
      }
    }
  });

  const {liveStudent} = useSelector(state => state);
  
  useEffect(() => {
    setTimeout(() => {
      props.setOpen(false);
    }, 5000);
  }, [props.student])

  return (
    <>
    { props.open ?
      <Fireworks options={options} style={style} >
      <Dialog open={props.open} > 
        <Grid container 
          rowSpacing={0} columnSpacing={0}
          direction='column'
          sx={{
              bgcolor:'#ffffff',
              width: {
                  md: '500px',
              },
              height: {
                  md:'200px',
              },
          }}
        >
          <Grid container 
            justifyContent='center'
            alignItems='center'
            sx={{
              height:'60px',
              bgcolor: '#4C9556',
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  md: '30px'
                },
                fontWeight: 'bold',
                color: '#ffffff',
              }}
            >
              CHÚC MỪNG
            </Typography>
          </Grid>
          <Grid container 
            justifyContent='center'
            alignItems='center'
            sx={{
              height:'70px',
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  md: '24px'
                },
              }}
            >
              {props.student ? (props.student.surname + " " + props.student.firstname) : ""}
            </Typography>
          </Grid>
          <Grid container item
            justifyContent='center'
            sx={{
              height:'70px',
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  md: '24px'
                },
              }}
            >
              {props.student ? props.student.id : ""}
            </Typography>
          </Grid>
        </Grid>
      </Dialog>
      </Fireworks>
      : <></>
    }
    </>
  )
}

export default PrizeModal;