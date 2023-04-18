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


export default function PredictionPage(){
    const [predictions, setPredictions] = React.useState({
        'premier_league': [{
            'HomeTeam': '',
            'AwayTeam': '',
            '1': '',
            'X': '',
            '2': '',
        }],
        'la_liga': [{
            'HomeTeam': '',
            'AwayTeam': '',
            '1': '',
            'X': '',
            '2': '',
        }]})

    React.useEffect(() => {
        fetch(`http://127.0.0.1:8000/predictions`)
        .then(response => response.json())
        .then(data => setPredictions(data));
        }, []);
    return (
        <Container>
            <TableContainer component={Paper}>
                <Table stickyHeader aria-label="simple table" size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="center" colSpan={3}>
                                Probabilty%
                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell  align="center" sx={{width: '33%'}}>
                                    Home Team <br />
                                    - <br />
                                    Away Team
                            </TableCell>

                            <TableCell align="center">
                                Home
                            </TableCell>
                            <TableCell align="center">
                                Draw
                            </TableCell>
                            <TableCell align="center">
                                Away
                            </TableCell>
                            <TableCell align="center">
                                Predicted <br />
                                Score
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" colSpan={5}  sx={{backgroundColor: 'grey'}}>
                                Featured
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
                                {prediction['1']}
                            </TableCell>
                            <TableCell align="center">
                                {prediction.X}
                            </TableCell>
                            <TableCell align="center">
                                {prediction['2']}
                            </TableCell>
                            <TableCell align="center">
                                5-0
                            </TableCell>
                            </TableRow>
                        ))}
                        {predictions.la_liga.map((prediction) =>  (
                            <TableRow  hover>
                            <TableCell align="center">
                                <TeamsCard hometeam={prediction.HomeTeam} awayteam={prediction.AwayTeam}/>
                            </TableCell>
                            <TableCell align="center">
                                {prediction['1']}
                            </TableCell>
                            <TableCell align="center">
                                {prediction.X}
                            </TableCell>
                            <TableCell align="center">
                                {prediction['2']}
                            </TableCell>
                            <TableCell align="center">
                                5-0
                            </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}