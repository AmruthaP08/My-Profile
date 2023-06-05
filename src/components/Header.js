import { AppBar, StepLabel, Toolbar } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Common.css'

const Header = () => {
  const navigate=useNavigate();
  return (
    <div>
      <AppBar style={{backgroundColor:'cadetblue'}}>
        <Toolbar>
          <StepLabel style={{paddingLeft:'1100px',fontSize:'20px'}} onClick={()=>navigate('/home')}>Home</StepLabel>&nbsp;
          <StepLabel onClick={()=>navigate('/about')}>About</StepLabel>&nbsp;&nbsp;
          <StepLabel onClick={()=>navigate('/skill')}>Skills</StepLabel>&nbsp;&nbsp;
          <StepLabel onClick={()=>navigate('/edu')}>Education</StepLabel>&nbsp;&nbsp;
          <StepLabel onClick={()=>navigate('/contact')}>Contact</StepLabel>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header