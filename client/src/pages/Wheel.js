import React, { useState, useEffect, useRef } from 'react'
import { Grid, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import TitleBar from '../components/TitleBar'
import SpinWheel from '../components/SpinWheel'
import { STUDENT_TYPES, getWheelStudent } from '../redux/action/student'
import { PINK_BG } from '../utils'

const Wheel = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getWheelStudent())
  }, [])

  const password = localStorage.getItem('password')

  if (password !== 'nh2') {
    return <></>
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      rowSpacing={1.5}
      sx={{
        width: '100%',
      }}
    >
      <Grid item>
        <TitleBar
          circleColor={PINK_BG}
          title="QUAY SỐ TRÚNG THƯỞNG"
          type="wheel"
        />
      </Grid>
      <Grid item>
        <SpinWheel />
      </Grid>
    </Grid>
  )
}

export default Wheel
