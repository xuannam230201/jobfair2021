import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Grid } from '@mui/material'
import Header from './components/Header'
import Footer from './components/Footer'
import NavigateBar from './components/NavigateBar'
import HomePage from './pages/HomePage'
import Attendance from './pages/Attendance'
import Wheel from './pages/Wheel'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { NAVIGATOR_TYPES } from './redux/action/navigator'
import { SOCKET_TYPES } from './redux/reducers/socket'
import { STUDENT_TYPES, initLiveStudent } from './redux/action/student'

import io from 'socket.io-client'
import SocketClient from './SocketClient'

function App() {
  const { navigator, socket } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    const socket = io.connect('http://localhost:8000', {
      transports: ['websocket', 'polling', 'flashsocket'],
    })
    dispatch({ type: SOCKET_TYPES.SOCKET, payload: socket })
    return () => socket.close()
  }, [dispatch])

  useEffect(() => {
    const pathname = window.location.pathname
    switch (pathname) {
      case '/':
        dispatch({ type: NAVIGATOR_TYPES.CHOOSE_TAB, payload: 'Thống kê' })
        break
      case '/attendance':
        dispatch({ type: NAVIGATOR_TYPES.CHOOSE_TAB, payload: 'Điểm danh' })
        break
      case '/wheel':
        dispatch({ type: NAVIGATOR_TYPES.CHOOSE_TAB, payload: 'Quay số' })
        break
      default:
        dispatch({ type: NAVIGATOR_TYPES.CHOOSE_TAB, payload: 'Thống kê' })
        break
    }
  }, [navigator, dispatch])

  useEffect(() => {
    dispatch(initLiveStudent())
  }, [dispatch])

  return (
    <>
      <Router>
        {socket && <SocketClient />}
        <Grid
          container
          direction="column"
          rowSpacing={1}
          columnSpacing={0}
          alignItems="center"
          justifyContent="center"
          sx={{
            bgcolor: '#ECF2FF',
            width: '100%',
          }}
        >
          <Grid sx={{ width: '100%' }}>
            <Header />
          </Grid>
          <Grid item sx={{ width: '100%' }}>
            <NavigateBar
              navigator={navigator}
              tabs={['Thống kê', 'Điểm danh', 'Quay số']}
            />
          </Grid>
          <Grid item sx={{ width: '100%' }}>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/attendance" element={<Attendance />} />
              <Route exact path="/wheel" element={<Wheel />} />
            </Routes>
          </Grid>
          <Grid item sx={{ width: '100%' }}>
            <Footer />
          </Grid>
        </Grid>
      </Router>
    </>
  )
}

export default App
