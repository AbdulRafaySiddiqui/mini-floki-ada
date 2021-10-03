import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Link, Typography, IconButton } from "@mui/material";
import Logo from "src/assets/images/logo/text.png";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 100,
    padding: 10,
    paddingTop: 60,
    paddingBottom: 69,
    boxShadow: "1px 0 26px 3px #c9c9c9",
    backgroundColor: theme.palette.primary.dark,
    borderRadius: 20,
    marginTop: 50,
  },
  top: {
    display: "grid",
    gridTemplateColumns: "1fr 3fr 1fr",
    padding: "0px 50px",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr",
      justifyItems: "center",
      padding: "0px 20px",
    },
  },
  links: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& p": {
      margin: "0px 5px",
    },
  },
  social: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <div className={classes.top}>
          <img src={Logo} alt="" style={{ maxWidth: 100 }} />
          <div className={classes.links}>
            <Typography component={Link} href="#">
              <b> ABOUT</b>
            </Typography>
            <Typography>
              <b>WHITEPAPER</b>
            </Typography>
            <Typography>
              <b>TOKENOMICS</b>
            </Typography>
            <Typography>
              <b>ROADMAP</b>
            </Typography>
            <Typography>
              <b>FAQ</b>
            </Typography>
          </div>
          <div className={classes.social}>
            <IconButton size="small">
              <TelegramIcon fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <TwitterIcon fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <YouTubeIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
