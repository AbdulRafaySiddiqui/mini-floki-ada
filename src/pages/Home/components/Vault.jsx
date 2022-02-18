import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography } from "@mui/material";
import VaultCard from "./VaultCard";
import useTopHolders from "src/hooks/useTopHolders";
import { toLower, useWeb3 } from "@react-dapp/wallet";
import { ordinalSuffixOf } from "src/util/utils";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
  },
}));

const Vault = ({ totalUserTopReward, tokenBalance, topHolderReward, rewardTokenBalance, reward, totalRewards, topHolderTotalRewards }) => {
  const message = ":("
  const classes = useStyles();
  const topHolders = useTopHolders();
  const { account } = useWeb3()
  const [topHolderStanding, setTopHolderStanding] = useState(message);
  const history = useHistory()

  useEffect(() => {
    const calculateTopHolderStanding = () => {
      const index = topHolders.findIndex((e) => e.account === account)
      setTopHolderStanding(index === -1 ? message : ordinalSuffixOf(index + 1));
    }

    if (topHolders.length > 0) calculateTopHolderStanding();
  }, [topHolders])

  console.log(toLower(topHolderReward.rewards).toString())
  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h2" align="center">
        <b>ADA VAULT</b>
        {/* <br/>
        <b style={{fontSize: '40px'}} >{totalRewards} ADA to claim 🔥</b> */}
      </Typography>
      <Grid container spacing={4} style={{ marginTop: 20 }}>
        <Grid item xs={12} sm={6}>
          <VaultCard text="ADA Vault" value={`${totalRewards} 🔥`} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <VaultCard text="Top Holders Vault" value={`${topHolderTotalRewards} 🔥`} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <VaultCard text="$MFLOKIADA Balance" value={tokenBalance} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <VaultCard text="Top 100 Holders Standings" value={topHolderStanding} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <VaultCard text="ADA Vault Rewards" value={reward} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <VaultCard text="TOP 100 Rewards" value={totalUserTopReward} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <VaultCard text="ADA Balance" value={rewardTokenBalance} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <VaultCard text="Top 100 holders list" value="->" onClick={() => history.push('/top-holders')} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Vault;
