// Core
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 320,
    backgroundPosition: 'top',
  },
});

type PropTypes = {
  image: string,
  title: string,
  id: string
};

export const MediaCard = (
  { image = '', title = '', id = '' }: PropTypes,
): ReactElement => {
  const classes = useStyles();
  return (
    <Link to={`/cocktail/${id}`}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
};
