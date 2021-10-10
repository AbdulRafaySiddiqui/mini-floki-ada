import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography } from "@mui/material";
import VaultCard from "./VaultCard";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
  },
}));

const Vault = ({ tokenBalance, rewardTokenBalance, reward }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h2" align="center">
        <b>ADA VAULT</b>
      </Typography>
      <Grid container spacing={4} style={{ marginTop: 20 }}>
        <Grid item xs={12} sm={6}>
          <VaultCard text="$MFLOKIADA Balance" value={tokenBalance} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <VaultCard text="ADA Balance" value={rewardTokenBalance} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <VaultCard text="ADA Vault Rewards" value={reward} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <VaultCard text="TOP 100 Rewards" value="0" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <VaultCard text="Top 100 Holders Standings" value="NaN" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <VaultCard text="Top 100 holders list" value="0" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Vault;
