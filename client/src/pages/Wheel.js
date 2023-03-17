import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import { useDispatch } from 'react-redux'
import TitleBar from '../components/TitleBar'
import SpinWheel from '../components/SpinWheel'
import { getWheelStudent } from '../redux/action/student'
import { DARK_BLUE } from '../utils'

const Wheel = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getWheelStudent())
  }, [])

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
          circleColor={DARK_BLUE}
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
