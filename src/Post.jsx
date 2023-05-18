import { useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';

const Post = ({ posts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => setCurrentIndex((oldIndex) => oldIndex === 0 ? posts.length - 1 : oldIndex - 1);
  const goNext = () => setCurrentIndex((oldIndex) => oldIndex === posts.length - 1 ? 0 : oldIndex + 1);

  return (
    <Carousel 
      post={posts[currentIndex]} 
      goPrev={goPrev} 
      goNext={goNext} 
    />
  );
};

Post.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      selftext: PropTypes.string,
      permalink: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Post;
