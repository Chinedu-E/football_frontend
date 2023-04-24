import * as React from 'react';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsIcon from '@mui/icons-material/Sports';
import FeedIcon from '@mui/icons-material/Feed';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';

import './main.css'

export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  const labels = ["", "Standings", "Predictions", "News", "Scores"]
  const navigate = useNavigate();

  return (
    <div id="mobile-nav">
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, opacity: 1 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          console.log(labels[newValue])
          setValue(newValue);
          navigate(`/${labels[newValue]}`)
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Standings" icon={<EmojiEventsIcon />} />
        <BottomNavigationAction label="Predictions" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="News" icon={<FeedIcon />} />
        <BottomNavigationAction label="Scores" icon={<SportsIcon />} />
      </BottomNavigation>
    </div>
    </div>
  );
}
