/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const CarouselItem = styled.div`
  /* ... Put the styles from .carousel-item here ... */
  
`;

const CarouselInfo = styled.div`
  /* ... Put the styles from .carousel-item__info here ... */
`;

const CarouselContainer = styled.div`
  /* ... Put the styles from .carousel-item__container here ... */
`;

const CarouselSubtitle = styled.h2`
  /* ... Put the styles from .carousel-item__subtitle here ... */
`;

const CarouselTitle = styled.h1`
  /* ... Put the styles from .carousel-item__title here ... */
`;

const CarouselDescription = styled.p`
  /* ... Put the styles from .carousel-item__description here ... */
`;

const CarouselBtn = styled.a`
  /* ... Put the styles from .carousel-item__btn here ... */
`;

const Carousel = ({ post }) => (
  <CarouselItem>
    <CarouselInfo>
      <CarouselContainer>
        <CarouselSubtitle>Subtitle</CarouselSubtitle>
        <CarouselTitle>{post.title}</CarouselTitle>
        <CarouselDescription>{post.selftext}</CarouselDescription>
        <CarouselBtn href={`https://reddit.com${post.permalink}`} target="_blank" rel="noreferrer">See comments</CarouselBtn>
      </CarouselContainer>
    </CarouselInfo>
  </CarouselItem>
);

Carousel.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    selftext: PropTypes.string,
    permalink: PropTypes.string,
  }).isRequired,
};

export default Carousel;
