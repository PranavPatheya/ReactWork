import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



const About = () => {
  return (
    <div>
    
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          <Button style={{
          borderRadius: 35,
          backgroundColor: "#ff6600",
          fontSize: "12px"
          }}
          color="inherit"><Link to="/"> Home </Link></Button>
          &nbsp;
          &nbsp;
          <Button style={{
          borderRadius: 35,
          backgroundColor: "#ff6600",
          fontSize: "12px"
          }}
          color="inherit"><Link to="/About"> About </Link></Button>
          &nbsp;
          &nbsp;
          <Button style={{
          borderRadius: 35,
          backgroundColor: "#ff6600",
          fontSize: "12px"
          }}
          color="inherit"><Link to="/Form"> Form </Link></Button>
          &nbsp;
          </Typography>
          
          
          
        </Toolbar>
      </AppBar>
    </Box>
    <Typography><center><h1>About</h1></center>
        <h2>Patheya ("पाथेय" - Sanskrit) word literally means, supportive provisions made for a journey.</h2>
        <h3>Here at Patheya, this is exactly what we have our motive to give all 
            technological supportive provisions and consultations to our valued 
            customers in the journey of their Products. We are a startup working 
            with esteemed clients all across India and Globe, who are supported 
            by our enthusiast team members.We are a team of highly skilled professionals 
            that has enabled successful execution of projects from various sectors like Fintech, 
            Education, Social Networking, Mentoring, Hospitality, E-Commerce, Industrial Services, 
            various NGOs etc. Our ‘Technology for Everyone’ policy made us to be in client’s shoe to 
            think about things differently and assist client to accompany them technologically to reach their goals.</h3></Typography>
    
  </div>
  )
}

export default About
