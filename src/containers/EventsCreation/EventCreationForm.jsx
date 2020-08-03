import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import DatePickers from "../../components/DatePicker";
import TextBox from "../../components/TextBox";

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

const EventCreationForm = () => {
  const classes = useStyles();
  return (
    <form>
      <Grid container spacing={3} justify="space-evenly">
        <Grid item xs={12}>
          <Typography variant="h2" align="center">
            Event creation
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="event-title"
            label="Event Title"
            variant="outlined"
            placeholder="e.g. Paddleboat Yoga"
            type="text"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePickers label={"Event date"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="event-organiser"
            label="Event organiser"
            variant="outlined"
            placeholder="e.g. Mike Smith"
            type="text"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="organiser-number"
            label="Organiser mobile number"
            variant="outlined"
            placeholder="e.g. 085 6587 1512"
            type="tel"
            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="organiser-email"
            label="Organiser email"
            variant="outlined"
            placeholder="e.g. mikes@gmail.com"
            type="email"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>Briefly describe the event</Typography>
          <TextBox required id={"event description"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="number-of-volunteers"
            label="Volunteers required"
            variant="outlined"
            placeholder="1"
            type="number"
            min="0"
            max="100"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>
            Which types of volunteers do you require? This field is not
            mandatory.
          </Typography>
          <TextBox id={"volunteers required"} />
        </Grid>

        <Grid item xs={12} md={6}></Grid>
        <Button className={classes.button}>Submit</Button>
      </Grid>
    </form>
  );
};

export default EventCreationForm;
