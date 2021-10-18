import React from "react";
import { makeStyles } from "@mui/styles";
import Paw from "src/assets/images/paw.svg";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: 'pointer',
    border: "1px solid #e2e7fa",
    borderRadius: 16,
    padding: 40,
    "&:hover": {
      background: theme.palette.primary.dark,
    },
  },
  valueContainer: {
    display: "flex",
    alignItems: "center",
    "& img": {
      marginRight: 16,
    },
  },
  text: {
    marginTop: 30,
  },
}));

const VaultCard = ({ text, value, onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={onClick}>
      <div className={classes.valueContainer}>
        <img src={Paw} width="60px" alt="" />
        <Typography variant="h4" align="center">
          <b>{value}</b>
        </Typography>
      </div>
      <Typography className={classes.text}>
        <b> {text} </b>
      </Typography>
    </div>
  );
};

export default VaultCard;
