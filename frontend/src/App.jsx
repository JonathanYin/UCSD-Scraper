import Post from './Post';
import Sidebar from './Sidebar';
import building from './assets/building.webp';
import architecture from './assets/architecture.webp';
import ocean from './assets/ocean.webp';
import blue_building from './assets/blue_building.webp';
import desk from './assets/desk.webp';
import outdoor_building from './assets/outdoor_building.webp';
import spiral from './assets/spiral.webp';
import stairs from './assets/stairs.webp';
import towers from './assets/towers.webp';
import iceland from './assets/iceland.webp';
import blue_curves from './assets/blue_curves.webp';
import waters from './assets/waters.webp';
import mountain from './assets/mountain.webp';
import glass_building from './assets/glass_building.webp';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';

const AppContainer = styled('div')`
  transition: background-color 1s ease-in-out, color 1s ease-in-out,
    border 1s ease-in-out;
  height: 100vh;
  width: 100vw;
`;

const useTheme = (defaultTheme = 'light') => {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return [theme, toggleTheme];
};

const globalStyles = (theme) => css`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${theme === 'light' ? '#f5f4fd' : '#00071d'};
    transition: background-color 1s ease-in-out;
  }
`;

const mockPosts = [
  {
    title: 'Mock Post 1',
    selftext:
      'This is the content of mock post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    permalink: '/r/test/comments/1/mock_post_1',
    image: building,
  },
  {
    title: 'Mock Post 2',
    selftext: 'Random other text.',
    permalink: '/r/test/comments/2/mock_post_2',
    image: architecture,
  },
  {
    title: 'Mock Post 3',
    selftext: 'More random text.',
    permalink: '/r/test/comments/3/mock_post_3',
    image: ocean,
  },
  // Add more mock posts as needed
];

let images = [
  building,
  architecture,
  ocean,
  blue_building,
  desk,
  outdoor_building,
  spiral,
  stairs,
  towers,
  iceland,
  blue_curves,
  waters,
  mountain,
  glass_building,
];

let lastIndex = null;

function getNextImage() {
  if (lastIndex !== null) {
    // remove the last used image from the array
    let lastImage = images.splice(lastIndex, 1)[0];

    // select a random image from the remaining images
    lastIndex = Math.floor(Math.random() * images.length);
    let nextImage = images[lastIndex];

    // add the last used image back into the array at a random position
    let newInsertIndex = Math.floor(Math.random() * (images.length + 1));
    images.splice(newInsertIndex, 0, lastImage);

    return nextImage;
  } else {
    // If there's no last index (first run), select a random image
    lastIndex = Math.floor(Math.random() * images.length);
    return images[lastIndex];
  }
}

function App() {
  const [theme, toggleTheme] = useTheme();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    setLoading(true);
    fetch(`http://127.0.0.1:5000/api/posts/cs/${limit}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const formattedData = data.map((post) => ({
          title: post.title,
          selftext: post.selftext,
          permalink: post.permalink,
          image: getNextImage(),
          flair: post.flair,
        }));
        setPosts(formattedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          'There has been a problem with your fetch operation:',
          error,
        );
        setPosts((currentPosts) => {
          if (currentPosts.length === 0) {
            return mockPosts;
          }
          return currentPosts;
        });
        setLoading(false);
      });
  }, [limit]);

  return (
    <>
      <Global styles={globalStyles(theme)} />
      <AppContainer>
        <Sidebar
          theme={theme}
          toggleTheme={toggleTheme}
          limit={limit}
          setLimit={setLimit}
        />
        <Post posts={posts} theme={theme} loading={loading} />
      </AppContainer>
    </>
  );
}

export default App;
