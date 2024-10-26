import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts';
import { AttributeSection } from './components/AttributeSection';

function App() {
  const [num, setNum] = useState<number>(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <AttributeSection attributes={ATTRIBUTE_LIST} />
      </section>
    </div>
  );
}

export default App;
