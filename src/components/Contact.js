import { TextField,Button } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <div className='App' style={{paddingTop:'10px'}}>
      <h2>Contact Me</h2>
        <br />
        <TextField variant='outlined' label='Name' /><br /><br />
        <TextField variant='outlined' label='Email' /><br /><br /> 
        <TextField variant='outlined' label='Number' /><br /><br /> 
        <TextField variant='outlined' label='Message' /><br /><br />  
        <Button variant='contained' color='secondary'>Contact</Button>
    </div>
  )
}

export default Contact