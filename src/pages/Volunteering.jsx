import React from "react";
import RegistrationForm from "../containers/Registration/RegistrationForm";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 0 },
  paper: {
    padding: "1rem",
    margin: "2rem",
  },
}));

const Volunteering = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <RegistrationForm />
    </Paper>
  );
};

export default Volunteering;
