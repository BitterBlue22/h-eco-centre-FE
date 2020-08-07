import React from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import Navigation from "./Navigation";

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 0 },
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  navbar: { flexGrow: 1 },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Navigation className={classes.navbar} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
