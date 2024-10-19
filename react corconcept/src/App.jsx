import './App.css';
import Posts from './Posts';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h3>React Core Concepts Recap</h3>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>Load data</li>
      </ol>
      <Posts />
    </>
  );
}

export default App;
