import React from "react";
import MUIButton from '@mui/material/Button';


const Button = (props) => {
  return (
    <MUIButton
      variant="contained"
      sx={{
        bgcolor: props.bgColor,
        color: props.color,
        width: {
          md: `${props.width ? props.width : '200px'}`,
        },
        height: {
          md: '35px',
        },
        textTransform: 'none'
      }}
      onClick={props.onClick}
    >
      {props.content}
    </MUIButton>
  )
}

export default Button;