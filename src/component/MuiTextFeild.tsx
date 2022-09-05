import { TextField, InputAdornment } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

const MuiTextFeild = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="name" variant="outlined" required />
        <TextField label="name" variant="filled" />
        <TextField label="name" variant="standard" />
      </Stack>
      <Stack>
        <TextField
          label="small"
          variant="standard"
          size="small"
          color="secondary"
        />
        <TextField
          label="medium"
          variant="standard"
          size="medium"
          color="secondary"
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField type="password" helperText="We don't share your password" />
        <TextField InputProps={{ readOnly: true }} value="Read only" />
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">KG</InputAdornment>,
          }}
          value={value}
          error={!value}
          helperText={
            !value
              ? "Please fill up your password"
              : "We dont sahre your password"
          }
          onChange={(e) => setValue(e.target.value)}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextFeild;
