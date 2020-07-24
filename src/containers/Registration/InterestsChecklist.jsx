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

const InterestsChecklist = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    Activities: false,
    Conservation: false,
    Energy: false,
    Gym: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const { Activities, Conservation, Energy, Gym } = state;
  const error =
    [Activities, Conservation, Energy, Gym].filter((day) => day).length < 1;
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
            <Checkbox
              checked={Activities}
              onChange={handleChange}
              name="Activities"
            />
          }
          label="Recreational Activities/Sports Coaching/Support"
        />
        <FormControlLabel
          control={
            <Checkbox checked={Energy} onChange={handleChange} name="Energy" />
          }
          label="Renewable Energy/Green Technologies"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={Conservation}
              onChange={handleChange}
              name="Conservation"
            />
          }
          label="Conservation/Environmental/Wildlife"
        />
        <FormControlLabel
          control={
            <Checkbox checked={Gym} onChange={handleChange} name="Gym" />
          }
          label="Green Gym/Social Prescribing Project"
        />
      </FormGroup>
      <FormHelperText>
        Please select one or more of the above options
      </FormHelperText>
    </FormControl>
  );
};

export default InterestsChecklist;
