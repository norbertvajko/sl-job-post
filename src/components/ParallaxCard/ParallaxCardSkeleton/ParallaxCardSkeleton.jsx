import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Grid } from '@mui/material';

export const ParallaxCardSkeleton = ({ numOfCards, hasImage }) => {

    const skeletonContainerStyle = {
        background: "#242424",
        maxWidth: 660,
        maxHeight: 400,
        display: "flex",
        flexDirection: "column",
        borderRadius: 8,
        marginTop: "20px",
        paddingBottom: "40px",
    }

    const skeletonDefaultStyle = {
        backgroundColor: "#A9A9A9",
    };

    const skeletonItems = Array.from({ length: numOfCards }, (_, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} >
            <div style={skeletonContainerStyle}>
                {hasImage && (
                    <Skeleton variant="rectangular" height={267} sx={{ ...skeletonDefaultStyle, marginLeft: 1, marginRight: 1, marginTop: 2 }} />
                )}
                <Skeleton variant="text" height={40} sx={{ ...skeletonDefaultStyle, marginLeft: 3, marginRight: 3, marginTop: hasImage ? 2 : 4 }} />
                <Skeleton variant="text" width={280} height={40} sx={{ ...skeletonDefaultStyle, marginLeft: 3, marginRight: 3 }} />
                <Skeleton variant="rounded" height={160} sx={{ ...skeletonDefaultStyle, marginLeft: 3, marginRight: 3, marginTop: 2, marginBottom: 4 }} />
            </div>
        </Grid>
    ));

    return (
        <Grid container spacing={3} padding="50px 90px 150px 90px">
            {skeletonItems}
        </Grid>
    );
};
