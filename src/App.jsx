import Post from './Post'
// import './App.css'

function App() {

  const mockPosts = [
    {
      title: 'Mock Post 1',
      selftext: 'This is the content of mock post 1.',
      permalink: '/r/test/comments/1/mock_post_1',
    },
    {
      title: 'Mock Post 2',
      selftext: 'This is the content of mock post 2.',
      permalink: '/r/test/comments/2/mock_post_2',
    },
    // Add more mock posts as needed
  ];

  return (
    <>
    <div className="App">
      {mockPosts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
    </>
  )
}

export default App
