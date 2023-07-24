import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import MainBox from './components/MainBox';


function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise - Shirin Siddiqui</h1>
      </header>
      <section className="App-section">
      <MainBox>
          <h1>Skill Check</h1>
          {/* Contents Found in Components/MainBox */}
      </MainBox>
      </section>
    </div>
  );
}

export default App;
