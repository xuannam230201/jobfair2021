import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Tab } from "@mui/material";
import {Tabs} from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { NAVIGATOR_TYPES } from "../redux/action/navigator";

const NavigateBar = (props) => {
  const {navigator} = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const changeTab = (tabName) => {
    dispatch({type: NAVIGATOR_TYPES.CHOOSE_TAB, payload: tabName});
    switch(tabName) {
      case 'Thống kê':
        navigate("/");
        window.scrollTo({top: 0});
        break;
      case 'Điểm danh':
        navigate("/attendance");
        window.scrollTo({top: 0});
        break;
      case 'Quay số':
        navigate("/wheel");
        window.scrollTo({top: 0});
        break;
      default:
    }
  }

  return(
    <Grid container
        rowSpacing={0} columnSpacing={0}
        alignItems='center'
        justifyContent='center'
        sx={{
          bgcolor:'#ffffff',
          width: {
            md:'100%'
          },
          height: {
            md:'50px',
          }
        }}
    >
        <Grid container item
            md={1}
        ></Grid>
        <Grid container item
            alignItems='center'
            xs={12} sm={12} md={11}
        >
                <Box sx={{ borderColor: 'divider', width: '100%',}}>
                    <Tabs sx={{width: '100%'}}
                      value={props.navigator}
                    >
                        {
                            props.tabs.map((tab) => (
                              <Tab key={tab} label={tab} value={tab}
                                onClick = {() => changeTab(tab)}
                                sx={{
                                  textTransform:'none',
                                  fontSize: {
                                    xs:'10px',
                                    sm:'12px',
                                    md:'14px',
                                  },
                                }}
                              />
                            ))
                        }
                    </Tabs>
                </Box>
        </Grid>
    </Grid>
  )
}

export default NavigateBar;