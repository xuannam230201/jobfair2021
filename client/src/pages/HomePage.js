import React from 'react'
import { Grid } from '@mui/material'
import TitleBar from '../components/TitleBar'
import Statistic from '../components/Statistic'
import { useSelector, useDispatch } from 'react-redux'

const HomePage = () => {
  const { socket } = useSelector((state) => state)

  return (
    <Grid
      container
      direction="column"
      // justifyContent="center"
      alignItems="center"
      rowSpacing={1.5}
      sx={{
        width: '100%',
      }}
    >
      <Grid item alignContent={'center'}>
        <TitleBar
          circleColor="#95BDFF"
          title="THỐNG KÊ SỰ KIỆN JOBFAIR 2021"
          type="homepage"
        />
      </Grid>
      <Grid item>
        <Statistic business={50} bgCircle="#ECF2FF" imageColor="#95BDFF" />
      </Grid>
    </Grid>
  )
}

export default HomePage
