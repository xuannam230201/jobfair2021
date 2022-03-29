import React from "react";
import { Grid } from '@mui/material';
import { InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchStudent, completeStudent } from "../redux/action/student";

const Search = (props) => {

  const {socket} = useSelector(state => state);

  const dispatch = useDispatch();

  const search = async(e) => {
    const key = e.key;
    const value = e.target.value;
    if(key === 'Enter') {
      e.target.value = "";
      if(props.studentIn) dispatch(searchStudent(value, socket));
      else dispatch(completeStudent(value));
    }
  }

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
      <Grid container sx={{
          minWidth:'60%',
          width: {
              md:'600px'
          },
          height: {
              md:'50px'
          },
          border:2,
          borderRadius:'20px',
          alignItems:'center',
        }} 
      >

      <Grid container item
        justifyContent='center'
        alignItems='center'
        md={1}
      >
        <SearchIcon sx={{
          width: {
            display:'flex',
            md:'20px',
          },
          height: {
            md:'20px',
          },
        }}/>
      </Grid>
      <Grid container item
        justifyContent='flex-start'
        alignItems='center'
        md={11}
      >
        <InputBase
          placeholder='Tìm kiếm sinh viên'
          sx={{
            width: {
                md:'500px'
            },
            height: {
                md:'30px'
            },
            fontSize: {
                md:'18px'
            }
          }}
          onKeyPress = {search}
        />
      </Grid>
      </Grid>
    </Grid>
  )
}

export default Search;