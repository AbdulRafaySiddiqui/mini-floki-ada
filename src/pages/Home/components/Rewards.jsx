import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Card, Container, Grid, Typography } from "@mui/material";
import { useNormalRewardClaim, useTopHolderRewardClaim } from "src/hooks/useRewardClaim";
import { toLower } from '@react-dapp/wallet'

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

const Rewards = ({ reward, claimTimeLeft, reload, topHolderReward }) => {
  const classes = useStyles();
  const rewardClaim = useNormalRewardClaim(reload)
  const topHolderRewardClaim = useTopHolderRewardClaim(reload)

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography align="center" variant="h4" style={{ margin: "20px 20px" }}>
        <b>Rewards</b>
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Reward title='ADA Vault Reward' reward={reward} pending={rewardClaim.txPending} claim={rewardClaim.claim} claimTimeLeft={claimTimeLeft} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Reward title="Top Holders Reward" subtitle='(Claim Time 16:30UTC)' reward={toLower(topHolderReward.rewards).toFixed(0)} pending={topHolderRewardClaim.txPending} claim={() => topHolderRewardClaim.claim(topHolderReward)} claimTimeLeft={0} disabled={!topHolderReward.signature} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Rewards;

const Reward = ({ subtitle, title, reward, claim, pending, claimTimeLeft, disabled }) => {
  const classes = useStyles();
  const [timeLeft, setTimeLeft] = useState(null);

  const getTimeLeft = (delta) => {
    if (!delta || delta <= 0 || delta === "0") return null;

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;
    days = parseInt(days);

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    hours = parseInt(hours);

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    minutes = parseInt(minutes);

    // what's left is seconds
    var seconds = delta % 60;
    seconds = parseInt(seconds);

    return { days, hours, minutes, seconds };
  };

  const getTimeText = (timeLeft) => {
    if (!timeLeft) return null;
    const { days, hours, minutes, seconds } = timeLeft

    const i = 1;
    const format = {
      days: ["D", "Days"],
      hours: ["H", "Hours"],
      minutes: ["M", "Minutes"],
      seconds: ["S", "Seconds"]
    }

    let text = '';
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

  useEffect(() => {
    const interval = setInterval(() => {
      const time = getTimeLeft(claimTimeLeft - Math.floor((new Date()).getTime() / 1000))
      setTimeLeft(getTimeText(time))

      if (!time)
        clearInterval(interval)
    }, 1000)
  }, [claimTimeLeft])

  return (
    <Card
      className="center"
      variant="transparent"
      fullWidth
      style={{ flexFlow: "column" }}
    >
      <Typography variant="h6">{title}</Typography>
      <Typography style={{ minHeight: '20px' }} variant="h8">{subtitle}</Typography>
      <Typography variant="h4" style={{ marginTop: 20 }}>
        <b>{reward}</b>
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        className={classes.claimBtn}
        disabled={pending || timeLeft || disabled}
        onClick={claim}
      >
        {pending ? 'Pending..' : `Claim ${timeLeft ? `in ${timeLeft}` : ''}`}
      </Button>
    </Card>
  );
};
