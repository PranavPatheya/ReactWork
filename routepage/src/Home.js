import { AppBar, Box, IconButton, Toolbar, Typography, Button, Avatar } from '@mui/material'
//import React from 'react'
import { Link } from 'react-router-dom'





const Home = () => {

  
  return (


    
    
    <>

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
          
          
          
          <Avatar alt="Pranav Kulkarni" src="" />
         
          
          
          
        </Toolbar>
      </AppBar>
    </Box>
    

    <Typography><h1><center>Web & Mobile Application
    Development -
    Pātheya-पाथेय
    </center></h1>
    


<Typography><center><h1>Form Information</h1></center></Typography>
    <div  
          style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>

    {
      localStorage.getItem("firstName")
    }
    <br></br>
    {
      localStorage.getItem("middleName")  
    }
    <br></br>
    {
      localStorage.getItem("lastName")
    }
    <br></br>
    {
      localStorage.getItem("gender") 
    }
    <br></br>
    {
      localStorage.getItem("age")  
    }  
    <br></br>
    {
      localStorage.getItem("courses")  
    }  
    <br></br>
    {
      localStorage.getItem("selectedCoffees")  
    }  
    </div>

     
    
    <Typography variant="h4" component="div">
      <center>
    We are the technology solutions<br/>
    providing company with highly skilled<br/>
    supporting resouces. 
    </center>    
    </Typography>
   



    </Typography>

    
   

    
    </>
    
  )
}


export default Home
