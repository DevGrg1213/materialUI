import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState<String[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCountry(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        select
        value={country}
        onChange={handleChange}
        label="please select your country"
        fullWidth
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value="NP">Nepal</MenuItem>
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="JN">Japan</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
