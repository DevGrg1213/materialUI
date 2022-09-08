import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
const MuiAutoComplete = () => {
  const [value, setValue] = useState<string | null>(null);
  console.log(value);
  const handleChange = (e: any, newValue: string | null) => {
    setValue(newValue);
  };
  const skills = ["HTML", "CSS", "Javascript", "Typescript", "c#", "React"];
  return (
    <Stack spacing={2}>
      <Autocomplete
        options={skills}
        renderInput={(params) => (
          <TextField {...params} label="Skills" value={value} />
        )}
        onChange={handleChange}
        freeSolo
      />
    </Stack>
  );
};

export default MuiAutoComplete;
