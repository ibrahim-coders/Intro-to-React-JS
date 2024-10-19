// import { useState } from 'react';

import './App.css';
import Counter from './counter';
import Team from './Team';
import User from './Usear';
import Friends from './Friends';
import Friend from './Friend';
function App() {
  const clickButton = () => {
    alert('button click');
  };
  const clickButton2 = () => {
    alert('button click2');
  };

  const nums = num => {
    alert(num + 3);
  };
  return (
    <>
      <h2>React Core Concepts 2</h2>
      <Friends></Friends>
      <Friend></Friend>
      <Counter></Counter>
      <Team></Team>
      <User></User>

      <button onClick={clickButton}>Click</button>
      <button onClick={clickButton2}>Click</button>
      <button onClick={() => nums(30)}>num</button>
    </>
  );
}

export default App;
