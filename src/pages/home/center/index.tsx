import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import NewsCard from '../../../components/news';
import defaultNews from '../../../data/default/default_news';
import "./main.css";
import TeamsCard from '../../../components/global/Teams';



const CenterDiv = () => {
    const [news, setNews] = React.useState([defaultNews])
    const [featured, setFeatured]  = React.useState([[
        {
            'HomeTeam': '',
            'AwayTeam': '',
            '1': '',
            'X': '',
            '2': '',
            'HG': '',
            'AG': '',
            'B365H': '',
            'B365D': '',
            'B365A': '',
        }
    ]])

    React.useEffect(() => {
        fetch(`http://127.0.0.1:8000/news/premier_league`)
        .then(response => response.json())
        .then(data => setNews(data.news));
        }, []);

    React.useEffect(() => {
        fetch(`http://127.0.0.1:8000/featured`)
        .then(response => response.json())
        .then(data => setFeatured(data));
        }, []);

    return (
        <Container id="center" style={{width: '100%', textAlign: 'center', height: '100%'}}>
            <TableContainer component={Paper}>
                <Table stickyHeader aria-label="simple table" size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="center" colSpan={3}>
                                Probabilty%
                            </TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell  align="center">
                                <div id='teams'>
                                    Home Team <br />
                                    - <br />
                                    Away Team
                                </div>
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
                            <TableCell align="center">
                                Correct <br />
                                Score
                            </TableCell>
                            <TableCell align="center">
                                Bookies <br />
                                Odds
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" colSpan={7}>
                                Featured
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {featured.map((lfeatured) => (
                            lfeatured.map((item) => (
                                <TableRow hover>
                                    <TableCell align="center">
                                        <TeamsCard hometeam={item.HomeTeam} awayteam={item.AwayTeam}/>
                                    </TableCell>
                                    <TableCell align="center">{item['1']}</TableCell>
                                    <TableCell align="center">{item.X}</TableCell>
                                    <TableCell align="center">{item['2']}</TableCell>
                                    <TableCell align="center">{item.HG} - {item.AG}</TableCell>
                                    <TableCell align="center">{item.HG} - {item.AG}</TableCell>
                                    <TableCell align="center">View</TableCell>
                                </TableRow>
                            ))
                        
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <div>
                View all predictions
            </div>

            
            <div id="news-grid" >
            {
                news.map((news, i) => (
                    <div id="news-wrapper" key={i}>
                        <NewsCard 
                            content={news.content}
                            url={news.url}
                            urlToImage={news.urlToImage}
                            description={news.description}
                            league={news.league}
                            title={news.title}
                            publishedAt={news.publishedAt}
                            />
                    </div>
                    
                )
                )
            }
            </div>
            
            
            
        </Container>
    )
}


export default CenterDiv;