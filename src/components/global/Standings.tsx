import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';

type StandingsTableProps = {
  header: string[];
  description: string[];
  standings: standingRow[];
  league: string;
}

type standingRow = {
    Team: string;
    HMP: number;
    AMP: number;
    W: number;
    L: number;
    D: number;
    GSH: number;
    GSA: number;
    GCH: number;
    GCA: number;
    SoT: number;
    GF: number;
    GA: number;
    GD: number;
    Points: number;
    Year: number;
    League: number;
}

const Standings = (props: StandingsTableProps) => {
  const { header, standings, description, league } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  //const headers = ["index", "Team", "MP", "win%", "Points"];

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const cleanHeader = (header: string) => {
    if (header === "index"){
        return "Pos"
    }
    return header
  }

  const cleanData = (data: string, index: number) => {
    if (index === 0) {
        return parseInt(data)+1
    }
    return data
  }
  return (
    <Container>
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="simple table" size="small">
      <caption>{league} table</caption>
        <TableHead>
          <TableRow>
            {header.map((header, index) => (
              <TableCell>
                <Tooltip title={description[index]} placement="top">
                <Typography variant="subtitle1">{cleanHeader(header)}</Typography>
                </Tooltip>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {standings.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row, pos) => (
            <TableRow hover>
                <TableCell>
                  <Typography variant="body1">{pos+1}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{row.Team}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{row.AMP}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{row.W}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{row.Points}</Typography>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
    rowsPerPageOptions={[10, 20]}
    component="div"
    count={standings.length}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
  />
  </Container>
  );
}

export default Standings;