import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, Card, Container, Grid, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
  },
  claimBtn: {
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: 600,
    padding: "8px 30px",
    marginTop: 20,
  },
}));

const Rewards = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography align="center" variant="h4" style={{ margin: "20px 20px" }}>
        <b>Rewards</b>
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Reward/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Reward/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Rewards;

const Reward = () => {
  const classes = useStyles();
  return (
    <Card
      className="center"
      variant="transparent"
      fullWidth
      style={{ flexFlow: "column" }}
    >
      <Typography variant="h6">Reward 1</Typography>
      <Typography variant="h4" style={{ marginTop: 20 }}>
        <b>200 CAKE</b>
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        className={classes.claimBtn}
      >
        CLAIM
      </Button>
    </Card>
  );
};
