import { Typography, Fade } from "@mui/material";
import styled from 'styled-components';

const PostDetailsCardContainer = styled.div`
    p {
      color: #D0D0D0;
    }

    p:first-child {
      color: #FFFF;
      font-weight: bold;
      font-size: 19px;
    }

    h3: not(:first-child) {
    color: #1976D2;
    }

    ul {
      list-style: none;
      font-weight: bold;
    }
`;


export const PostDetailsCard = (props) => {
  const { title, content, imageSrc } = props;

  const imgStyle = {
    maxWidth: '100%',
    height: 'auto',
    marginTop: 8,
    borderRadius: 8
  }

  return (
    <Fade in={true} timeout={400} unmountOnExit>
      <PostDetailsCardContainer>
        <Typography color={"#1976D2"} fontWeight={"bold"} variant={"h3"}>{title}</Typography>
        {imageSrc && (
          <img
            src={imageSrc}
            style={imgStyle}
          />
        )}
        <Typography variant={"body1"} dangerouslySetInnerHTML={{ __html: content }} />
      </PostDetailsCardContainer>
    </Fade>

  )
}