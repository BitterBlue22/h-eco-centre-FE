import React from "react";
import {
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

const Terms = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    Read: false,
  });
  const { Read } = state;
  const error = Read === false;

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <FormControl
      required
      error={error}
      component="fieldset"
      className={classes.formControl}
    >
      <FormControlLabel
        control={
          <Checkbox checked={Read} onChange={handleChange} name="Read" />
        }
        label="Do you agree to the Positive Activities Privacy Policy and Terms and Conditions linked above? *"
      />
      <FormHelperText>Please read the terms and conditions.</FormHelperText>
    </FormControl>
  );
};

export default Terms;
