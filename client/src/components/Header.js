import React from 'react'
import { Grid } from '@mui/material'

const Header = () => {
  return (
    <Grid
      container
      rowSpacing={0}
      columnSpacing={0}
      sx={{
        width: {
          md: '100%',
        },
        // height: {
        //   md: '80px',
        // },
        height: '80px',
        backgroundImage: "url('/images/header.png')",
        backgroundSize: '30% ',
        marginTop: '20px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    ></Grid>
  )
}

export default Header
