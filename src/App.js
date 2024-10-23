import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  var indexNav = 0;
  var [nav , setnav] = useState(1)
  return (
    <div className="App">
      <nav>
        <ul>
          <li onClick={()=> setnav(nav=1)}>Campus Project</li>
          <li onClick={()=> setnav(nav=2)}>Self Project</li>
          <li onClick={()=> setnav(nav=3)} className='nav-home'>Nutthakun.W</li>
          <li onClick={()=> setnav(nav=4)}>Certificate</li>
          <li onClick={()=> setnav(nav=5)}>Skills & Tools</li>
        </ul>
      </nav>
      {nav === 3 ? <Home/> : null}
    </div>
  );
}

export default App;
