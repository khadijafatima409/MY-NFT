"use client";
import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
const CustomTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ height: "50px", width: "30%", bgcolor: "#CDE2FE" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Today" />
        <Tab label="This Week" />
        <Tab label="This Month" />
      </Tabs>
    </Box>
  );
};

export default CustomTabs;
