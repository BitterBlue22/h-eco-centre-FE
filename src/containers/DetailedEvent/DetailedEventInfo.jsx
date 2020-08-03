import React from "react";
import { Typography, Button } from "@material-ui/core";

const DetailedEventInfo = ({
  data: {
    title,
    date,
    startTime,
    endTime,
    location,
    description,
    volunteerNumbers,
    volunteerDescription,
    eventOrganiser,
    organiserContact,
  },
}) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography>{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          {date}, {startTime} to {endTime} at {location}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{description}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{volunteerNumbers}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{volunteerDescription}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Any queries? Contact {eventOrganiser} at {organiserContact}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button>Volunteer</Button>
      </Grid>
    </Grid>
  );
};

export default DetailedEventInfo;
