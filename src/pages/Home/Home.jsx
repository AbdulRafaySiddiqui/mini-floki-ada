import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, Container, Typography, Button } from "@mui/material";
import Cat from "src/assets/images/cat-with-coin.svg";
import ClaimHistory from "src/components/ClaimHistory/ClaimHistory";
import Welcome from "./components/Welcome";
import Vault from "./components/Vault";
import Rewards from "./components/Rewards";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Welcome />
      <Vault />
      <Rewards />
      <ClaimHistory />
    </div>
  );
};

export default Home;
