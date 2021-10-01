import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, Container, Typography, Button } from "@mui/material";
import Cat from "src/assets/images/cat-with-coin.svg";
import ClaimHistory from "src/components/ClaimHistory/ClaimHistory";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
  },
  connectBtn: {
    fontSize: 20,
    marginTop: 20,
    padding: "10px 30px",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Container style={{ marginTop: 40 }} maxWidth="md">
      <div className={classes.root}>
        <Typography variant="h3">
          <b>Claim My Cake</b>
        </Typography>

        <img src={Cat} alt="cat-coin" width="100%" style={{ maxWidth: 400 }} />
        <Card>
          <Typography variant="h5" align="center" style={{ fontWeight: 600 }}>
            CAKE Bank
          </Typography>

          <Typography variant="h2" align="center">
            <b>0 CAKE</b>
          </Typography>
          <Typography
            variant="h5"
            align="center"
            style={{ fontWeight: 600, marginTop: 50 }}
          >
            CAKE Insurance
          </Typography>

          <Typography variant="h2" align="center">
            <b>0 BNB</b>
          </Typography>
        </Card>
        <Card style={{ marginTop: 50 }}>
          <Typography variant="h5" align="center" style={{ fontWeight: 600 }}>
            Wallet GKCAKE Balance
          </Typography>

          <Typography variant="h2" align="center">
            <b>0</b>
          </Typography>
          <Typography
            variant="h5"
            align="center"
            style={{ fontWeight: 600, marginTop: 50 }}
          >
            Total Reward Claimed
          </Typography>

          <Typography variant="h2" align="center">
            <b>0</b>
          </Typography>
          <Typography
            variant="h5"
            align="center"
            style={{ fontWeight: 600, marginTop: 50 }}
          >
            Your CAKE Rewards
          </Typography>

          <Typography variant="h2" align="center">
            <b>0 CAKE</b>
          </Typography>
          <center>
            <Button
              variant="contained"
              color="secondary"
              className={classes.connectBtn}
            >
              Connect Wallet
            </Button>
          </center>
        </Card>
      </div>
        <ClaimHistory />
    </Container>
  );
};

export default Home;
