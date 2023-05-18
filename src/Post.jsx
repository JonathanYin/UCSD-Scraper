import PropTypes from 'prop-types';
import Carousel from './Carousel';

const Post = ({ post }) => (
  <Carousel post={post} />
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    selftext: PropTypes.string,
    permalink: PropTypes.string,
  }).isRequired,
};

export default Post;
