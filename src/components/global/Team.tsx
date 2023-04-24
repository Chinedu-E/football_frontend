
import Avatar from '@mui/material/Avatar';
import { Box, Typography } from '@mui/material';

type TeamCardProps = {
    team: string;
}

export default function TeamCard(props: TeamCardProps){
    const {team} = props;

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
            <Box sx={{
            display: 'flex',
            alignItems: 'center'}}>
                <Box sx={{paddingRight: 2}}>
                    <Avatar src={getTeamlogoUrl(team)} alt="" sx={{ width: 24, height: 24 }}/>
                </Box>
                
                <Typography>{team}</Typography>
            </Box>
        </Box>
    )
}