import React from 'react';
import { Box, Typography } from '@mui/material';
import alertIcon from '../../assets/images/alert-icon.png';
import styles from "./ErrorMessage.module.css";

export const ErrorMessage = (props) => {
    const { error } = props;

    return (
        <Box className={styles['container']}>
            <img src={alertIcon} alt={"error-img"} />
            <Typography color={"#ef6c00"} variant={"h4"}>
                Oops! Something went wrong..
            </Typography>
            <Typography>Please refresh or try again later</Typography>
            <Typography variant={"h5"} color={"error"}>
                {error}
            </Typography>
        </Box>
    );
};
