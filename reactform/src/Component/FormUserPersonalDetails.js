import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { TextField, AppBar } from "@mui/material";
import ArrowForwardIcon from '@mui/material/ArrowForwardIcon';
import ArrowBackIcon from '@mui/material';

class FormPersonalDetails extends Component {
  render() {
    const { values, handleChange,back,continues } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" iconClassNameLeft />
          <TextField
            hintText="Enter Your Occupation"
            floatingLabelText="Occupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            hintText="Enter Your City"
            floatingLabelText="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
          <br />
          <TextField
            hintText="Enter Your Bio"
            floatingLabelText="Bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
          />
          <br />
          
          <ArrowBackIcon
            onClick={back}
            fontSize="large"
            className="nextMenu"
          />
          <ArrowForwardIcon
            onClick={continues}
            fontSize="large"
            className="nextMenu"
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default FormPersonalDetails;