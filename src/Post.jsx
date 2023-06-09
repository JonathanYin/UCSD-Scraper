/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import styled from '@emotion/styled';

const PostContainer = styled('div')`
  background-color: ${({ theme }) => theme === 'light' ? '#f5f4fd' : '#00071d'};
  transition: background-color 1s ease-in-out, color 1s ease-in-out;
`;

const Post = ({ posts, theme }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => setCurrentIndex((oldIndex) => oldIndex === 0 ? posts.length - 1 : oldIndex - 1);
  const goNext = () => setCurrentIndex((oldIndex) => oldIndex === posts.length - 1 ? 0 : oldIndex + 1);

  return (
    <PostContainer theme={theme}>
        <Carousel 
          post={posts[currentIndex]} 
          goPrev={goPrev} 
          goNext={goNext} 
          theme={theme}
        />
    </PostContainer>
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
