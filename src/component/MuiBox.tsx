import React from "react";
import { Box, Stack, Divider, Grid, Paper } from "@mui/material";
const MuiBox = () => {
  return (
    <Paper
      sx={{
        backgroundColor: "#eee",
        padding: "2rem",
      }}
      elevation={2}
    >
      <Stack
        direction="row"
        border={1}
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          component="span"
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            padding: "16px",
            height: "100px",
            width: "100px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Hello world
        </Box>
        <Box
          component="span"
          sx={{
            backgroundColor: "secondary.main",
            color: "white",
            padding: "16px",
            height: "100px",
            width: "100px",
            "&:hover": {
              backgroundColor: "secondary.light",
            },
          }}
        >
          Hello world
        </Box>
      </Stack>
      <Grid
        container
        mt={4}
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid bgcolor="primary.main" item xs={12} md={6} p={2}>
          <Box>Item 1</Box>
        </Grid>
        <Grid bgcolor="primary.main" item xs={12} md={6} p={2}>
          <Box>Item 2</Box>
        </Grid>
        <Grid bgcolor="primary.main" item xs={12} md={6} p={2}>
          <Box>Item 3</Box>
        </Grid>
        <Grid bgcolor="primary.main" item xs={12} md={6} p={2}>
          <Box>Item 4</Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiBox;
