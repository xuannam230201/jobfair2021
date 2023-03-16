import React from 'react'
import { Grid } from '@mui/material'
import TitleBar from '../components/TitleBar'
import Statistic from '../components/Statistic'
import { useSelector, useDispatch } from 'react-redux'
import { BLUE_ISH_BG, DARK_BLUE } from '../utils'

const HomePage = () => {
  const { socket } = useSelector((state) => state)

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      rowSpacing={1.5}
      sx={{
        width: '100%',
      }}
    >
      <Grid item alignContent={'center'}>
        <TitleBar
          circleColor={DARK_BLUE}
          title="THỐNG KÊ SỰ KIỆN JOBFAIR 2021"
          type="homepage"
        />
      </Grid>
      <Grid item>
        <Statistic business={50} bgCircle={BLUE_ISH_BG} imageColor={DARK_BLUE} />
      </Grid>
    </Grid>
  )
}

export default HomePage
