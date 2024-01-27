import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Pagination, Fade } from '@mui/material';
import { POSTS_PER_PAGE } from '../../api/postApi';
import { ParallaxCard } from '../../components/ParallaxCard/ParallaxCard';
import { Alert } from '../../components/Alert/Alert';
import { ParallaxCardSkeleton } from '../../components/ParallaxCard/ParallaxCardSkeleton/ParallaxCardSkeleton';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { BREAKPOINTS } from '../../constants/breakpoints/breakpoints';
import { useGetPosts } from '../../hooks/useGetPosts';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import styles from "./HomePage.module.css";

const INITIAL_PAGES = 1;

export const HomePage = () => {
  const [currentPage, setPage] = useState(INITIAL_PAGES);
  const [showAlert, setShowAlert] = useState(true);

  const navigate = useNavigate();
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowAlert(false);
    }, 5500);

    return () => {
      clearTimeout(timeoutId);
    };

  }, []);

  const { data: posts, isLoading, error } = useGetPosts(currentPage);

  const totalPages = posts?.headers['x-wp-totalpages'];

  const onPageChange = (ev, newPage) => {
    setPage(newPage);
  };

  if (isLoading) {
    return <ParallaxCardSkeleton numOfCards={POSTS_PER_PAGE} hasImage={!!posts?.featured_media?.source_urll} />;
  }

  if (error) {
    return <ErrorMessage error={error.message} />
  }

  return (
    <>
      <Grid className={styles["posts-container"]} container spacing={3}>
        {posts?.data.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4} padding={2}>
            <ParallaxCard
              imgSrc={post?.featured_media.source_url}
              description={post.excerpt.rendered}
              title={post.title.rendered}
              handleSeeMoreBtn={() => {
                navigate(`/post/${post.id}`);
              }}
            />
          </Grid>
        ))}
      </Grid>

      <Fade in={showAlert && windowWidth > BREAKPOINTS.DESKTOP} timeout={{ enter: 1000, exit: 1000 }} unmountOnExit>
        <div style={{ position: 'fixed', right: 45, bottom: 100 }}>
          <Alert type={"info"} message={"Click on the post you want to read more.."} />
        </div>
      </Fade>

      <div className={styles['pagination-container']}>
        <Pagination count={parseInt(totalPages)} page={currentPage} onChange={onPageChange} color={"primary"} />
      </div>
    </>
  );
};