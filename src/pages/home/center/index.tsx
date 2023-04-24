import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NewsCard from '../../../components/news';
import defaultNews from '../../../data/default/default_news';
import "./main.css";
import TeamsCard from '../../../components/global/Teams';
import OddsModal from '../../../components/odds_modal';

type DivProps = {
    league?: string;
}

const CenterDiv = (props: DivProps) => {
    const {league} = props;
    const navigate = useNavigate();
    const [news, setNews] = React.useState([defaultNews])
    const [featured, setFeatured]  = React.useState([[
        {
            'HomeTeam': '',
            'AwayTeam': '',
            '1': 0.0,
            'X': 0.0,
            '2': 0.0,
            'HG': '',
            'AG': '',
            'B365H': 1.0,
            'B365D': 1.0,
            'B365A': 1.0,
        }
    ]])

    React.useEffect(() => {
        const url = league ? `https://prem-backend-production.up.railway.app/news/${league}`: "https://prem-backend-production.up.railway.app/news"
        fetch(url)
        .then(response => response.json())
        .then(data => setNews(data));
        }, [league]);

    React.useEffect(() => {
        const url = league ? `https://prem-backend-production.up.railway.app/featured/${league}`: "https://prem-backend-production.up.railway.app/featured"
        fetch(url)
        .then(response => response.json())
        .then(data => setFeatured(data));
        }, [league]);

    return (
        <Container id="center" sx={{textAlign: "center"}}>
            <TableContainer component={Paper} sx={{border: '1px solid #000'}}>
                <Table stickyHeader aria-label="simple table" size="small">
                    <TableHead>
                        <TableRow sx={{fontWeight: 'bold'}}>
                            <TableCell></TableCell>
                            <TableCell align="center" colSpan={3} sx={{fontWeight: 'bold'}}>
                                Probabilty%
                            </TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" sx={{fontWeight: 'bold'}}>
                                <div id='teams'>
                                    Home Team <br />
                                    - <br />
                                    Away Team
                                </div>
                            </TableCell>
                            <TableCell align="center" sx={{fontWeight: 'bold'}}>
                                Home
                            </TableCell>
                            <TableCell align="center" sx={{fontWeight: 'bold'}}>
                                Draw
                            </TableCell>
                            <TableCell align="center" sx={{fontWeight: 'bold'}}>
                                Away
                            </TableCell>
                            <TableCell align="center" sx={{fontWeight: 'bold'}}>
                                Predicted <br />
                                Score
                            </TableCell>
                            <TableCell align="center" sx={{fontWeight: 'bold'}}>
                                Correct <br />
                                Score
                            </TableCell>
                            <TableCell align="center" sx={{fontWeight: 'bold'}}>
                                Bookies <br />
                                Odds
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" colSpan={7} sx={{fontWeight: 'bold'}}>
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
                                    <TableCell align="center">
                                        <OddsModal home={item.HomeTeam} away={item.AwayTeam} home_odds={item.B365H} away_odds={item.B365A} draw_odds={item.B365D}/>
                                    </TableCell>
                                </TableRow>
                            ))
                        
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
            {league ? null: (
                <div style={{padding: 20}}>
                    <Button size="small" variant='contained' onClick={() =>{navigate("/predictions")}} sx={{bgcolor: "#333"}}>
                        View all predictions
                    </Button>
                </div>
            )}

            
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