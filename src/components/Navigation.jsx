import React from "react";
import { Tabs, Tab } from "@material-ui/core";

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
      <Tab label="Home" {...a11yProps(0)} />
      <Tab label="Our Vision" {...a11yProps(1)} />
      <Tab label="Location" {...a11yProps(2)} />
      <Tab label="Activities" {...a11yProps(3)} />
      <Tab label="Renewable Energy" {...a11yProps(4)} />
      <Tab label="Stakeholders" {...a11yProps(5)} />
      <Tab label="Contact us" {...a11yProps(6)} />
    </Tabs>
  );
};

export default Navigation;
