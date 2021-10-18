import React from "react";
import TopTable from "src/components/TopTable/TopTable";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import useTopHolders from "src/hooks/useTopHolders";

const useStyles = makeStyles((theme) => ({
  root: {},
  heading: {
    // borderBottom: `2px dashed ${theme.palette.primary.dark}`,
    marginTop: 20,
    marginBottom: 20,
  },
}));

const columns = ["Account", "Amount"];

const Top100 = () => {
  const classes = useStyles();
  const topHolder = useTopHolders()

  return (
    <div>
      <Container maxWidth="lg">
        <Typography align="center" variant="h4" className={classes.heading}>
          <b>Top 100 Holders</b>
        </Typography>
        <TopTable columns={columns} rows={topHolder.map((e) => [e.account, e.amount])} />
      </Container>
    </div>
  );
};

export default Top100;
