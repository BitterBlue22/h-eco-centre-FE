import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import DaysChecklist from "./DaysChecklist";
import InterestsChecklist from "./InterestsChecklist";
import TextBox from "../../components/TextBox";
import Terms from "../../components/Terms";
import DatePickers from "../../components/DatePicker";

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
}));

const RegistrationForm = () => {
  const classes = useStyles();
  return (
    <form>
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
            label="First Name"
            variant="outlined"
            placeholder="e.g. Tom"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="last-name"
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
            label="Mobile"
            variant="outlined"
            placeholder="e.g. 085 6587 1512"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="alternative-number"
            label="Alternative number"
            placeholder="e.g. 011 6557 1512"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            placeholder="e.g. tsmith@gmail.com"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePickers label={"Date of birth"} />
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
          <TextBox id={"special-skills"} />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Do you consider yourself to have a disability? If yes, please
            specify:
          </Typography>
          <TextBox id={"disabilities"} />
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
          <Terms />
        </Grid>
        <Button className={classes.button}>Submit</Button>
      </Grid>
    </form>
  );
};

export default RegistrationForm;
