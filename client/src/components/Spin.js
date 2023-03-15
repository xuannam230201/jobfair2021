import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import Button from './Button'
import { STUDENT_TYPES, deleteWheelStudent } from '../redux/action/student'
import { useDispatch, useSelector } from 'react-redux'
import PrizeModal from './PrizeModal'
import { getDataAPI, postDataAPI } from '../utils/fetchData'
import { DARK_BLUE, PINK_BG } from '../utils'

const defaultData = [
  { option: '' },
  { option: '' },
  { option: '' },
  { option: '' },
  { option: '' },
  { option: '' },
  { option: '' },
  { option: '' },
  { option: '' },
  { option: '' },
]

const backgroundColors = [
  '#F7C8E0',
  '#DFFFD8',
  '#B4E4FF',
  '#95BDFF',
  '#CCD5AE',
  '#FAEDCD',
]

const textColors = ['#ffffff']

const Spin = (props) => {
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)
  const [student, setStudent] = useState(null)
  const [data, setData] = useState(defaultData)
  const [open, setOpen] = useState(false)

  const { wheelStudent } = useSelector((state) => state)

  const dispatch = useDispatch()

  useEffect(() => {
    let list = [...data]
    let length = props.joinList.length
    if (length > 0) {
      list[length - 1] = { option: `${props.joinList[length - 1]}` }
      setData(list)
    }
  }, [props.joinList])

  useEffect(() => {
    if (props.refresh) {
      setData(defaultData)
      props.setRefresh(false)
    }
  }, [props.refresh])

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }

  const handleStopSpin = async () => {
    setMustSpin(false)
    const id = data[prizeNumber].option
    const stu = wheelStudent.find((item) => item.id === id)
    setStudent(stu)
    setOpen(true)
    await postDataAPI(`students/prize/set`, { id: id, prize: props.curPrize })
    setTimeout(() => {
      props.setStudent(
        stu.id +
          (stu.surname === '' ? '' : ' - ') +
          stu.surname +
          ' ' +
          stu.firstname
      )
      let list = [...data]
      list = list.filter((item) => item.option !== id)
      setData(list)
    }, 5000)
  }

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={handleStopSpin}
            backgroundColors={backgroundColors}
            textColors={textColors}
            outerBorderWidth={3}
            radiusLineWidth={2}
          />
        </Grid>
        <Grid item>
          <Button onClick={handleSpinClick} width="100px" content="Quay" />
        </Grid>
      </Grid>
      <PrizeModal student={student} open={open} setOpen={setOpen} />
    </>
  )
}

export default Spin
