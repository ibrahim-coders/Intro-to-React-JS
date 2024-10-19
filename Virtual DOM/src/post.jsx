import { useEffect, useState } from 'react';
import './App.css';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function Post() {
  const [post, setPost] = useState([]);
  console.log(post);
  const fetchPosts = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();

    setPost(data);
  };

  useEffect(() => {
    fetchPosts();
    console.log();
  }, []);

  // if (post.length === 100) {
  //   return (
  //     <div>
  //       <h1>Loding....</h1>
  //     </div>
  //   );
  // }

  return (
    <>
      {post.map(data => {
        <PostCard post={data} />;
      })}
    </>
  );

  function PostCard({ Post }) {
    const { title, body } = post;
    return (
      <>
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </>
    );
  }
}

export default App;
