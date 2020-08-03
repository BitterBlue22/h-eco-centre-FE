import React from "react";
import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers({ label }) {
  const classes = useStyles();

  return (
    <TextField
      id="date"
      variant="outlined"
      label={label}
      type="date"
      defaultValue="2017-05-24"
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}
