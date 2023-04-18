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


type FullTableProps = {
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

export default function FullTable(props: FullTableProps){
    const { header, standings, description, league } = props;

    return  (
        <Container>
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
                  <Typography variant="body1">{row.HMP}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1">{row.AMP}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1">{row.W}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1">{row.L}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1">{row.D}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1">{row.GSH}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1">{row.GSA}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1">{row.GCH}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1">{row.GCA}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1">{row.SoT}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1">{row.GF}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1">{row.GA}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1">{row.GD}</Typography>
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