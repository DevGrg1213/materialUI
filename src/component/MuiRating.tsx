import { Rating, Stack } from "@mui/material";
import React, { useState } from "react";

const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  console.log({ value });
  const handleChange = (e: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={3}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        highlightSelectedOnly
      />
    </Stack>
  );
};

export default MuiRating;
