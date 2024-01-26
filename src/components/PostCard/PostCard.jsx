import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Fade } from '@mui/material';
import { PropTypes } from 'prop-types';

export const PostCard = (props) => {
  const { title, description, imageUrl, handleSeeMoreBtn } = props;

  const handleSeeMore = () => {
    handleSeeMoreBtn();
  };

  return (
    <Fade in={true} timeout={700} unmountOnExit >
      <Card sx={{ maxWidth: 600, borderRadius: 2, backgroundColor: "#1D1D1F", padding: "20px 10px" }}>
        <CardMedia
          component="img"
          image={imageUrl}
          src={imageUrl}
        />
        <CardContent>
          <Typography gutterBottom style={{ color: "#6DBBEA" }} variant="h5" component="div">
            {title}
          </Typography>
          <Typography color={"#D0D0D0"} variant="body2" dangerouslySetInnerHTML={{ __html: description }} />
        </CardContent>
        <CardActions>
          <Button onClick={handleSeeMore} variant="contained" size="small" style={{ outline: 'none' }}>
            Read more
          </Button>
        </CardActions>
      </Card>
    </Fade>
  );
};

PostCard.props = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  handleSeeMoreBtn: PropTypes.func.isRequired, 
};
