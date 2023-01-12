import React, { Component } from "react";
import MuiThemeProvider from "@mui/material/ThemeProvider";
import { AppBar, ListItem, List } from "@mui/material";
import ArrowForwardIcon from "@mui/material/ArrowForwardIcon";
import ArrowBackIcon from "@mui/material/ArrowBackIcon";

export class Confirm extends Component {
  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
      continues,back
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Details" iconClassNameLeft />
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Occupation" secondaryText={occupation} />
            <ListItem primaryText="City" secondaryText={city} />
            <ListItem primaryText="Bio" secondaryText={bio} />
          </List>
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
export default Confirm;