import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActions,
  Box,
} from "@mui/material";
const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
          height="200px"
        />

        <CardContent>
          <Typography variant="h4">React</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis porro quas ex commodi distinctio quae ut quidem
            doloribus qui! Voluptates.
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Share</Button>
          <Button>Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
