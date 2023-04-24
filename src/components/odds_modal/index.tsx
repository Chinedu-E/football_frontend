import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  
};

type OddsProps = {
    home: string;
    away: string;
    home_odds: number;
    away_odds: number;
    draw_odds: number;
    x?: number;
}

export default function OddsModal(props: OddsProps) {
  const { home, away, home_odds, away_odds, draw_odds, x } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" size="small" color="info" onClick={handleOpen} sx={{bgcolor: "#333"}}>View</Button>
      <Modal
        keepMounted
        disableEnforceFocus
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2" textAlign='center'>
            {home} - {away}
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }} component="div" textAlign="center">
            <span style={{width: "30%", display: "inline-block"}}>1</span>
            <span style={{width: "30%", display: "inline-block"}}>X</span>
            <span style={{width: "30%", display: "inline-block"}}>2</span>
          </Typography>
          <Typography sx={{ mt: 1 }} component="div" textAlign="center">
            <span style={{width: "30%", display: "inline-block"}}>{home_odds}</span>
            <span style={{width: "30%", display: "inline-block"}}>{draw_odds}</span>
            <span style={{width: "30%", display: "inline-block"}}>{away_odds}</span>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}