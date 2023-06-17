/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const spinner = {
  animate: {
    rotate: 360,
  },
  transition: {
    loop: Infinity,
    ease: 'linear',
    duration: 1,
  },
};

const Spinner = () => (
  <motion.div
    style={{
      width: 50,
      height: 50,
      border: '5px solid #eee',
      borderTop: '5px solid #655DBB',
      borderRadius: '50%',
    }}
    variants={spinner}
    animate="animate"
  />
);

const PostContainer = styled('div')`
  background-color: ${({ theme }) =>
    theme === 'light' ? '#f5f4fd' : '#00071d'};
  transition: background-color 1s ease-in-out, color 1s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Post = ({ posts, theme, loading }) => {
  console.log('loading', loading);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () =>
    setCurrentIndex((oldIndex) =>
      oldIndex === 0 ? posts.length - 1 : oldIndex - 1,
    );
  const goNext = () =>
    setCurrentIndex((oldIndex) =>
      oldIndex === posts.length - 1 ? 0 : oldIndex + 1,
    );

  return (
    <PostContainer theme={theme}>
      {loading || posts.length === 0 ? (
        <Spinner />
      ) : (
        <Carousel
          post={posts[currentIndex]}
          goPrev={goPrev}
          goNext={goNext}
          theme={theme}
        />
      )}
    </PostContainer>
  );
};

Post.propTypes = {
  theme: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      selftext: PropTypes.string,
      permalink: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Post;
