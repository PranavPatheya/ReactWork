import React, { useEffect } from 'react'
import { Box, Button, Checkbox, Container, CssBaseline, FormControl, FormControlLabel, FormGroup,  FormLabel, InputLabel, Link, MenuItem,
     Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import { useState } from "react";
import Confirmation from './Confirmation';


const Form=(props)=> {
    const[firstname, setFirstName]=useState("" );
    const[middlename, setMiddleName]=useState("" );
    const[lastname, setLastName]=useState("" );
    const [gender, setGender]=useState("" );
    const [age, setAge]=useState(" ");
    const[DeveloperIn,setCourse]=useState(" ");
    // const[checked,setChecked]=useState(" ");
    const [coffee, setCheckBox1] = useState();
    const[coffee2, setCheckBox2]=useState();
    const[coffee3, setCheckBox3]=useState();
    const[coffee4, setCheckBox4]=useState();
    //  const[label,setLabel]=useState("");

     const [completeForm, setCompleteForm]=useState( );
     const[formToPropagate, setFormToPropagate]=useState( );

    const onFirstNameChange= (event) =>{
        // console.log('event>>',event.target.value);
        setFirstName(event.target.value);
        const form={...completeForm};
        form.firstname=event.target.value;
        setCompleteForm(form);
}; 
const onChangeMiddleName = (event) =>{
    // console.log('event>>',event.target.value);
    setMiddleName(event.target.value);
    const form={...completeForm};
    form.middlename=event.target.value;
    setCompleteForm(form);
};
const onChangeLastName = (event) =>{
    // console.log('event>>',event.target.value);
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

const handleDevpChange=(event)=>{
    setCourse(event.target.value)
    const form={...completeForm};
    form.DeveloperIn=event.target.value;
    setCompleteForm(form);
};

 const handleSubmit=()=>{
   console.log(completeForm);
   setFormToPropagate(completeForm);
  };

  const onCheckBox1Change = (event) => {
    setCheckBox1(event.target.value);
    const form = { ...completeForm };
    form.coffee = event.target.value;

    setCompleteForm(form);
}
const onCheckBox2Change = (event) => {
    setCheckBox2(event.target.value);
    const form = { ...completeForm };
    form.coffee2 = event.target.value;

    setCompleteForm(form);
}

const onCheckBox3Change = (event) => {
    setCheckBox3(event.target.value);
    const form = { ...completeForm };
    form.coffee3 = event.target.value;

    setCompleteForm(form);
}
const onCheckBox4Change = (event) => {
    setCheckBox4(event.target.value);
    const form = { ...completeForm };
    form.coffee4 = event.target.value;

    setCompleteForm(form);
}

 useEffect(() => {
    setGender('male');
    setAge(20);
}, [setGender]);

return (
    <>
      <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md">
             {/* <Typography variant='h3'>Form</Typography> */}
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
                <Box sx={{ display: 'flex' }}>
                    <FormControl sx={{ width:300,marginLeft:50 }} component="fieldset" variant="standard">
                    <FormLabel>Coffee I Like</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox value="coffee " onClick={onCheckBox1Change} name="Espresso" /> } label="Espresso" />
                        <FormControlLabel control={<Checkbox value="coffee2 "onClick={onCheckBox2Change}name="Cappachinoo" />}label="Cappuccino"/>
                        <FormControlLabel control={<Checkbox value="coffee3 "onClick={onCheckBox3Change}name="Flatwhite" />}label="Flat white"/>
                        <FormControlLabel control={<Checkbox value="coffee4 " onClick={onCheckBox4Change} name="Longblack" /> } label="Long black"/>
                    </FormGroup>
                    </FormControl>
                </Box>
                </Box><br />
                  {/* <InputLabel id="  ">Age</InputLabel> */}
                  <FormControl sx={{width:300}}>
                  <InputLabel id="  ">Age</InputLabel>
      
                  <Select
                  
                   labelId="Age " id="Age" label="Age" value={age} onChange={handleAgeChange}>
                       <MenuItem value={10}>10</MenuItem>
                       <MenuItem value={20}>20</MenuItem>
                       <MenuItem value={30}>30</MenuItem>     
                  </Select>
                  <h5>10,20,30 etc.. option</h5> 

                    <FormControl sx={{width:300,marginLeft:60}}>
                    <InputLabel id=" ">DeveloperIn</InputLabel>
                  <Select 
                  labelId="DeveloperIn" 
                  id="DeveloperIn" 
                  label="DeveloperIn" 
                  value={DeveloperIn} 
                  onChange={handleDevpChange}
                  >  
                       <MenuItem value={DeveloperIn}>UI</MenuItem>
                       <MenuItem value={DeveloperIn}>DataBase</MenuItem>
                       <MenuItem value={DeveloperIn}>DevOps</MenuItem>
                       <MenuItem value={DeveloperIn}>API</MenuItem>
                     
                  </Select>
                  <h5>UI,API,DataBase,DevOps Option...</h5>
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
                    </a>


                   
                  </FormControl>
              </FormControl>
  
  
             
             <Box sx={{marginY: 2,display: "flex",justifyContent: "flex-end",}}>
             <Button variant="contained" onClick={handleSubmit} >SUBMIT</Button> 

             </Box>
          </Box>
          </Container><br/>
               <Confirmation form ={formToPropagate}/> 
                
      </React.Fragment>
    </> 
      
    );
  };
  export default Form;