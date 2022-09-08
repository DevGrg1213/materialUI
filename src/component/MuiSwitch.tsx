import { FormControlLabel, Switch } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const MuiSwitch = () => {
  const [status, setStatus] = useState(false);
  console.log(status);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus((prevState) => !prevState);
  };
  return (
    <Box>
      <FormControlLabel
        control={<Switch checked={status} onChange={handleChange} />}
        label="Dark Mode"
      />
    </Box>
  );
};

export default MuiSwitch;
