import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


type news = {
    content: string
    description: string
    league: string
    title: string
    url: string
    urlToImage: string
    publishedAt: string
}


export default function NewsCard(props: news) {

  const {content, description, league, title, url, urlToImage, publishedAt} = props;
  return (
    <Card sx={{ maxWidth: 345, height: 275, textOverflow: 'ellipsis', overflow: 'hidden' }}>
      <CardActionArea href={url} target='_blank'>
        <CardMedia
          component="img"
          height="140"
          image={urlToImage}
          alt="broken link"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}