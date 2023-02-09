import React, { useEffect } from 'react'
import { AppBar, Box, Button, Checkbox, Container, CssBaseline, FormControl, FormControlLabel, FormGroup,  FormLabel, IconButton, InputLabel, MenuItem,
     Radio, RadioGroup, Select, TextField, Toolbar, Typography, } from '@mui/material';
import { useState } from "react";
import Confirmation from './Confirmation';

import { Link, useNavigate } from 'react-router-dom';
//  import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Form=(props)=> {

    const navigate = useNavigate();
    const[firstname, setFirstName]=useState("" );
    const[middlename, setMiddleName]=useState("" );
    const[lastname, setLastName]=useState("" );
    const [gender, setGender]=useState("" );
    const [age, setAge]=useState(" ");
    const [courses, setTechnology] = useState("");
    
    const[selectedCoffees, setSelectedCoffees] = useState([]);
    
    const [completeForm, setCompleteForm]=useState( );
    const[formToPropagate, setFormToPropagate]=useState( );
     

    const onFirstNameChange= (event) =>{
        setFirstName(event.target.value);
        const form={...completeForm};
        form.firstname=event.target.value;
        setCompleteForm(form);
}; 
const onChangeMiddleName = (event) =>{
    
    setMiddleName(event.target.value);
    const form={...completeForm};
    form.middlename=event.target.value;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    setCompleteForm(form);
};
const onChangeLastName = (event) =>{
    setLastName(event.target.value);
    const form={...completeForm};
    form.lastname=event.target.value;
    setCompleteForm(form);
}; 
const onGenderFieldChange=(event)=>{
    setGender(event.target.value);
    const form={...completeForm};
    form.gender=event.target.value;
    setCompleteForm(form);
};
const handleAgeChange=(event)=>{
    setAge(event.target.value)
    const form={...completeForm};
    form.age=event.target.value;
    setCompleteForm(form);
};

const handleDevloperChange = (event) => {
    setTechnology(event.target.value);
    const form = { ...completeForm }
    form.courses = event.target.value;
    setCompleteForm(form);
};

 const handleSubmit=()=>{
   console.log(completeForm);
   setFormToPropagate(completeForm);
  };

  const handleCoffeeChange = (event,type) => {
    //console.log('${type} value is - ${event.target.checked}');

    if (event.target.checked) {
        const temp = [...selectedCoffees];
        temp.push(type);
        setSelectedCoffees(temp);

        const form = { ...completeForm };
        form.selectedCoffees = temp;
        setCompleteForm(form);
    } else {
         
        const temp = [];
        selectedCoffees.forEach((coffee) => {
            if (coffee !== type) {
                temp.push(coffee);
            }
        });

        setSelectedCoffees(temp);
        const form = {...completeForm};
        form.selectedCoffees = temp;
        setCompleteForm(form);
    }  
};



