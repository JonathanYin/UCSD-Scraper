/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from "framer-motion";

const DisplayItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const CardInfo = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 75%;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const cardAnimation = {
  hidden: { opacity: 0, x: 100 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.3
    } 
  },
  exit: { opacity: 0, x: -100, transition: { duration: 0.5 } }
}

const TextContainer = styled.div`
  flex: 1;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 55vh;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const Subtitle = styled.h2`
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 3px;
  font-size: 10px;
  text-transform: uppercase;
  margin: 0;
  color: #7E7E7E;    
  font-weight: 700;
  transform: translateY(25%);
`;

const Title = styled.h1`
  margin: 15px 0 0 0;
  padding-top: 10px;
  font-family: 'Playfair Display', serif;
  font-size: 44px;
  line-height: 45px;
  letter-spacing: 3px;
  font-weight: 700;
  color: #2C2C2C;
`;

const Description = styled.p`
  margin-top: 35px;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  color: #7e7e7e;
  line-height: 22px;
  margin-bottom: 35px;
`;

const LinkBtn = styled.a`
  width: 35%;
  color: #2C2C2C;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 3px;
  font-size: 11px;
  text-transform: uppercase;
  margin: 0;
  width: 35%;
  font-weight: 700;
  text-decoration: none;

`;
const ArrowBtnContainer = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  width: 80px;
  height: 30px;
`;

const ArrowBtn = styled.button`
  flex: 1;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 20%;
    bottom: 20%;
    width: 0.5px;
    background-color: #333;
  }

  &:last-child::after {
    content: none;
  }
`;

const Carousel = ({ post, goPrev, goNext }) => (
  <DisplayItem>
    <AnimatePresence mode="wait">
      <CardInfo
        key={post.permalink} 
        variants={cardAnimation} 
        initial="hidden" 
        animate="show" 
        exit="exit">
        <TextContainer>
        <Subtitle>Subtitle</Subtitle>
          <Title>{post.title}</Title>
          <Description>{post.selftext}</Description>
          <LinkBtn href={`https://reddit.com${post.permalink}`} target="_blank" rel="noreferrer">See comments</LinkBtn>
        </TextContainer>
        <ImageContainer>
          <CardImage src={post.image} alt="Post image" draggable="false"/>
        </ImageContainer>
        <ArrowBtnContainer>
          <ArrowBtn onClick={goPrev}>
            <FontAwesomeIcon icon={faArrowLeft} size="xs"/>
          </ArrowBtn>
          <ArrowBtn onClick={goNext}>
            <FontAwesomeIcon icon={faArrowRight} size="xs"/>
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
};

export default Carousel;
