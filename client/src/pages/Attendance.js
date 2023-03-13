import React from "react";
import TitleBar from '../components/TitleBar';
import SubTitleBar from '../components/SubTitleBar';
import Search from '../components/Search';
import InfoBox from '../components/InfoBox';
import { Grid } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

const Attendance = () => {
  const [buttonIn, setButtonIn] = useState(true);

  const {student, attendance} = useSelector(state => state);

  const {inCheck, outCheck} = useSelector(state => state.alert);

  const password = localStorage.getItem('password');

  if (password !== 'nh2') {
    return <></>
  }

  return (
    <>
      {
        buttonIn 
        ? <Grid container 
          direction='column'
          justifyContent='center'
          alignItems='center'
          rowSpacing={1.5}
          sx={{
            width: '100%',
          }}
        >
          <Grid item>
            <TitleBar circleColor="#1E4AE8" 
              title="ĐIỂM DANH SINH VIÊN"
              type="attendance"
              buttonIn={buttonIn}
              setButtonIn={setButtonIn}
            />
          </Grid>
          <Grid item>
            <SubTitleBar content={`${buttonIn ? 'ĐIỂM DANH SINH VIÊN VÀO' : 'ĐIỂM DANH SINH VIÊN RA'}`} />  
          </Grid>
          <Grid item>
            <Search studentIn={buttonIn}/>  
          </Grid>
          <Grid item>
            <InfoBox 
              student={student[0]}
              students={student}
              alert={inCheck}
            />  
          </Grid>
        </Grid>
        : <Grid container 
          direction='column'
          justifyContent='center'
          alignItems='center'
          rowSpacing={1.5}
          sx={{
            width: '100%',
          }}
        >
          <Grid item>
            <TitleBar circleColor="#1E4AE8" 
              title="ĐIỂM DANH SINH VIÊN"
              type="attendance"
              buttonIn={buttonIn}
              setButtonIn={setButtonIn}
            />
          </Grid>
          <Grid item>
            <SubTitleBar content={`${buttonIn ? 'ĐIỂM DANH SINH VIÊN VÀO' : 'ĐIỂM DANH SINH VIÊN RA'}`} />  
          </Grid>
          <Grid item>
            <Search studentIn={buttonIn} />  
          </Grid>
          <Grid item>
            <InfoBox 
              student={attendance[0]}
              students={attendance}
              alert={outCheck}
            />  
          </Grid>
        </Grid>
      }
    </>
    
  )
}

export default Attendance;