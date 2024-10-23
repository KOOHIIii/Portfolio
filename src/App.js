import './App.css';
import Home from './components/Home';
import CampusProject  from './components/CampusProject';
import SelfProject  from './components/SelfProject';
import Certificate  from './components/Certificate';
import Skills from './components/Skills';
import { useState } from 'react';

function App() {
  var [nav , setnav] = useState(3)
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
      {nav === 1 ? <CampusProject/> : null}
      {nav === 2 ? <SelfProject/> : null}
      {nav === 3 ? <Home/> : null}
      {nav === 4 ? <Certificate/> : null}
      {nav === 5 ? <Skills/> : null}
    </div>
  );
}

export default App;
