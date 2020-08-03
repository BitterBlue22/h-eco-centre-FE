import React from "react";
import { Paper, makeStyles } from "@material-ui/core";
import DetailedEventInfo from "../containers/DetailedEvent/DetailedEventInfo";

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 0 },
  paper: {
    padding: "2rem",
    margin: "2rem",
  },
}));

const DetailedEvent = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <DetailedEventInfo data={props} />
    </Paper>
  );
};

export default DetailedEvent;
