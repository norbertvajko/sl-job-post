import Card from "react-animated-3d-card";
import { Typography } from "@mui/material";
import React from "react";
import styles from "./ParallaxCard.module.css";


export const ParallaxCard = (props) => {
    const { title, description, handleSeeMoreBtn } = props;

    const handleCardClick = () => {
        handleSeeMoreBtn();
    };

    return (
        <Card
            shineStrength={0.2}
            style={cardStyle}
            onClick={handleCardClick}
        >
            <div className={styles["container"]}>
                <div className={styles["container-text"]}>
                    <Typography style={titleStyle} fontSize={28} gutterBottom variant={"h3"} fontWeight={"bold"} component={"h4"}>
                        {title}
                    </Typography>
                    <Typography className={styles['description']} fontSize={16} color={"#D0D0D0"} variant={"body2"} dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </div>
        </Card>
    );
};

const cardStyle = {
    backgroundColor: "#1D1D1F",
    maxWidth: "680px",
    height: "316px",
    padding: 20,
};


const titleStyle = {
    color: "#1976D2",
    paddingBottom: "20px",
};
