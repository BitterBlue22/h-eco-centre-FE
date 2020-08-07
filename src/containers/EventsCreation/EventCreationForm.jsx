import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  makeStyles,
  MenuItem,
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
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  terms: {
    backgroundColor: "#f6d60e",
  },
}));
const recurrance = [
  { value: "once-off" },
  { value: "weekly" },
  { value: "monthly" },
];
const EventCreationForm = () => {
  const classes = useStyles();
  const [allValues, setAllValues] = React.useState({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    recurrance: "",
    location: "",
    organiser: "",
    mobile: "",
    email: "",
    description: "",
    numberOfVolunteers: 0,
    volunteerType: "",
  });
  const handleChange = (event) => {
    setAllValues({ ...allValues, [event.target.name]: event.target.value });
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
          title: "",
          date: "",
          startTime: "",
          endTime: "",
          recurrance: "",
          location: "",
          organiser: "",
          mobile: "",
          email: "",
          description: "",
          numberOfVolunteers: 0,
          volunteerType: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(allValues);
  return (
    <form onSubmit={submit}>
      <Grid container spacing={3} justify="center" alignContent="center">
        <Grid item xs={12}>
          <Typography variant="h2" align="center">
            Event creation
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="event-title"
            label="Event Title"
            variant="outlined"
            placeholder="e.g. Paddleboat Yoga"
            name="title"
            type="text"
            value={allValues.title}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            id="date"
            name="date"
            variant="outlined"
            label="Event date"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            id="time"
            name="startTime"
            label="Event Start"
            type="time"
            variant="outlined"
            defaultValue="07:30"
            className={classes.textField}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300,
            }}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            id="time"
            name="endTime"
            label="Event End"
            type="time"
            variant="outlined"
            defaultValue="14:30"
            className={classes.textField}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300,
            }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            required
            id="event-reccurance"
            name="recurrance"
            label="Recurrance"
            variant="outlined"
            placeholder="e.g. weekly"
            helperText="How often does this event reccur?"
            select
            value={allValues.recurrance}
            onChange={handleChange}
            fullWidth
          >
            {recurrance.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            required
            id="event-location"
            name="location"
            label="Location"
            variant="outlined"
            placeholder="e.g. lakehouse"
            type="text"
            value={allValues.location}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="event-organiser"
            name="organiser"
            label="Event organiser"
            variant="outlined"
            placeholder="e.g. Mike Smith"
            type="text"
            value={allValues.organiser}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="organiser-number"
            name="mobile"
            label="Organiser mobile number"
            variant="outlined"
            placeholder="e.g. 085 6587 1512"
            type="tel"
            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
            value={allValues.mobile}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="organiser-email"
            name="email"
            label="Organiser email"
            variant="outlined"
            placeholder="e.g. mikes@gmail.com"
            type="email"
            value={allValues.email}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>Briefly describe the event</Typography>
          <TextField
            id="event-description"
            name="description"
            label="Event description"
            variant="outlined"
            placeholder="Describe the event or tasks to be undertaken..."
            rows={4}
            value={allValues.description}
            onChange={handleChange}
            fullWidth
            multiline
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Please specify the number of volunteers required
          </Typography>
          <TextField
            required
            id="number-of-volunteers"
            name="numberOfVolunteers"
            label="Volunteers required"
            variant="outlined"
            placeholder="1"
            type="number"
            min="0"
            max="100"
            value={allValues.numberOfVolunteers}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Which types of volunteers do you require? This field is not
            mandatory.
          </Typography>
          <TextField
            id="volunteers-required"
            name="volunteerType"
            label="Volunteer description"
            variant="outlined"
            placeholder="Mention any specific type of people required for this position, e.g. 'yoga instructor' or 'adults'..."
            rows={4}
            value={allValues.volunteerType}
            onChange={handleChange}
            fullWidth
            multiline
          />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Button className={classes.button} type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default EventCreationForm;