useEffect(() => {
    localStorage.setItem("firstName", JSON.stringify(firstname))
    localStorage.setItem("middleName", JSON.stringify(middlename))
    localStorage.setItem("lastName", JSON.stringify(lastname))
    localStorage.setItem("gender", JSON.stringify(gender))
    localStorage.setItem("age", JSON.stringify(age))
    localStorage.setItem("courses", JSON.stringify(courses))
    localStorage.setItem("selectedCoffees", JSON.stringify(selectedCoffees))                 
});


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
          
          
          
          
        </Toolbar>
      </AppBar>
    </Box>
      <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md">
             
             <Box sx={{display:"flex", flexDirection:'column' ,padding:5,border:' 2px solid black'}} >
             <FormControl >
                  <Box sx={{height:"10px"}}/>
                  <Box sx={{bgcolor:"orange",display:'flex',flexDirection:'row',justifyContent:'center'}}>Addmission Form</Box><br />
                 
                 
                   <Box sx={{dispaly:'flex'}}>
                   &nbsp;
                   &nbsp;
                  <TextField  
                  id="demo-helper-text-aligned" 
                  label="FirstName" 
                  value={firstname} 
                  variant="outlined"  
                  onChange={onFirstNameChange}
                  />
                  
                  &nbsp;
                  &nbsp;
                  <TextField 
                  id="middlename" 
                  label="MiddleName"  
                  value={middlename} 
                  variant="outlined"  
                  onChange={onChangeMiddleName}
                  />
                   
                   &nbsp;
                   &nbsp;
                  <TextField id="lastname" 
                  label="LastName" 
                  value={lastname} 
                  variant="outlined" 
                  onChange={onChangeLastName} 
                  /> 
                  </Box><br />
                  
                <FormLabel id=" ">Gender</FormLabel>
                <Box sx={{display:'flex'}}>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" Value={gender} name="radio-buttons-group" onChange={onGenderFieldChange}>
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup><br />



                <FormControl sx={{width:300,marginLeft:60}}>
                <FormLabel sx={{color:''}} value={"coffee"} onChange>Coffee I Like</FormLabel>
                <Box sx={{ display: 'flex' }}>
                <FormGroup>
                    <FormControlLabel
                    control={
                    <Checkbox
                    onChange={(event) => handleCoffeeChange (event, "Espresso")}
                />  
                }
                label="Espresso"
                />
                <FormControlLabel
                    control={
                    <Checkbox
                    onChange={(event) => handleCoffeeChange (event, "Cappuccino")}
                />  
                }
                label="Cappuccino"
                />
                <FormControlLabel
                    control={
                    <Checkbox
                    onChange={(event) => handleCoffeeChange (event, "Flat White")}
                />  
                }
                label="Flat white"
                />
                <FormControlLabel
                    control={
                    <Checkbox
                    onChange={(event) => handleCoffeeChange (event, "Long black")}
                />  
                }
                label="Long black"
                />
                
                </FormGroup>
                
                





                </Box>
                </FormControl>
                </Box><br/>
                  
                  <FormControl sx={{width:300}}>
                  <InputLabel id="  ">Age</InputLabel>
      
                  <Select
                  
                   labelId="Age " id="Age" label="Age" value={age} onChange={handleAgeChange}>
                       <MenuItem value={10}>10</MenuItem>
                       <MenuItem value={20}>20</MenuItem>
                       <MenuItem value={30}>30</MenuItem>  
                         
                  </Select>
                  <h5>10,20,30 etc.. option</h5> 

                    
                  <FormControl sx={{ width: 300, marginLeft: 60 }}>
                        <InputLabel id=" ">Developer In</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={courses}
                        label="courses"
                        onChange={handleDevloperChange}
                        >
                                        <MenuItem value={"Database"}>Database</MenuItem>
                                        <MenuItem value={"API"}>API</MenuItem>
                                        <MenuItem value={"UI"}>UI</MenuItem>
                                        <MenuItem value={"Devops"}>Devops</MenuItem>
                     </Select>
                     <h5>Database,API.UI,Devops..</h5>
                     </FormControl>
                     


                    
                    
                    <a
                 href="https://patheya.tech/#services"
                    target="_blank"
                    rel="noreferrer"
                    >
                 <button>PatheyaTech Services</button>
                    </a>
                    &nbsp;
                    <a
                 href="https://patheya.tech/patheya-contact.html"
                    target="_blank"
                    rel="noreferrer"
                    >
                 <button>PatheyaTech Contact</button>
                 {/* <LinkedInIcon /> */}
                    </a>

                
                   
                  </FormControl>
              </FormControl>
  
  
             
             <Box sx={{marginY: 2,display: "flex",justifyContent: "flex-end",}}>
             <Button variant="contained" onClick={handleSubmit} >SUBMIT</Button> 

             </Box>


             <pre>{JSON.stringify(completeForm, null, 3)}</pre>



             <Box sx={{marginY: 1,display: "flex",justifyContent: "flex-left",}}>
             <Button variant="contained" 
             onClick={() =>  {
            navigate(-3);
            }}
            >
                Back
               </Button>
               </Box>



          </Box>
          </Container><br/>

               <Confirmation form ={formToPropagate}/> 
               
                
      </React.Fragment>
    </> 
      
    );
  };
  export default Form;