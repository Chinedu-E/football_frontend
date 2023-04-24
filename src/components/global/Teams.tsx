import * as React from 'react';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { Box, Typography } from '@mui/material';

type TeamCardProps = {
    hometeam: string;
    awayteam: string;
}

export default function TeamsCard(props: TeamCardProps){
    const {hometeam, awayteam} = props;

    const getTeamlogoUrl = (team: string) => {
      team = team.toLowerCase()
      team = team.replace(" ", "_");
      let url = `/${team}.png`
      return url
    }

    return (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              minWidth: "100%",
              height: "100%",
            },
          }}
        >
          <Paper elevation={3}>
            <Box sx={{
            display: 'flex',
            padding: 1,
            alignItems: 'center'}}>
                <Box sx={{paddingRight: 2}}>
                    <Avatar src={getTeamlogoUrl(hometeam)} alt="" sx={{ width: 34, height: 34 }}/>
                </Box>
                
                <Typography>{hometeam}</Typography>
            </Box>
            <Box sx={{
            display: 'flex',
            padding: 1,
            alignItems: 'center'}}>
                <Box sx={{paddingRight: 2}}>
                    <Avatar src={getTeamlogoUrl(awayteam)} alt="" sx={{ width: 34, height: 34 }}/>
                </Box>
                
                <Typography>{awayteam}</Typography>
            </Box>
          </Paper>
        </Box>
      );
}