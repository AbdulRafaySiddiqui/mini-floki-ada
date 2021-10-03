import React from "react";
import Bg from "src/assets/images/cat-bg.svg";
import { makeStyles } from "@mui/styles";
import { Card, Container, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${Bg})`,
    backgroundSize: "cover",
    padding: "132px 3% 194px",
    backgroundPositionY: "bottom",
    display: "flex",
  },
  text:{
    fontWeight:900,
  [theme.breakpoints.down("sm")]:{
    fontSize: "2rem",
  }
  }
}));

const Welcome = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Card variant="transparent">
          <Typography variant="h3" className={classes.text}>
           Welcome to the
            <br /> MINIFLOKIADA
            <br /> Vaults!
            <br />
            <br />
            Time to Claim your
            <br /> Rewards!
          </Typography>
        </Card>
      </Container>
    </div>
  );
};

export default Welcome;
