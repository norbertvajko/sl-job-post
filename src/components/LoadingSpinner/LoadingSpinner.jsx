import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const LoadingSpinner = () => {

    const loadingSpinnerStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        width: 500,
    }

    return (
        <Box sx={loadingSpinnerStyle}>
            <CircularProgress size={130} />
        </Box>
    )
}
