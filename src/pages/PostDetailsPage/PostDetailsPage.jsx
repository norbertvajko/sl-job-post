import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSpring, animated } from 'react-spring';
import { PostDetailsCard } from '../../components/PostDetailsCard/PostDetailsCard';
import { APP_ROUTES } from '../../constants/routes/routes';
import { PostDetailsPageSkeleton } from './PostDetailsPageSkeleton/PostDetailsPageSkeleton';
import { useGetPostById } from '../../hooks/useGetPosts';

export const PostDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: post, isLoading, error } = useGetPostById(id);

  const backArrowBtnStyle = {
    position: 'fixed',
    bottom: 16,
    right: 16
  }

  const springStyle = useSpring({
    from: { transform: 'scale(1)' },
    to: async next => {
      while (true) {
        await next({ transform: 'scale(2.0)' });
        await next({ transform: 'scale(1.5)' });
      }
    },
    reset: true,
  });

  const handleBackButtonClick = () => {
    navigate(APP_ROUTES.HOME);
  };

  if (isLoading) {
    return <PostDetailsPageSkeleton />;
  }

  return (
    <Paper style={{ backgroundColor: '#242424', padding: 16 }} elevation={3}>
      <PostDetailsCard
        title={post.title.rendered}
        content={post.content.rendered}
        imageSrc={post.featured_media.source_url}
      />
      <div style={backArrowBtnStyle}>
        <animated.div style={springStyle}>
          <IconButton style={{ color: '#F4AC32' }} size={"large"} onClick={handleBackButtonClick}>
            <ArrowBackIcon />
          </IconButton>
        </animated.div>
      </div>
    </Paper>
  );
};
