import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Navigation />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
