import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 40,
  },
  th: {
    color: theme.palette.primary.main,
    fontWeight: 800,
    fontSize: 20,
  },
  td: {
    fontWeight: 600,
  },
}));

function createData(hash, block, time, user, reward) {
  return { hash, block, time, user, reward };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const ClaimHistory = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography align="center" variant="h3" style={{ marginBottom: 10 }}>
        <b>Claim History</b>
      </Typography>
      <Typography align="center"  style={{ marginBottom: 10 }}>
          The Latest 100 claims
          </Typography>
      <Table sx={{}} aria-label="simple table" stickyHeader={true}>
        <TableHead>
          <TableRow>
            <TableCell align="center" className={classes.th}>
              Txn Hash
            </TableCell>
            <TableCell align="center" className={classes.th}>
              Block
            </TableCell>
            <TableCell align="center" className={classes.th}>
              Time
            </TableCell>
            <TableCell align="center" className={classes.th}>
              User
            </TableCell>
            <TableCell align="center" className={classes.th}>
              Reward
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" className={classes.td}>
                {row.hash}
              </TableCell>
              <TableCell align="center" className={classes.td}>
                {row.block}
              </TableCell>
              <TableCell align="center" className={classes.td}>
                {row.time}
              </TableCell>
              <TableCell align="center" className={classes.td}>
                {row.user}
              </TableCell>
              <TableCell align="center" className={classes.td}>
                {row.reward}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default ClaimHistory;
