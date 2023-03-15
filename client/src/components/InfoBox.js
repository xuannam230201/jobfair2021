import React from 'react'
import { Grid, Fade, Zoom } from '@mui/material'
import { Typography } from '@mui/material'
import Warning from './Warning'
import { BLUE_BG, DARK_BLUE, isOrganizer, stringName } from '../utils'

const InfoBox = (props) => {
  return (
    <Grid
      container
      alignItems="stretch"
      direction="row"
      sx={{
        bgcolor: '#F0F0F0',
        width: {
          md: '1000px',
        },
      }}
    >
      <Grid
        item
        container
        justifyContent="flex-start"
        alignItems="flex-start"
        direction="column"
        md={5.9}
        paddingLeft={2}
        paddingTop={2}
        bgcolor="#ffffff"
      >
        <Grid item justifyContent="flex-start" alignItems="center">
          <Typography
            sx={{
              fontSize: {
                md: '25px',
                fontWeight: 'bold',
              },
            }}
          >
            THÔNG TIN SINH VIÊN
          </Typography>
        </Grid>
        {props.alert ? (
          <>
            <Grid
              item
              container
              justifyContent="center"
              alignItems="center"
              sx={{
                height: '50%',
              }}
            >
              <Warning action="Không tìm thấy" content="THÔNG TIN SINH VIÊN" />
            </Grid>
          </>
        ) : (
          <>
            <Grid item justifyContent="flex-start" alignItems="center">
              <Typography
                sx={{
                  fontSize: {
                    md: '20px',
                  },
                  color: '#8C8C8C',
                }}
              >
                Họ và tên
              </Typography>
            </Grid>
            <Grid item justifyContent="flex-start" alignItems="center">
              <Typography
                sx={{
                  fontSize: {
                    md: '20px',
                  },
                }}
              >
                {props.student && props.student.surname !== '' ? (
                  props.student.surname + ' ' + props.student.firstname
                ) : (
                  <span style={{ color: '#ffffff' }}>a</span>
                )}
              </Typography>
            </Grid>
            <Grid item justifyContent="flex-start" alignItems="center">
              <Typography
                sx={{
                  fontSize: {
                    md: '20px',
                  },
                  color: '#8C8C8C',
                }}
              >
                Mã số sinh viên
              </Typography>
            </Grid>
            <Grid item justifyContent="flex-start" alignItems="center">
              <Typography
                sx={{
                  fontSize: {
                    md: '20px',
                  },
                }}
              >
                {props.student ? (
                  props.student.id
                ) : (
                  <span style={{ color: '#ffffff' }}>a</span>
                )}
              </Typography>
            </Grid>
            <Grid item justifyContent="flex-start" alignItems="center">
              <Typography
                sx={{
                  fontSize: {
                    md: '20px',
                  },
                  color: '#8C8C8C',
                }}
              >
                Lớp
              </Typography>
            </Grid>
            <Grid item justifyContent="flex-start" alignItems="center">
              <Typography
                sx={{
                  fontSize: {
                    md: '20px',
                  },
                }}
              >
                {props.student && props.student.surname !== '' ? (
                  props.student.class
                ) : (
                  <span style={{ color: '#ffffff' }}>a</span>
                )}
              </Typography>
            </Grid>
            <Grid item justifyContent="flex-start" alignItems="center">
              <Typography
                sx={{
                  fontSize: {
                    md: '20px',
                  },
                  color: '#8C8C8C',
                }}
              >
                Niên khóa
              </Typography>
            </Grid>
            <Grid item justifyContent="flex-start" alignItems="center">
              <Typography
                sx={{
                  fontSize: {
                    md: '20px',
                  },
                }}
              >
                {props.student && props.student.surname !== '' ? (
                  props.student.year
                ) : (
                  <span style={{ color: '#ffffff' }}>a</span>
                )}
              </Typography>
            </Grid>
          </>
        )}
      </Grid>
      <Grid item container md={0.2}></Grid>
      <Grid
        item
        container
        justifyContent="flex-start"
        alignItems="flex-start"
        direction="column"
        md={5.9}
        paddingLeft={2}
        paddingTop={2}
        bgcolor="#ffffff"
        sx={{
          height: {
            md: '400px',
          },
        }}
      >
        <Grid item justifyContent="flex-start" alignItems="center">
          <Typography
            sx={{
              fontSize: {
                md: '25px',
                fontWeight: 'bold',
              },
            }}
          >
            SINH VIÊN ĐIỂM DANH THÀNH CÔNG
          </Typography>
        </Grid>
        {props.students.length > 0 &&
          props.students.map((item, key) => (
            <Grid
              item
              justifyContent="flex-start"
              alignItems="center"
              key={key}
            >
              {key === 0 ? (
                <Zoom in={true}>
                  <Typography
                    sx={{
                      fontSize: {
                        md: '20px',
                      },
                      color: isOrganizer(item) ? DARK_BLUE : 'black',
                    }}
                  >
                    {stringName(item)}
                  </Typography>
                </Zoom>
              ) : (
                <Fade in={true}>
                  <Typography
                    sx={{
                      fontSize: {
                        md: '20px',
                      },
                      color: isOrganizer(item) ? DARK_BLUE : 'black',
                    }}
                  >
                    {stringName(item)}
                  </Typography>
                </Fade>
              )}
            </Grid>
          ))}
      </Grid>
    </Grid>
  )
}

export default InfoBox
