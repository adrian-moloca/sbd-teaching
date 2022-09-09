import React from 'react'
import Input from "@mui/material/Input";
import { styled } from "@mui/material/styles";

const MyInput = styled((props) => <Input disableUnderline={true} {...props}/>)(({ theme }) => (
  {
    backgroundColor: '#9889ba',
    color: 'white',
    borderColor: 'black',
    borderRadius: "10px",
    height: "55px",
    marginBottom: 10,
    padding: 10,
    minWidth: '80%',
    maxWidth:'1000px',
    
  }
));

export default MyInput;