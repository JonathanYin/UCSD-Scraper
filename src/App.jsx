import Post from './Post'
// import './App.css'

function App() {

  const mockPosts = [
    {
      title: 'Mock Post 1',
      selftext: 'This is the content of mock post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      permalink: '/r/test/comments/1/mock_post_1',
    },
    {
      title: 'Mock Post 2',
      selftext: 'Random other text.',
      permalink: '/r/test/comments/2/mock_post_2',
    },
    {
      title: 'Mock Post 3',
      selftext: 'More random text.',
      permalink: '/r/test/comments/3/mock_post_3',
    },
    // Add more mock posts as needed
  ];

  return (
    <>
    <div className="App">
      <Post posts={mockPosts} />
    </div>
    </>
  )
}

export default App
