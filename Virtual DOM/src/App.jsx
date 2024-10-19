// import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    alert('click handel');
    console.log('click me');
  };
  return (
    <>
      <button
        onClick={() => {
          alert('click handel');
        }}
      >
        Click me
      </button>
      <AlertBtn message={'loding...'}>Play Movie</AlertBtn>
    </>
  );
}

export default App;

function AlertBtn({ message, children }) {
  return (
    <button
      onClick={() => {
        alert(message);
      }}
    >
      {children}
    </button>
  );
}
