import React from "react";
import { makeStyles } from "@mui/styles";
import Logo from "src/assets/images/logo/full.png";
import { Container, Typography, Link, Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 80,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: theme.palette.primary.dark,
  },
  navWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  navRight: {
    maxWidth: 700,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width:"100%"
  },
  linkText: {
    fontFamily: theme.font.link,
    fontSize:18,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" style={{ height: "100%" }}>
        <div className={classes.navWrapper}>
          <img src={Logo} alt="logo" height="50px" />
          <div className={classes.navRight}>
            <Link href="#" className={classes.linkText}>
              About
            </Link>
            <Link href="#" className={classes.linkText}>
              Nft Marketplace
            </Link>
            <Link href="#" className={classes.linkText}>
              Minigames
            </Link>
            <Link href="#" className={classes.linkText}>
              Charity
            </Link>
            <Button color="secondary" variant="bold">
                ADA Vault
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
