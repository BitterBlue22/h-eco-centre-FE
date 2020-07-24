import React from "react";
import { TextField } from "@material-ui/core";

const TextBox = ({ id }) => {
  return (
    <TextField
      id={id}
      label="Your message"
      variant="outlined"
      placeholder="Write your message here..."
      rows={4}
      fullWidth
      multiline
    />
  );
};

export default TextBox;
