import { useEffect } from 'react';
import { useState } from 'react';
import Post from './post';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <h3>Posts: {posts.length}</h3>

      {posts.map(post => (
        <Post></Post>
      ))}
    </div>
  );
}
