import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Grid, Pagination, Fade } from '@mui/material';
import { fetchPosts } from '../../api/postApi';
import { POSTS_PER_PAGE } from '../../api/postApi';
import { ParallaxCard } from '../../components/ParallaxCard/ParallaxCard';
import { ParallaxCardSkeleton } from '../../components/ParallaxCard/ParallaxCardSkeleton/ParallaxCardSkeleton';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { BREAKPOINTS } from '../../constants/breakpoints/breakpoints';
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

  const { data: posts, isLoading, error } = useQuery(
    ['posts', currentPage],
    () => fetchPosts(currentPage),
    {
      staleTime: Infinity,
    }
  );

  const totalPages = posts?.headers['x-wp-totalpages'];

  const onPageChange = (ev, newPage) => {
    setPage(newPage);
  };

  if (isLoading) {
    return <ParallaxCardSkeleton numOfCards={POSTS_PER_PAGE} hasImage={!!posts?.featured_media?.source_urll} />;
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
          <Alert severity={"info"}>
            <AlertTitle>Click on the post you want to read more..</AlertTitle>
          </Alert>
        </div>
      </Fade>

      <div className={styles['pagination-container']}>
        <Pagination count={parseInt(totalPages)} page={currentPage} onChange={onPageChange} color={"primary"} />
      </div>
    </>
  );
};