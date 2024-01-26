import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const SkeletonComponent = ({ count }) => {
    return (
        <>
            {Array.from({ length: count }, (__, index) => (
                <React.Fragment key={index}>
                    <Skeleton
                        variant="rounded"
                        height={index % 2 === 0 ? 50 : 35}
                        sx={{ marginLeft: 1.5, marginTop: 2.5, backgroundColor: "#A9A9A9", width: index % 2 === 0 ? "56%" : "29%" }}
                    />
                    <Skeleton
                        variant="rounded"
                        height={index % 2 === 0 ? 100 : 89}
                        sx={{ marginLeft: 1.5, marginTop: 2.5, backgroundColor: "#A9A9A9", width: index % 2 === 0 ? "79%" : "59%" }}
                    />
                </React.Fragment>
            ))}
        </>
    );
};

export const PostDetailsPageSkeleton = () => {
    const numTimesToRender = 5;

    return (
        <div style={{
            background: "#242424",
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            borderRadius: 8,
        }}>
            <Skeleton variant="text" height={88} sx={{ marginLeft: 1.5, marginTop: 1.5, backgroundColor: "#A9A9A9", width: "90%" }} />
            <Skeleton variant="rounded" height={200} sx={{ marginLeft: 1.5, marginTop: 1.5, backgroundColor: "#A9A9A9", width: "98%" }} />
            <SkeletonComponent count={numTimesToRender} />
        </div>
    );
};
