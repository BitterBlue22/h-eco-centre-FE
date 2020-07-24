import React from "react";
import {
  FormGroup,
  FormLabel,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  FormControl,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const DaysChecklist = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
    All: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
    All,
  } = state;
  const error =
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
  return (
    <FormControl
      required
      error={error}
      component="fieldset"
      className={classes.formControl}
    >
      <FormLabel component="legend">Pick one or more</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox checked={Monday} onChange={handleChange} name="Monday" />
          }
          label="Monday"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={Tuesday}
              onChange={handleChange}
              name="Tuesday"
            />
          }
          label="Tuesday"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={Wednesday}
              onChange={handleChange}
              name="Wednesday"
            />
          }
          label="Wednesday"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={Thursday}
              onChange={handleChange}
              name="Thursday"
            />
          }
          label="Thursday"
        />
        <FormControlLabel
          control={
            <Checkbox checked={Friday} onChange={handleChange} name="Friday" />
          }
          label="Friday"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={Saturday}
              onChange={handleChange}
              name="Saturday"
            />
          }
          label="Saturday"
        />
        <FormControlLabel
          control={
            <Checkbox checked={Sunday} onChange={handleChange} name="Sunday" />
          }
          label="Sunday"
        />
        <FormControlLabel
          control={
            <Checkbox checked={All} onChange={handleChange} name="All" />
          }
          label="All"
        />
      </FormGroup>
      <FormHelperText>
        Please select one or more of the above options
      </FormHelperText>
    </FormControl>
  );
};

export default DaysChecklist;
