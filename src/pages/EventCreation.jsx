import React from "react";
import { Paper, makeStyles } from "@material-ui/core";
import EventCreationForm from "../containers/EventsCreation/EventCreationForm";

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 0 },
  paper: {
    padding: "2rem",
    margin: "2rem",
  },
}));

const EventCreation = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <EventCreationForm />
    </Paper>
  );
};

export default EventCreation;
