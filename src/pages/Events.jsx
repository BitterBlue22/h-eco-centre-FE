import React from "react";
import { Paper, Button } from "@material-ui/core";
import EventsCalendar from "../containers/EventsCalendar/EventsCalendar";
import { Link } from "@reach/router";

const Events = () => {
  return (
    <Paper>
      <Link to="/event-creation">
        <Button>Create Event</Button>
      </Link>
      <EventsCalendar />
    </Paper>
  );
};

export default Events;
