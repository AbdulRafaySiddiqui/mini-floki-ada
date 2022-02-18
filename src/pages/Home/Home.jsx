import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, Container, Typography, Button } from "@mui/material";
import Cat from "src/assets/images/cat-with-coin.svg";
import ClaimHistory from "src/components/ClaimHistory/ClaimHistory";
import Welcome from "./components/Welcome";
import Vault from "./components/Vault";
import Rewards from "./components/Rewards";
import useTokenInfo from "src/hooks/useTokenInfo";
import useTopHolders from "src/hooks/useTopHolders";
import { useEagerConnect } from "@react-dapp/wallet";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Home = () => {
  useEagerConnect();
  const classes = useStyles();
  const { totalUserTopReward, tokenBalance, rewardTokenBalance, reward, topHolderReward, claimTimeLeft, totalRewards, topHolderTotalRewards, reload } = useTokenInfo();

  return (
    <div className={classes.root}>
      <Welcome />
      <Vault totalUserTopReward={totalUserTopReward} topHolderReward={topHolderReward} tokenBalance={tokenBalance} rewardTokenBalance={rewardTokenBalance} reward={reward} totalRewards={totalRewards} topHolderTotalRewards={topHolderTotalRewards} />
      <Rewards reward={reward} topHolderReward={topHolderReward} claimTimeLeft={claimTimeLeft} reload={reload} />
      <ClaimHistory />
    </div>
  );
};

export default Home;
