import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import TeamCard from '../global/Team';

type SmallTableProps = {
    header: string[];
    description: string[];
    standings: standingRow[];
    league: string;
}

type standingRow = {
    Team: string;
    MP: number;
    'Win%': number;
    Points: number;
    Year: number;
    League: number;
}

export default function SummarizedTable(props: SmallTableProps) {
    const { header, standings, description, league } = props;
    return (
    <Container sx={{paddingBottom: 4}}>
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="simple table" size="small">
      <caption>{league} Table</caption>
        <TableHead>
          <TableRow>
            {header.map((header, index) => (
              <TableCell  align="center">
                <Tooltip title={description[index]} placement="top">
                <Typography variant="subtitle1">{header}</Typography>
                </Tooltip>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {standings.map((row, pos) => (
            <TableRow hover>
                <TableCell>
                  <Typography variant="body1">{pos+1}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1"><TeamCard team={row.Team}/></Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1">{row.MP}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1">{row['Win%']}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1">{row.Points}</Typography>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Container>
    )
}