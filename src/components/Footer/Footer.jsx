import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height:100,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return <div className={classes.root}></div>;
};

export default Footer;
