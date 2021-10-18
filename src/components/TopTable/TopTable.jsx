import React from "react";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {},
  th: {
    color: theme.palette.primary.main,
    fontWeight: 800,
    fontSize: 24,
    background: theme.palette.primary.dark,
    border: "1px solid rgba(0,0,0,0.1)",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  td: {
    fontWeight: 600,
    borderBottom: `1px solid ${theme.palette.primary.dark}`,
  },
  row: {
    cursor: 'pointer',
    transition: "all 200ms ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const TopTable = ({ columns, rows }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Table stickyHeader={true}>
        <TableHead>
          <TableRow>
            {columns.map((item) => (
              <TableCell key={uuid()} align="center" className={classes.th}>
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={uuid()}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              className={classes.row}
            >
              {row.map((item) => (
                <TableCell key={uuid()} align="center" className={classes.td}>
                  {item}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TopTable;

TopTable.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.arrayOf(PropTypes.array).isRequired,
};
