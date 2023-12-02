"use client";
import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
interface CustomTabsProps {
  label1: string;
  label2: string;
  label3: string;
}
const CustomTabs = ({ label1, label2, label3 }: CustomTabsProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ height: "50px", width: "30%", bgcolor: "#CDE2FE" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label={label1} />
        <Tab label={label2} />
        <Tab label={label3} />
      </Tabs>
    </Box>
  );
};

export default CustomTabs;
