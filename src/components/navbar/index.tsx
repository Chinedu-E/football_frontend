import React from "react";
import { NavLink as Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { Box, Typography, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsIcon from '@mui/icons-material/Sports';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';
import { useNavigate } from 'react-router-dom';
import "./nav.css"

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const Navbar = () => {
    const navigate = useNavigate();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });

    const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

    const navigateLeague = (league: string) => {
      let url = getNavUrl(league);
      navigate(url);
      window.location.reload();
    }
    const getNavUrl = (league: string) => {
      league = league.toLowerCase()
      league = league.replace(" ", "_");
      return `/leagues/${league}`
    }

    const getLeagueLogoUrl = (league: string) => {
      switch (league) {

        case "Premier League":
          return `/england.png`

        case "Bundesliga":
          return `/germany.png`

        case "Serie A":
          return `/italy.png`

        case "La Liga":
          return `/spain.png`

        case "Ligue one":
          return `/france.png`
      }
    }

    const list = (anchor: Anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List id="mobile">
            {[{"name": 'Home', "icon": <HomeIcon/>, "to": "/"},
             {"name": 'Scores', "icon": <SportsIcon/>, "to": "/scores"},
             {"name": 'Predictions', "icon": <BatchPredictionIcon/>, "to": "/predictions"},
              {"name": 'Standings', "icon": <EmojiEventsIcon/>, "to": "/standings"}].map((nav, index) => (
              <ListItem key={nav.name} disablePadding>
                <ListItemButton onClick={() => {navigate(nav.to)}}>
                  <ListItemIcon>
                    {nav.icon}
                  </ListItemIcon>
                  <ListItemText primary={nav.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => {navigate("/")}}>
                <ListItemIcon>
                  <StarIcon/>
                </ListItemIcon>
                <ListItemText primary="Featured" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            {['Premier League', 'La Liga', 'Bundesliga', 'Serie A', 'Ligue one'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => {navigateLeague(text)}}>
                  <ListItemIcon>
                    <Avatar src={getLeagueLogoUrl(text)} alt="" sx={{ width: 24, height: 24 }}/>
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
    
    return (
        <div className="navbar" id="myNavbar">
            <IconButton onClick={toggleDrawer('left', true)} style={{color: 'white'}}>
                <MenuIcon/>
            </IconButton>
            <Link to="/standings">Standings</Link>
            <Link to="/scores">Scores</Link>
            <Link to="/predictions">Predictions</Link>
            <Link to="/">Home</Link>
            
            <React.Fragment key={'left'}>
                <Drawer
                  anchor={'left'}
                  open={state['left']}
                  onClose={toggleDrawer('left', false)}
                >
                  {list('left')}
                </Drawer>
            </React.Fragment>
        </div>
    )
}

export default Navbar;