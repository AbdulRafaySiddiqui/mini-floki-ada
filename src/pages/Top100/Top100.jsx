import React from "react";
import TopTable from "src/components/TopTable/TopTable";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  heading: {
    // borderBottom: `2px dashed ${theme.palette.primary.dark}`,
    marginTop: 20,
    marginBottom: 20,
  },
}));

const rows = [
  ["User1", "Name 1", "149$"],
  ["User2", "Name 2", "149$"],
  ["User3", "Name 3", "149$"],
  ["User3", "Name 3", "149$"],
  ["User3", "Name 3", "149$"],
  ["User3", "Name 3", "149$"],
  ["User3", "Name 3", "149$"],
  ["User3", "Name 3", "149$"],
  ["User3", "Name 3", "149$"],
  ["User3", "Name 3", "149$"],
  ["User3", "Name 3", "149$"],
  ["User3", "Name 3", "149$"],
];
const columns = ["UserID", "Name", "Total"];

const Top100 = () => {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="lg">
        <Typography align="center" variant="h4" className={classes.heading}>
          <b>Top 100</b>
        </Typography>
        <TopTable columns={columns} rows={rows} />
      </Container>
    </div>
  );
};

export default Top100;
