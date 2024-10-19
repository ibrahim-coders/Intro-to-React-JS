import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function Test() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Rakib');
  useEffect(() => {
    fetchApi();
    // document.titel = `You Clicked ${count} time`;
  });

  useEffect(() => {
    console.log(count);
  }, [count]);

  const textChanges = () => setText('Ibrahim');

  function fetchApi() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => console.log(data));
  }
  return (
    <>
      <h2>https://jsonplaceholder.typicode.com/posts</h2>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>

      <button onClick={textChanges}>Click ME</button>
      <h2>Hi my name is a {text}</h2>
    </>
  );
}

export default App;
