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
  FormGroup,
  FormLabel,
} from "@material-ui/core";
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
  const [interests, setInterests] = React.useState({
    Activities: false,
    Conservation: false,
    Energy: false,
    Gym: false,
  });
  const [availability, setAvailability] = React.useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
    All: false,
  });
  const [allValues, setAllValues] = React.useState({
    firstName: "",
    lastName: "",
    address: "",
    postcode: "",
    mobile: "",
    homeNumber: "",
    email: "",
    dob: "",
    specialSkills: "",
    disability: "",
    terms: false,
  });
  const { terms } = allValues;
  const { Activities, Conservation, Energy, Gym } = interests;
  const {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
    All,
  } = availability;
  const errorTerms = terms === false;
  const errorInterests =
    [Activities, Conservation, Energy, Gym].filter((activity) => activity)
      .length < 1;
  const errorAvailability =
    [
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
      Sunday,
      All,
    ].filter((day) => day).length < 1;
  const handleChange = (event) => {
    setAllValues({
      ...allValues,
      [event.target.name]: event.target.value || event.target.checked,
    });
  };
  const handleAvailChange = (event) => {
    setAvailability({
      ...availability,
      [event.target.name]: event.target.checked,
    });
  };
  const handleInterestChange = (event) => {
    setInterests({ ...interests, [event.target.name]: event.target.checked });
  };

  const submit = (event) => {
    event.preventDefault();
    const payload = {
      ...allValues,
      interests: { ...interests },
      availability: { ...availability },
    };
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
          specialSkills: "",
          disability: "",
          terms: false,
        });
        setInterests({
          Activities: false,
          Conservation: false,
          Energy: false,
          Gym: false,
        });
        setAvailability({
          Monday: false,
          Tuesday: false,
          Wednesday: false,
          Thursday: false,
          Friday: false,
          Saturday: false,
          Sunday: false,
          All: false,
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
          <FormControl
            required
            error={errorAvailability}
            component="fieldset"
            className={classes.formControl}
          >
            <FormLabel component="legend">Pick one or more</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Monday}
                    onChange={handleAvailChange}
                    name="Monday"
                  />
                }
                label="Monday"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Tuesday}
                    onChange={handleAvailChange}
                    name="Tuesday"
                  />
                }
                label="Tuesday"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Wednesday}
                    onChange={handleAvailChange}
                    name="Wednesday"
                  />
                }
                label="Wednesday"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Thursday}
                    onChange={handleAvailChange}
                    name="Thursday"
                  />
                }
                label="Thursday"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Friday}
                    onChange={handleAvailChange}
                    name="Friday"
                  />
                }
                label="Friday"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Saturday}
                    onChange={handleAvailChange}
                    name="Saturday"
                  />
                }
                label="Saturday"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Sunday}
                    onChange={handleAvailChange}
                    name="Sunday"
                  />
                }
                label="Sunday"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={All}
                    onChange={handleAvailChange}
                    name="All"
                  />
                }
                label="All"
              />
            </FormGroup>
            <FormHelperText>
              Please select one or more of the above options
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>
            Which areas are you interested in volunteering?
          </Typography>
          <FormControl
            required
            error={errorInterests}
            component="fieldset"
            className={classes.formControl}
          >
            <FormLabel component="legend">Pick one or more</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Activities}
                    onChange={handleInterestChange}
                    name="Activities"
                  />
                }
                label="Recreational Activities/Sports Coaching/Support"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Energy}
                    onChange={handleInterestChange}
                    name="Energy"
                  />
                }
                label="Renewable Energy/Green Technologies"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Conservation}
                    onChange={handleInterestChange}
                    name="Conservation"
                  />
                }
                label="Conservation/Environmental/Wildlife"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Gym}
                    onChange={handleInterestChange}
                    name="Gym"
                  />
                }
                label="Green Gym/Social Prescribing Project"
              />
            </FormGroup>
            <FormHelperText>
              Please select one or more of the above options
            </FormHelperText>
          </FormControl>
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
            error={errorTerms}
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
        <Button className={classes.button} type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default RegistrationForm;
