import React from 'react';
import Navbar from './Navbar';
import Home from './home';

function App() {
  const Blog = 'Welcome to the best Blog';
  const Likes = 50;
  const Link = "http://www.google.com";

  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
