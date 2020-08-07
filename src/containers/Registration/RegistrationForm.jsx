import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  makeStyles,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  FormControl,
} from "@material-ui/core";
import DaysChecklist from "./DaysChecklist";
import InterestsChecklist from "./InterestsChecklist";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  button: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
  terms: {
    backgroundColor: "#f6d60e",
  },
  formControl: {
    margin: theme.spacing(3),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const RegistrationForm = () => {
  const classes = useStyles();
  const [allValues, setAllValues] = React.useState({
    firstName: "",
    lastName: "",
    address: "",
    postcode: "",
    mobile: "",
    homeNumber: "",
    email: "",
    dob: "",
    availability: "",
    interests: "",
    specialSkills: "",
    disability: "",
    terms: false,
  });
  const { terms } = allValues;
  const error = terms === false;
  const handleChange = (event) => {
    setAllValues({
      ...allValues,
      [event.target.name]: event.target.value || event.target.checked,
    });
  };
  const submit = (event) => {
    event.preventDefault();
    const payload = { ...allValues };
    Axios({
      url: "hosted-backend-url/volunteers",
      method: "POST",
      data: payload,
    })
      .then((res) => {
        console.log(res);
      })
      .then(() => {
        setAllValues({
          firstName: "",
          lastName: "",
          address: "",
          postcode: "",
          mobile: "",
          homeNumber: "",
          email: "",
          dob: "",
          availability: "",
          interests: "",
          specialSkills: "",
          disability: "",
          terms: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={submit}>
      <Grid container spacing={3} justify="space-evenly">
        <Grid item xs={12}>
          <Typography variant="h2" align="center">
            Volunteer registration
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="first-name"
            name="firstName"
            label="First Name"
            variant="outlined"
            value={allValues.firstName}
            onChange={handleChange}
            placeholder="e.g. Tom"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="last-name"
            name="lastName"
            value={allValues.lastName}
            onChange={handleChange}
            label="Last Name"
            variant="outlined"
            placeholder="e.g. Smith"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="address"
            name="address"
            value={allValues.address}
            onChange={handleChange}
            label="Address"
            variant="outlined"
            placeholder="e.g. 2 Beckside Close"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="postcode"
            name="postcode"
            value={allValues.postcode}
            onChange={handleChange}
            label="Postcode"
            variant="outlined"
            placeholder="e.g. DN35 0SU"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="mobile"
            name="mobile"
            value={allValues.mobile}
            onChange={handleChange}
            label="Mobile"
            variant="outlined"
            placeholder="e.g. 085 6587 1512"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="home-number"
            name="homeNumber"
            value={allValues.homeNumber}
            onChange={handleChange}
            label="Home number"
            placeholder="e.g. 011 6557 1512"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="email"
            name="email"
            value={allValues.email}
            onChange={handleChange}
            label="Email"
            variant="outlined"
            type="email"
            placeholder="e.g. tsmith@gmail.com"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="date"
            name="dob"
            onChange={handleChange}
            variant="outlined"
            label="Date of Birth"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

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
        <Grid item xs={12}>
          <Typography>
            Do you have any special/relevant skills or qualifications? Please
            specify:
          </Typography>
          <TextField
            id="special-skills"
            name="specialSkills"
            value={allValues.specialSkills}
            onChange={handleChange}
            label="Any special skills or qualifications"
            variant="outlined"
            placeholder="Please provide any special/relavant skills or qualifications..."
            rows={4}
            fullWidth
            multiline
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Do you consider yourself to have a disability? If yes, please
            specify:
          </Typography>
          <TextField
            id="disability"
            name="disability"
            value={allValues.disability}
            onChange={handleChange}
            label="Special needs or disability"
            variant="outlined"
            placeholder="Please provide any necessary detail..."
            rows={4}
            fullWidth
            multiline
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Please feel free to send a copy of your CV separately. This will
            help us to understand how your skill sets may best fit our project.
            You can send your CV to: enquiries@positiveactivities.org.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            href="http://www.positiveactivities.org/privacy-policy/"
            className={classes.terms}
          >
            Positive Activites Privacy Policy, Terms and Conditions
          </Button>
        </Grid>
        <Grid item xs={12}>
          <FormControl
            required
            error={error}
            component="fieldset"
            className={classes.formControl}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={terms}
                  onChange={handleChange}
                  name="terms"
                />
              }
              label="Do you agree to the Positive Activities Privacy Policy and Terms and Conditions linked above? *"
            />
            <FormHelperText>
              Please read the terms and conditions.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Button className={classes.button}>Submit</Button>
      </Grid>
    </form>
  );
};

export default RegistrationForm;
