import {
  colors,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const MuiRadioButton = () => {
  const [value, setValue] = useState("");
  console.log({ value });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years of Experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            value="0-2"
            label="0-2"
            control={<Radio color="warning" size="small" />}
          />
          <FormControlLabel value="2-4" label="2-4" control={<Radio />} />
          <FormControlLabel value="4-6" label="4-6" control={<Radio />} />
        </RadioGroup>
        <FormHelperText>Please specify your experience</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
