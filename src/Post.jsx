import { useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import { css } from '@emotion/react';

const Post = ({ posts, theme }) => {
  const lightThemeStyles = css`
    background-color: white;
    color: black;
  `;

  const darkThemeStyles = css`
    background-color: black;
    color: white;
  `;

  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => setCurrentIndex((oldIndex) => oldIndex === 0 ? posts.length - 1 : oldIndex - 1);
  const goNext = () => setCurrentIndex((oldIndex) => oldIndex === posts.length - 1 ? 0 : oldIndex + 1);

  return (
    <div css={theme === 'light' ? lightThemeStyles : darkThemeStyles}>
        <Carousel 
          post={posts[currentIndex]} 
          goPrev={goPrev} 
          goNext={goNext} 
          theme={theme}
        />
    </div>
  )
};

Post.propTypes = {
  theme: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      selftext: PropTypes.string,
      permalink: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Post;
