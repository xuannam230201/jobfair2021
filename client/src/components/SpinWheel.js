import React, { useEffect, useState, useRef } from "react";
import { Grid, Typography, Avatar, Zoom, Fade, Grow } from "@mui/material";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import Spin from "./Spin";
import { getDataAPI, postDataAPI } from "../utils/fetchData";
import {STUDENT_TYPES, deleteWheelStudent} from '../redux/action/student';

const prize = [
  {type: 'S', color: '#4C9556'}, 
  {type: '1', color: '#FFB404'}, 
  {type: '2', color: '#A7A7AD'}, 
  {type: '3', color: '#824A02'}, 
  {type: '4', color: '#9a260c'}, 
] 

const SpinWheel = (props) => {
  const [joinList, setJoinList] = useState([]);
  const [list, setList] = useState([]);
  const [curCount, setCurCount] = useState(10);
  const [curPrize, setCurPrize] = useState(4);
  const [prizeList, setPrizeList] = useState(["", "", "", "", ""]);
  const [refresh, setRefresh] = useState(false);
  const [student, setStudent] = useState("");

  const {socket, wheelStudent} = useSelector(state => state);

  const dispatch = useDispatch();

  const count = useRef(0);

  useEffect(() => {
    let arr = [...prizeList];
    arr[curPrize] = student;
    setPrizeList(arr);
  }, [student])

  useEffect(async() => {
    const res = await getDataAPI(`students/prize`);
    const list = res.data.prizes;
    let resList = ["", "", "", "", ""];
    list.map(item => {
      resList[item.prize] = item.student.id + (item.student.surname === "" ? "" : " - ") + item.student.surname + " " + item.student.firstname;
    });
    setPrizeList(resList)
  }, [])

  useEffect(() => {
    let counter;
    if(curCount < 10) {
      counter = setInterval(() => {
        const size = wheelStudent.length;
        let arr = [...joinList];
        let value = Math.floor(Math.random() * 100);
        while(arr.includes(wheelStudent[value % size].id)) {
          value = Math.floor(Math.random() * 100);
        }
        arr[curCount] = wheelStudent[value % size].id;
        setJoinList(arr);
      }, 100);
      setTimeout(() => {
        count.current++;
        setCurCount(count.current);
      }, 1000);
    }
    setList(joinList)
    return () => {clearInterval(counter);}
  }, [curCount])


  const start = () => {
    setRefresh(true);
    if(joinList.length > 0) {
      dispatch(deleteWheelStudent(joinList));
    }
    if((joinList.length > 0 && wheelStudent.length - 10 < 10) || wheelStudent.length < 10) {
      setJoinList([]);
      return;
    }
    if(count.current >= 10) {
      count.current = 0;
      setJoinList([]);
    }
    setCurCount(count.current);
  };

  const choosePrize = (item) => {
    setCurPrize(item);
  }

  return(
    <Grid container
      justifyContent='flex-start'
      alignItems='stretch'
      sx={{
        bgcolor:'#f0f0f0',
        width:'1000px'
      }}
      direction='row'
    >
      <Grid container item
        direction='column'
        justifyContent='flex-start'
        alignItems='flex-start'
        md={4.9}
        rowSpacing = {2}
      >
        <Grid container item
          direction='column'
        >
          <Grid container item
            direction='row'
            sx={{
              bgcolor:'#ffffff'
            }}
            alignItems='center'
          >
            <Grid container item sx={{
              bgcolor:'#ffffff'
            }}
              padding={1}
              md={8}
            >
              <Typography
                sx={{
                  fontSize: {
                    md:'25px'
                  },
                  fontWeight: 'bold',
                }}
              >
                MSSV ĐƯỢC CHỌN
              </Typography>  
            </Grid>
            <Grid container item sx={{
              bgcolor:'#ffffff'
            }}
              padding={1}
              md={4}
              justifyContent='flex-end'
            >
              <Button
                content="Bắt đầu"
                bgColor="#4A9456"
                color="#FFFFFF"
                width="100px"
                onClick={start}
              /> 
            </Grid>
          </Grid>
          <Grid container item
            direction='column'
            sx={{
              bgcolor:'#ffffff',
              height: '130px',
            }}
          >
            <Grid container
              direction='row'
              sx={{
                height: {
                  md:'40px',
                }
              }}
              alignItems='center'
            >
            {
              joinList.slice(0,4).map((item, key) => (
                <Grid item container
                  key={item}
                  md={3}
                >
                  <Typography key={item}
                    sx={{
                      width: '100%',
                      fontSize: {
                          xs: '12px',
                          sm: '16px',
                          md: '16px',
                      },
                      textAlign: 'center',
                      color: `${key === joinList.length - 1 ? '#4C9556' : '#000000'}`
                    }}
                  >
                    {item}
                  </Typography>
                </Grid>
              ))
            }
            </Grid>
            <Grid container
              direction='row'
              sx={{
                height: {
                  md:'40px',
                }
              }}
              alignItems='center'
            >
            {
              joinList.slice(4,8).map((item, key) => (
                <Grid item container
                  key={item}
                  md={3}
                >
                  <Typography key={item}
                    sx={{
                      width: '100%',
                      fontSize: {
                          xs: '12px',
                          sm: '16px',
                          md: '16px',
                      },
                      textAlign: 'center',
                      color: `${key === joinList.length - 5 ? '#4C9556' : '#000000'}`
                    }}
                  >
                    {item}
                  </Typography>
                </Grid>
              ))
            }
            </Grid>
            <Grid container
              direction='row'
              sx={{
                height: {
                  md:'40px',
                }
              }}
              alignItems='center'
            >
            {
              joinList.slice(8,10).map((item, key) => (
                <Grid item container
                  key={item}
                  md={3}
                >
                  <Typography key={item}
                    sx={{
                      width: '100%',
                      fontSize: {
                          xs: '12px',
                          sm: '16px',
                          md: '16px',
                      },
                      textAlign: 'center',
                      color: `${key === joinList.length - 9 ? '#4C9556' : '#000000'}`
                    }}
                  >
                    {item}
                  </Typography>
                </Grid>
              ))
            }
            </Grid>
          </Grid>
        </Grid>
        <Grid container item
          direction='column'
        >
          <Grid item sx={{
            bgcolor:'#ffffff'
          }}
            padding={1}
          >
            <Typography
              sx={{
                fontSize: {
                  md:'25px'
                },
                fontWeight: 'bold',
              }}
            >
              GIẢI THƯỞNG
            </Typography>  
          </Grid>
          {
            [0,1,2,3,4].map(item => (
              <Grid container item sx={{
                bgcolor:'#ffffff',
                height: {
                  md: '60px'
                }
              }}
                key={item}
                padding={1}
              >
                <Grid item
                  md={1}
                  justifyContent='center'
                >
                  <Avatar 
                    sx={{
                      width: {
                        md:'30px',
                      },
                      height: {
                        md:'30px',
                      },
                      fontSize: '20px',
                      bgcolor: `${curPrize === item ? prize[item].color : '#000000'}`
                    }}
                    onClick={() => choosePrize(item)}
                  >
                    {prize[item].type}
                  </Avatar>
                </Grid>
                <Grid item
                  md={11}
                >    
                  <Grow in={true}
                    timeout={1000}
                  >
                  <Typography 
                    sx={{
                      fontSize: {
                          md: '20px',
                      },
                    }}
                  >
                    {prizeList[item]}
                  </Typography>
                  </Grow>
                </Grid>
              </Grid>
            ))
          } 
        </Grid>
      </Grid>
      <Grid container item
        md={0.2}
      ></Grid>
      <Grid container item
        justifyContent='flex-start'
        alignItems='flex-start'
        md={6.9}
        sx={{
          bgcolor: '#ffffff',
        }}
        padding={1}
      >
        <Grid container
          spacing={1.3}
          direction='column'
        >
          <Grid item>
            <Typography
              sx={{
                fontSize: {
                  md: '25px',
                },
                fontWeight: 'bold',
              }}
            >
              VÒNG QUAY MAY MẮN
            </Typography>  
          </Grid>
          <Grid item container
            justifyContent='center'
            alignItems='center'
            sx={{
              width:'100%',
            }}
          >
            <Spin
              joinList={list}
              setJoinList={setJoinList}
              refresh={refresh}
              setRefresh={setRefresh}
              curPrize={curPrize}
              student={student}
              setStudent={setStudent}
              prizeList={setPrizeList}
            />
          </Grid>
        </Grid>
      </Grid>
      </Grid>
  )
}

export default SpinWheel;