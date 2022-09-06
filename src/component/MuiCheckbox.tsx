import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [languages, setLanguages] = useState<String[]>([]);
  console.log({ acceptTnC });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(e.target.checked);
  };
  console.log({ languages });
  const handleLanguages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = languages.indexOf(e.target.value);
    if (index === -1) {
      setLanguages([...languages, e.target.value]);
    } else {
      setLanguages(languages.filter((language) => language !== e.target.value));
    }
  };
  return (
    <Box>
      <FormControlLabel
        control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
        label="Please accept terms and condition"
      />
      <Box>
        <Checkbox
          icon={<StarBorderIcon />}
          checkedIcon={<StarIcon />}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel id="language-group-label">Choose languages</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleLanguages}
                  value="HTML"
                  checked={languages.includes("HTML")}
                />
              }
              label="HTML"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleLanguages}
                  value="CSS"
                  checked={languages.includes("CSS")}
                />
              }
              label="CSS"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleLanguages}
                  value="Javascript"
                  checked={languages.includes("Javascript")}
                />
              }
              label="Javascript"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
