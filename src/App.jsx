import Post from './Post'
import Sidebar from './Sidebar' 
import building from './assets/building.webp'
import architecture from './assets/architecture.webp'
import ocean from './assets/ocean.webp'
import { useState } from 'react'
import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'

const AppContainer = styled('div')`
  transition: background-color 0.5s ease, color 0.5s ease;
  height: 100vh;
  width: 100vw;
`;

const useTheme = (defaultTheme = 'light') => {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
  };

  return [theme, toggleTheme];
};

function App() {
  const [theme, toggleTheme] = useTheme();

  const globalStyles = css`
    body {
      background-color: ${theme === 'light' ? 'white' : 'black'};
      color: ${theme === 'light' ? 'black' : 'white'};
      transition: background-color 1s ease-in-out, color 1s ease-in-out;
    }
  `;

  const mockPosts = [
    {
      title: 'Mock Post 1',
      selftext: 'This is the content of mock post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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

  return (
    <>
      <Global styles={globalStyles} />
      <AppContainer>
          <Sidebar theme={theme} toggleTheme={toggleTheme} />
          <Post posts={mockPosts} theme={theme} />
      </AppContainer>
    </>
  )
}

export default App
