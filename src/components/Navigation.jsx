import React from "react";
import { Tabs, Tab } from "@material-ui/core";
import { Link } from "@reach/router";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Navigation = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <Tabs
      value={selectedTab}
      onChange={handleChange}
      aria-label="navigation tabs"
    >
      <Tab label="Home" {...a11yProps(0)} to="/" component={Link} />
      <Tab label="Our Vision" {...a11yProps(1)} to="/vision" component={Link} />
      <Tab label="Location" {...a11yProps(2)} to="/location" component={Link} />
      <Tab
        label="Activities"
        {...a11yProps(3)}
        to="/activities"
        component={Link}
      />
      <Tab
        label="Renewable Energy"
        {...a11yProps(4)}
        to="/energy"
        component={Link}
      />
      <Tab
        label="Our Partners"
        {...a11yProps(5)}
        to="/partners"
        component={Link}
      />
      <Tab
        label="Volunteering"
        {...a11yProps(6)}
        to="/volunteer"
        component={Link}
      />
      <Tab label="Events" {...a11yProps(7)} to="/events" component={Link} />
      <Tab
        label="Contact us"
        {...a11yProps(8)}
        to="/contact-us"
        component={Link}
      />
    </Tabs>
  );
};

export default Navigation;
