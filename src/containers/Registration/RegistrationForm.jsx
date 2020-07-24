import React from "react";
import {
  Grid,
  TextField,
  Typography,
  FormGroup,
  FormLabel,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  FormControl,
  makeStyles,
} from "@material-ui/core";
import DaysChecklist from "./DaysChecklist";
import InterestsChecklist from "./InterestsChecklist";

const RegistrationForm = () => {
  return (
    <form>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <TextField
            required
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="e.g. Tom"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <TextField
            required
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="e.g. Smith"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <TextField
            required
            id="address"
            label="Address"
            variant="outlined"
            placeholder="e.g. 2 Beckside Close"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <TextField
            required
            id="postcode"
            label="Postcode"
            variant="outlined"
            placeholder="e.g. DN35 0SU"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <TextField
            required
            id="mobile"
            label="Mobile"
            variant="outlined"
            placeholder="e.g. 085 6587 1512"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <TextField
            id="alternative-number"
            label="Alternative number"
            placeholder="e.g. 011 6557 1512"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <TextField
            required
            id="email"
            label="Email"
            variant="outlined"
            placeholder="e.g. tsmith@gmail.com"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <TextField
            required
            id="dob"
            label="Date of Birth"
            placeholder="e.g. 07/03/1994"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography>
            Which days are you usually available to volunteer?
          </Typography>
          <DaysChecklist />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>
            Which areas are you interested in volunteering?
          </Typography>
          <InterestsChecklist />
        </Grid>
      </Grid>
    </form>
  );
};

export default RegistrationForm;
