import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';

import TeamsCard from '../../components/global/Teams';


export default function ScoresPage(){
    const [predictions, setPredictions] = React.useState({
        'premier_league': [{
            'Date': '',
            'HomeTeam': '',
            'AwayTeam': '',
            'FTHG': '',
            'FTAG': '',
            'Referee': '',
        }],
        'la_liga': [{
            'Date': '',
            'HomeTeam': '',
            'AwayTeam': '',
            'FTHG': '',
            'FTAG': '',
            'Referee': '',
        }],})

    React.useEffect(() => {
        fetch(`http://127.0.0.1:8000/scores/2023?limit=20`)
        .then(response => response.json())
        .then(data => setPredictions(data));
        }, []);

    return (
            <Container>
                <TableContainer component={Paper}>
                    <Table stickyHeader aria-label="simple table" size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell  align="center" sx={{width: '33%'}}>
                                        Home Team <br />
                                        - <br />
                                        Away Team
                                </TableCell>
                                <TableCell align="center">
                                    Date
                                </TableCell>
                                <TableCell align="center">
                                    Referee
                                </TableCell>
                                <TableCell align="center">
                                    Score
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center" colSpan={4}>
                                    All leagues
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {predictions.premier_league.map((prediction) =>  (
                                <TableRow  hover>
                                <TableCell align="center">
                                    <TeamsCard hometeam={prediction.HomeTeam} awayteam={prediction.AwayTeam}/>
                                </TableCell>
                                <TableCell align="center">
                                    {prediction.Date}
                                </TableCell>
                                <TableCell align="center">
                                    {prediction.Referee}
                                </TableCell>
                                <TableCell align="center">
                                    {prediction.FTHG} -  {prediction.FTAG}
                                </TableCell>
                                </TableRow>
                            ))}
                            {predictions.la_liga.map((prediction) =>  (
                                <TableRow  hover>
                                <TableCell align="center">
                                    <TeamsCard hometeam={prediction.HomeTeam} awayteam={prediction.AwayTeam}/>
                                </TableCell>
                                <TableCell align="center">
                                    {prediction.Date}
                                </TableCell>
                                <TableCell align="center">
                                    {prediction.Referee}
                                </TableCell>
                                <TableCell align="center">
                                    {prediction.FTHG} -  {prediction.FTAG}
                                </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        )
}