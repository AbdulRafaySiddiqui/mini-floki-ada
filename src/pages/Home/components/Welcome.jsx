import React from "react";
import Bg from "src/assets/images/cat-bg.svg";
import { makeStyles } from "@mui/styles";
import { Button, Card, Container, Hidden, Typography } from "@mui/material";
import { useWalletModal, useWeb3 } from "@react-dapp/wallet";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${Bg})`,
    backgroundSize: "cover",
    padding: "132px 3% 194px",
    backgroundPositionY: "bottom",
    display: "flex",
  },
  text: {
    fontWeight: 900,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
}));

const Welcome = () => {
  const classes = useStyles();
  const { setOpen: openWallet } = useWalletModal();
  const { connected, displayAccount } = useWeb3();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Card variant="transparent">
          <Typography variant="h3" className={classes.text}>
            Welcome to the
            <br /> MINIFLOKIADA
            <br /> Vault!
            <br />
            <br />
            Time to Claim your
            <br /> Rewards!
          </Typography>
        </Card>
        <Hidden mdUp>
          <Button
            color="secondary"
            variant="bold"
            fullWidth
            style={{ marginTop: 20, maxWidth: 500 }}
            onClick={() => {
              if (!connected) openWallet(true);
            }}
          >
            {connected ? displayAccount : "Connect"}
          </Button>
        </Hidden>
      </Container>
    </div>
  );
};

export default Welcome;
