import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Card, Container, Grid, Typography } from "@mui/material";
import { useNormalRewardClaim } from "src/hooks/useRewardClaim";
import { getTimeLeft } from '@react-dapp/wallet'

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

const Rewards = ({ reward, canClaimReward, claimTimeLeft }) => {
  const classes = useStyles();
  const { txPending, claim } = useNormalRewardClaim()
  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography align="center" variant="h4" style={{ margin: "20px 20px" }}>
        <b>Rewards</b>
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Reward title='ADA Vault Rewards' reward={reward} pending={txPending} claim={claim} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Reward title='Top 100 Holder Rewards' reward={0} pending={false} claim={null} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Rewards;

const Reward = ({ title, reward, claim, pending, claimTimeLeft }) => {
  const classes = useStyles();
  const [timeLeft, setTimeLeft] = useState("");

  const getTimeText = ({ days, hours, minutes, seconds }) => {
    const i = 1;
    const format = {
      days: ["D", "Days"],
      hours: ["H", "Hours"],
      minutes: ["M", "Minutes"],
      seconds: ["S", "Seconds"]
    }

    let text = null;
    if (days > 0)
      text += ` ${days} ${format.days[i]}`
    if (hours > 0)
      text += ` ${hours} ${format.hours[i]}`
    if (minutes > 0)
      text += ` ${minutes} ${format.minutes[i]}`
    if (seconds > 0)
      text += ` ${seconds} ${format.seconds[i]}`

    return text;
  }

  setInterval(() => {
    const time = getTimeLeft(claimTimeLeft - Math.floor((new Date()).getTime() / 1000))
    setTimeLeft(getTimeText(time))
  }, 1000);

  return (
    <Card
      className="center"
      variant="transparent"
      fullWidth
      style={{ flexFlow: "column" }}
    >
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h4" style={{ marginTop: 20 }}>
        <b>{reward}</b>
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        className={classes.claimBtn}
        disabled={pending || timeLeft}
        onClick={claim}
      >
        {pending ? 'Pending..' : `Claim ${timeLeft ? `in ${timeLeft}` : ''}`}
      </Button>
    </Card>
  );
};
