import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Container, Paper } from '@mui/material';
import { APP_ROUTES } from '../../constants/routes/routes';
import { useSpring, animated } from 'react-spring';

export const NotFoundPage = () => {
  const [modalVisible] = useState(true);

  const { opacity, } = useSpring({
    from: { opacity: 0, shake: 0 },
    to: async (next) => {
      await next({ opacity: modalVisible ? 1 : 0 });
    },
    config: { tension: 200, friction: 15, duration: 500 },
  });

  const animatedNotFoundContainerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: opacity,
  }

  return (
    <animated.div style={animatedNotFoundContainerStyle}>
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: '2rem', textAlign: 'center' }}>
          <Typography variant={"h4"} gutterBottom>
            404 - Not Found
          </Typography>
          <Typography variant={"body1"} paragraph>
            The page you are looking for might be in another castle.
          </Typography>
          <Button variant={"contained"} color={"primary"} component={Link} to={APP_ROUTES.HOME}>
            Go to Home
          </Button>
        </Paper>
      </Container>
    </animated.div>
  );
};
