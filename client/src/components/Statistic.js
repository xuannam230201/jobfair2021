import React, { useEffect, useState } from 'react'
import { Fade, Grid, Typography, Zoom } from '@mui/material'
import { Avatar } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { STUDENT_TYPES } from '../redux/action/student'
import { initLiveStudent } from '../redux/action/student'
import { getDataAPI } from '../utils/fetchData'
import { DARK_BLUE, isOrganizer, stringName } from '../utils'

const Statistic = (props) => {
  const [curTime, setCurTime] = useState(new Date())

  const { liveStudent, count } = useSelector((state) => state)

  const dispatch = useDispatch()

  useEffect(async () => {
    const res = await getDataAPI(`students/count`)
    dispatch({ type: STUDENT_TYPES.COUNT_STUDENT, payload: res.data.number })
  }, [dispatch])

  useEffect(() => {
    const setDate = setInterval(() => {
      setCurTime(new Date())
    }, 1000)
    return () => {
      clearInterval(setDate)
    }
  }, [])

  return (
    <Grid
      container
      justifyContent="flex-start"
      alignItems="stretch"
      sx={{
        bgcolor: '#ECF2FF',
        width: '1000px',
      }}
      direction="row"
    >
      <Grid
        container
        item
        justifyContent="flex-start"
        alignItems="flex-start"
        md={5.9}
        sx={{
          bgcolor: '#ffffff',
        }}
        padding={1}
      >
        <Grid container spacing={1.3} direction="column">
          <Grid item>
            <Typography
              align="center"
              sx={{
                fontSize: {
                  md: '25px',
                },
                fontWeight: 'bold',
              }}
            >
              SINH VIÊN VỪA ĐIỂM DANH
            </Typography>
          </Grid>

          {liveStudent &&
            liveStudent.map((student, key) => {
              return (
                <Grid item key={student.id}>
                  {key === 0 ? (
                    <Zoom in={true}>
                      <Typography
                        sx={{
                          fontSize: {
                            md: '20px',
                          },
                          color: `${key === 0 ? '#95BDFF' : '#000000'}`,
                        }}
                      >
                        {stringName(student)}
                      </Typography>
                    </Zoom>
                  ) : (
                    <Fade in={true}>
                      <Typography
                        sx={{
                          fontSize: {
                            md: '20px',
                          },
                          color: `${
                            key === 0
                              ? '#95BDFF'
                              : isOrganizer(student)
                              ? DARK_BLUE
                              : 'black'
                          }`,
                        }}
                      >
                        {stringName(student)}
                      </Typography>
                    </Fade>
                  )}
                </Grid>
              )
            })}
        </Grid>
      </Grid>
      <Grid container item md={0.2}></Grid>
      <Grid
        container
        item
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        md={5.9}
        rowSpacing={2}
      >
        <Grid container item direction="column">
          <Grid
            item
            sx={{
              bgcolor: '#ffffff',
            }}
            padding={1}
          >
            <Typography
              align="center"
              sx={{
                fontSize: {
                  md: '25px',
                },
                fontWeight: 'bold',
              }}
            >
              THỜI GIAN HIỆN TẠI
            </Typography>
          </Grid>
          <Grid
            container
            item
            // sx={{
            //   bgcolor: '#ffffff',
            // }}
            padding={1}
            justifyContent="center"
            alignItems="center"
          >
            <Avatar
              sx={{
                width: {
                  md: '350px',
                },
                height: {
                  md: '150px',
                },
                bgcolor: props.bgCircle,
                fontSize: '56px',
                color: props.imageColor,
                fontWeight: 'bold',
              }}
              variant="square"
            >
              {(curTime.getHours() >= 10
                ? curTime.getHours()
                : '0' + curTime.getHours()) +
                ':' +
                (curTime.getMinutes() >= 10
                  ? curTime.getMinutes()
                  : '0' + curTime.getMinutes()) +
                ':' +
                (curTime.getSeconds() >= 10
                  ? curTime.getSeconds()
                  : '0' + curTime.getSeconds())}
            </Avatar>
          </Grid>
        </Grid>
        <Grid container item direction="column">
          <Grid
            item
            sx={{
              bgcolor: '#ffffff',
            }}
            padding={1}
            paddingBottom="20px"
          >
            <Typography
              align="center"
              sx={{
                fontSize: {
                  md: '25px',
                },
                fontWeight: 'bold',
              }}
            >
              THỐNG KÊ
            </Typography>
          </Grid>
          <Grid
            container
            item
            direction="row"
            sx={{
              bgcolor: '#ffffff',
            }}
          >
            <Grid
              item
              container
              md={6}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Avatar
                sx={{
                  width: {
                    md: '150px',
                  },
                  height: {
                    md: '150px',
                  },
                  bgcolor: props.bgCircle,
                  fontSize: '56px',
                  color: props.imageColor,
                  fontWeight: 'bold',
                }}
              >
                {count}
              </Avatar>
              <Typography
                alignSelf="center"
                sx={{
                  width: '100%',
                  fontSize: {
                    xs: '12px',
                    sm: '16px',
                    md: '20px',
                  },
                  textAlign: 'center',
                }}
              >
                Sinh viên tham gia
              </Typography>
            </Grid>
            <Grid
              item
              container
              md={6}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Avatar
                sx={{
                  width: {
                    md: '150px',
                  },
                  height: {
                    md: '150px',
                  },
                  bgcolor: props.bgCircle,
                  fontSize: '56px',
                  color: props.imageColor,
                  fontWeight: 'bold',
                }}
              >
                {48}
              </Avatar>
              <Typography
                alignSelf="center"
                sx={{
                  width: '100%',
                  fontSize: {
                    xs: '12px',
                    sm: '16px',
                    md: '20px',
                  },
                  textAlign: 'center',
                }}
              >
                Doanh nghiệp tham gia
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Statistic
