/** @jsxImportSource @emotion/react */
// import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence } from "framer-motion";

import { DisplayItem, CardInfo, cardAnimation, TextContainer, ImageContainer, CardImage, Subtitle, 
  Title, Description, LinkBtn, ArrowBtnContainer, ArrowBtn, Divider } from './StyledComponents';

  const Carousel = ({ post, goPrev, goNext, theme }) => (
    <DisplayItem>
      <AnimatePresence mode="wait">
        <CardInfo
          key={post.permalink} 
          variants={cardAnimation} 
          initial="hidden" 
          animate="show" 
          exit="exit"
          theme={theme}
        >
          <TextContainer theme={theme}>
            <Subtitle theme={theme}>Subtitle</Subtitle>
            <Title theme={theme}>{post.title}</Title>
            <Description theme={theme}>{post.selftext}</Description>
            <LinkBtn theme={theme} href={`https://reddit.com${post.permalink}`} target="_blank" rel="noreferrer">See comments</LinkBtn>
          </TextContainer>
          <ImageContainer theme={theme}>
            <CardImage src={post.image} alt="Post image" draggable="false"/>
          </ImageContainer>
          <ArrowBtnContainer theme={theme}>
            <ArrowBtn onClick={goPrev}>
              <FontAwesomeIcon icon={faArrowLeft} size="xs" color={theme === 'light' ? '#000' : '#FFF'}/> {/*Update here*/}
            </ArrowBtn>
            <Divider theme={theme} />
            <ArrowBtn onClick={goNext}>
              <FontAwesomeIcon icon={faArrowRight} size="xs" color={theme === 'light' ? '#000' : '#FFF'}/> {/*And here*/}
            </ArrowBtn>
          </ArrowBtnContainer>
        </CardInfo>
  
      </AnimatePresence>
    </DisplayItem>
  );
  
Carousel.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    selftext: PropTypes.string,
    permalink: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  goPrev: PropTypes.func.isRequired,
  goNext: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Carousel;
