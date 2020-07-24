import React from "react";
import RegistrationForm from "../components/RegistrationForm";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 0 },
  paper: {
    padding: "1rem",
    margin: "1rem",
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
