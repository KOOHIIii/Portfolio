import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>Campus Project</li>
          <li>Self Project</li>
          <li>Nutthakun.W</li>
          <li>Certificate</li>
          <li>Skills & Tools</li>
        </ul>
      </nav>
      <Home/>
    </div>
  );
}

export default App;
